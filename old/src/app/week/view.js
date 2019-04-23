let view = function() {
  let timeList = document.getElementById("week__timeList");
  let currentDay = new Date();
  let currentMonth = currentDay.getMonth();
  let currentYear = currentDay.getFullYear();

  let getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
  };

  let daysInMonth = getDaysInMonth(currentMonth + 1, currentYear);

  let firstDayOfWeek = new Date();
  firstDayOfWeek.setDate(currentDay.getDate() - currentDay.getDay() + 1);
  //console.log("firstDayOfWeek", firstDayOfWeek);
  let lastDayOfWeek = new Date();
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
  //console.log("lastDayOfWeek", lastDayOfWeek);

  let firstday = firstDayOfWeek.toDateString();
  // console.log("firstDay", firstday);

  let lastday = lastDayOfWeek.toDateString();
  // console.log("lastDay", lastday);
  const setCurrentTitle = document.getElementById("header");
  const eventBody = document.getElementById("event");

  const domWeek = document.getElementById("week");

  const calendarControl = "";

  function init(calendarControl) {
    calendarControl = calendarControl;
    // console.log("view get contr model", calendarControl.getModel());
  }

  function setWeekEventListeners() {
    domWeek.addEventListener("click", function setEvents() {
      const calendarBody = document.getElementById("calendar-body");
      const form = document.getElementById("form");
      const eventButton = document.getElementById("eventButton");
      calendarBody.style.display = "none";
      form.style.display = "none";
      eventBody.style.display = "none";
      eventButton.style.display = "none";
      setCurrentTitle.innerHTML = firstday + " - " + lastday;
      setDisabledWeekButton();

      function createCells() {
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < 36; i++) {
          let row = document.createElement("tr");
          if (i % 2 === 0) {
            row.style.opacity = "0.5";
          }

          row.className = "row";
          for (let j = 0; j < 7; j++) {
            var cell = document.createElement("td");
            cell.className = "week__cells";

            row.appendChild(cell);
          }
          tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);

        timeList.appendChild(tbl);

        function setExtraRows() {
          let text = document.getElementsByClassName("row");

          text[0].innerHTML = "6 am";
          text[2].innerHTML = "7 am";
          text[4].innerHTML = "8 am";
          text[6].innerHTML = "9 am";
          text[8].innerHTML = "10 am";
          text[10].innerHTML = "11 am";
          text[12].innerHTML = "12 pm";
          text[14].innerHTML = "1 pm";
          text[16].innerHTML = "2 pm";
          text[18].innerHTML = "3 pm";
          text[20].innerHTML = "4 pm";
          text[22].innerHTML = "5 pm";
          text[24].innerHTML = "6 pm";
          text[26].innerHTML = "7 pm";
          text[28].innerHTML = "8 pm";
          text[30].innerHTML = "9 pm";
          text[32].innerHTML = "10 pm";
          text[34].innerHTML = "11 pm";
        }

        setExtraRows();

        function getActiveDate() {
          const week = document.getElementsByTagName("td");

          for (let i = 0; i < week.length; i++) {
            week[i].addEventListener("click", function() {
              for (let j = 0; j < week.length; j++) {
                if (week[j] === this) {
                  week[j].classList.add("week__cells--activeHour");
                  let addTask = "";
                  addTask = prompt("please add your task");
                  localStorage.setItem(addTask, JSON.stringify(addTask));

                  if (addTask !== null) {
                    week[j].innerHTML = addTask;
                    week[j].style.backgroundColor = "#efcdf0";
                    week[j].style.tableLayout = "fixed";
                  }
                } else {
                  week[j].classList.remove("week__cells--activeHour");
                }
              }
            });
          }
        }

        getActiveDate();
      }
      createCells();

      setPreviousNextButtonEventListener();

      returnToMonth();
    });

    function setDisabledWeekButton() {
      domWeek.disabled = "disabled";
    }
  }
  function setPreviousNextButtonEventListener() {
    const beforeDom = document.getElementById("previous");
    beforeDom.addEventListener("click", function() {
      let prevMonday;
      prevMonday.setDate(firstDayOfWeek.getDate() - 7);
      console.log("prevMonday", prevMonday);
      let prevSunday;
      prevSunday.setDate(prevMonday.getDate() + 6);

      let prevFirstDay = new Date(
        currentDay.setDate(prevMonday)
      ).toDateString();
      let prevLastDay = new Date(currentDay.setDate(prevSunday)).toDateString();

      if (prevMonday) {
        setCurrentTitle.innerHTML = prevFirstDay + " - " + prevLastDay;
      }
    });

    const nextDom = document.getElementById("next");
    nextDom.addEventListener("click", function() {
      let nextMonday;
      nextMonday.setDate(firstDayOfWeek.getDate() + 7);
      let nextSunday;
      nextSunday.setDate(nextMonday.getDate() + 6);

      let nextFirstDay = new Date(
        currentDay.setDate(nextMonday)
      ).toDateString();
      let nextLastDay = new Date(currentDay.setDate(nextSunday)).toDateString();

      if (nextMonday) {
        setCurrentTitle.innerHTML = nextFirstDay + " - " + nextLastDay;
      }
    });
  }
  function returnToMonth() {
    //console.log("calendarControl", calendarControl);
    const calendarBody = document.getElementById("monthButton");
    calendarBody.addEventListener("click", function() {
      const timeList = document.getElementById("week__timeList");
      timeList.style.display = "none";
      const calendar = document.getElementById("calendar-body");
      calendar.style.display = "inline";
      form.style.display = "block";
      eventBody.style.display = "inline";
      eventButton.style.display = "block";
      domWeek.removeAttribute("disabled");
      setCurrentTitle.innerHTML =
        calendarControl.currentMonth + " " + calendarControl.currentYear;
    });
  }

  function getModel() {
    return calendarControl;
  }

  /*function updateModel() {
    getModel(calendarControl);
  }
*/
  setWeekEventListeners();
  returnToMonth(getModel());

  return {
    init: init,
    setWeekEventListeners: setWeekEventListeners,
    getModel: getModel,
    setPreviousNextButtonEventListener: setPreviousNextButtonEventListener,

    //updateModel: updateModel
  };
};

view = view();

export { view };
