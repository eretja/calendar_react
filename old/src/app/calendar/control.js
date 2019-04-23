let control = function(calendarView, eventView) {
  let calendarModel = null;

  function setPreviousMonthButton() {
    setNextPrevMonthButton(false);
  }

  function setNextMonthButton() {
    setNextPrevMonthButton(true);
  }

  function setNextPrevMonthButton(next) {
    let newDate = calendarModel.actDate;
    let setNewMonth = newDate.getMonth();
    let newYear = newDate.getFullYear();

    if (next) {
      if (setNewMonth === 11) {
        newYear++;
        setNewMonth = 0;
      } else {
        setNewMonth = newDate.getMonth() + 1;
      }
    } else {
      if (setNewMonth === 0) {
        setNewMonth = 11;
        newYear--;
      } else {
        setNewMonth = newDate.getMonth() - 1;
      }
    }

    newDate = new Date(newYear, setNewMonth);
    let newModel = calendarModel;
    newModel.actDate = newDate;
    newModel.currentMonth = setNewMonth;
    newModel.currentYear = newYear;
    updateModelAndView(newModel);
  }

  function initModel(modelData) {
    calendarModel = modelData;
  }

  function updateModel(modelData) {
    calendarModel = Object.assign(calendarModel, modelData);
  }

  function updateModelAndView(modelData) {
    updateModel(modelData);
    calendarView.displayDataInTheCalendar(calendarModel);
    eventView.setDayChoiceEventListener();
  }

  function getModel() {
    return calendarModel;
  }

  const element = document.getElementById("calendar");
  element.addEventListener("updateModel", function(e) {
    //console.log( 'message received', e);
    updateModel(e.detail);
  });

  element.addEventListener("updateModelAndView", function(e) {
    //console.log( 'message received', e);
    updateModel(e.detail);
    calendarView.displayDataInTheCalendar(calendarModel);
  });

  const el = document.getElementById("calendar");
  el.addEventListener("setPrevMonthButton", function(e) {
    //console.log( 'message received', e);
    setPreviousMonthButton();
  });

  const elem = document.getElementById("calendar");
  elem.addEventListener("setNextMonthButton", function(e) {
    //console.log( 'message received', e);
    setNextMonthButton();
  });

  /*
  element.addEventListener("modelDataRequest", function(e) {
    //console.log( 'message received', e);
    const elem = document.getElementById("calendar");
    const eventModelResponse= new CustomEvent("modelDataResponse", {
      detail: calendarModel
    });
    elem.dispatchEvent(eventModelResponse);
  });
  */

  return {
    setPreviousMonthButton: setPreviousMonthButton,
    setNextMonthButton: setNextMonthButton,
    initModel: initModel,
    getModel: getModel,
    updateModel: updateModel,
    updateModelAndView: updateModelAndView,
    setNextPrevMonthButton: setNextPrevMonthButton
  };
};

export { control }
