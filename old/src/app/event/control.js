let control = function(eventView, calendarControl) {
  
  function getDataForEvent() {
    const calendarModel = calendarControl.getModel();
    let data = JSON.parse(localStorage.getItem(getDateForStorage(calendarModel)));

    let eventsText = "";

    if (!data) {
      return "No events for this date";
    }

    for (let i = 0; i < data.length; i++) {
      eventsText += data[i].text;
    }
    return eventsText;
  }

  function setDataInLocalStorage(eventModel, calendarModel) {
    let date = getDateForStorage(calendarModel);
    let dayEvents = JSON.parse(localStorage.getItem(date));
    if (!dayEvents) {
      dayEvents = [];
    }
    dayEvents.push(eventModel);

    localStorage.setItem(date, JSON.stringify(dayEvents));
  }

  function getDateForStorage(calendarModel) {
    const day = document.getElementsByClassName(
      "calendar__weekdays--activeDay"
    )[0].textContent;
    /*if (day === null) {
      return  'no date';
    } else {*/
    return (
      calendarModel.currentYear + " " + calendarModel.currentMonth + " " + day
    );
    //}
  }
  const elementData = document.getElementById("event");
  elementData.addEventListener("setDataInLocalStorage", function(e) {
    //console.log( 'message received', e);
    setDataInLocalStorage(e.detail, calendarControl.getModel());
  });

  const el = document.getElementById("event");
  el.addEventListener("EventDetails", function(e) {
    //console.log( 'message received', e);

    eventView.displayEventDetails(getDataForEvent());
  });

  const element = document.getElementById("event");
  element.addEventListener("displayEventDetails", function(e) {
    //console.log( 'message received', e);

    eventView.displayEventDetails(getDataForEvent());
  });
  return {
    getDataForEvent: getDataForEvent,
    setDataInLocalStorage: setDataInLocalStorage,
    getDateForStorage: getDateForStorage
  };
};

export {
  control
}