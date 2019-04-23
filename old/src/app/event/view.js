let view = function() {

  const domForm = document.getElementById("event__form");
  const domEventBody = document.getElementById("event__body");

  function setEventBodyEventListener() {
    const domAddEventButton = document.getElementById(
      "calendar__add-event-button"
    );
    domAddEventButton.addEventListener("click", function() {
      domForm.style.display = "block";
      domEventBody.style.display = "none";
    });

    const domCancelButton = document.getElementById("cancelButton");
    domCancelButton.addEventListener("click", function() {
      domForm.style.display = "none";
      domEventBody.style.display = "block";
    });

    const addEventData = document.getElementById("event__form--submit");
    addEventData.addEventListener("click", function() {
      let eventModel = {};
      eventModel.name = document.getElementById("event-name").value;
      eventModel.location = document.getElementById("event-location").value;
      eventModel.time = document.getElementById("event-time").value;
      eventModel.text =
        eventModel.name +
        " will be in " +
        eventModel.location +
        " at: " +
        eventModel.time +
        "<br>";

      let addEvent = new CustomEvent("setDataInLocalStorage", {
        detail: eventModel
      });
      const elementData = document.getElementById("event");
      //console.log("sending", addEvent);
      elementData.dispatchEvent(addEvent);
      //eventControl.setDataInLocalStorage(event.model);

      document
        .getElementsByClassName("calendar__weekdays--activeDay")[0]
        .classList.add("calendar__weekdays--event");

      let getData = new Event("EventDetails");
      const el = document.getElementById("event");
      //console.log("sending", getData);
      el.dispatchEvent(getData);
    });
  }

  function setDayChoiceEventListener() {
    const calendar = document.getElementsByClassName("calendar__weekdays");

    for (let i = 0; i < calendar.length; i++) {
      calendar[i].addEventListener("click", function() {
        for (let j = 0; j < calendar.length; j++) {
          if (calendar[j] === this) {
            calendar[j].classList.add("calendar__weekdays--activeDay");
            let setData = new Event("displayEventDetails");
            const element = document.getElementById("event");
            element.dispatchEvent(setData);
            //displayEventDetails(eventControl.getDataForEvent());

          } else {
            calendar[j].classList.remove("calendar__weekdays--activeDay");
          }
        }
      });
    }
  }

  function displayEventDetails(eventText) {
    document.getElementById("event--result").innerHTML = eventText;
    domForm.style.display = "none";
    domEventBody.style.display = "block";
  }

  return {
    setDayChoiceEventListener: setDayChoiceEventListener,
    displayEventDetails: displayEventDetails,
    setEventBodyEventListener: setEventBodyEventListener
  };
};

view = view();

export { view }
