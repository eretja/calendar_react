let view = function() {

    function displayDataInTheCalendar( calendarModel ) {
    // dom updating
        const dataInTheCalendar = document.getElementById( 'calendar-body' );
        dataInTheCalendar.innerHTML = '';
        const setCurrentMonthTitle = document.getElementById( 'header' );
        setCurrentMonthTitle.innerHTML =
      calendarModel.months[calendarModel.currentMonth] +
      ' ' +
      calendarModel.currentYear;
        calendarModel.dom.selectYear.value = calendarModel.currentYear;
        calendarModel.dom.selectMonth.value = calendarModel.currentMonth;

        // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
        let getDaysInMonth = function( month, year ) {
            console.log(1, new Date( year, month, 0 ), month, year, typeof month, typeof year );
            // Here January is 1 based
            //Day 0 is the last day in the previous month
            return new Date( year, month, 0 ).getDate();
            // Here January is 0 based
            // return new Date(year, month+1, 0).getDate();
        };
     
        let daysInMonth = getDaysInMonth(
            calendarModel.currentMonth + 1,
            calendarModel.currentYear
        );
   
        let firstDayOfWeek = new Date(
            calendarModel.currentYear,
            calendarModel.currentMonth

        ).getDay();
    
        let lastDay = new Date(
            calendarModel.currentYear,
            calendarModel.currentMonth,
            0
        ).getDate();

        let currentDay = 1;
        let dayOfNextMonth = 0;


        console.log( 'currentYear', calendarModel.currentYear );
        console.log( 'currentMonth', calendarModel.currentMonth );
        console.log( 'daysInMonth', daysInMonth );
        console.log( 'firstDayOfWeek', firstDayOfWeek );
        console.log( 'lastDay', lastDay );

        for ( let i = 0; i < 6 && currentDay <= daysInMonth; i++ ) {
            let row = document.createElement( 'div' );
            row.className = 'calendar__row';
            for ( let j = 0; j < 7; j++ ) {
                let cell = document.createElement( 'div' );
                let cellText;
                row.appendChild( cell );

                if ( i === 0 && j < firstDayOfWeek - 1 ) {
                    cell.className = 'calendar__weekdays calendar__weekdays--prev';
                    cellText = lastDay - firstDayOfWeek + 2 + j;
                    console.log( 1, lastDay - firstDayOfWeek + 2 + j);
                } else if ( currentDay > daysInMonth ) {
                    cell.className = 'calendar__weekdays calendar__weekdays--next';
                    dayOfNextMonth++;
                    cellText = dayOfNextMonth;
                } else {
                    cellText = currentDay;
                    cell.className = 'calendar__weekdays';

                    let events = JSON.parse(
                        localStorage.getItem( getCurrentDate( cellText, calendarModel ) )
                    );
                    if ( events !== null ) {
                        cell.className = 'calendar__weekdays calendar__weekdays--event';
                    }
                    if (
                        currentDay === calendarModel.today.getDate() &&
            calendarModel.currentYear === calendarModel.today.getFullYear() &&
            calendarModel.currentMonth === calendarModel.today.getMonth()
                    ) {
                        cell.classList.add( 'calendar__weekdays--color' );
                    }

                    currentDay++;
                }
                cell.innerText = cellText;
            }

            dataInTheCalendar.appendChild( row );
        }
    }

    function getCurrentDate( day, calendarModel ) {
        return (
            calendarModel.currentYear + ' ' + calendarModel.currentMonth + ' ' + day
        );
    }

    function setYearChoiceAndMonthEventListeners() {
        const changeYear = document.getElementById( 'year' );
        const changeMonth = document.getElementById( 'month' );

        changeYear.addEventListener( 'change', function() {
            let newModel = {};
            newModel.currentYear = parseInt( changeYear.value );
            newModel.currentMonth = parseInt( changeMonth.value );
            newModel.actDate = new Date( newModel.currentYear, newModel.currentMonth );

            let eventYear = new CustomEvent( 'updateModelAndView', {
                detail: newModel
            } );
            const elementYear = document.getElementById( 'calendar' );
            elementYear.dispatchEvent( eventYear );
        } );

        changeMonth.addEventListener( 'change', function() {
            /*const elem = document.getElementById("calendar");
      const eventModelRequest = new Event("modelDataRequest");
      elem.addEventListener("modelDataResponse", function(e) {
        console.log( 'message received', e.detail);
      });
      elem.dispatchEvent(eventModelRequest);*/

            let newModel = {};
            newModel.currentYear = parseInt( changeYear.value );
            newModel.currentMonth = parseInt( changeMonth.value );
            newModel.actDate = new Date( newModel.currentYear, newModel.currentMonth );

            let eventMonth = new CustomEvent( 'updateModelAndView', {
                detail: newModel
            } );
            const elementMonth = document.getElementById( 'calendar' );
            elementMonth.dispatchEvent( eventMonth );
        } );
    }

    function setMonthCoiceEvenListeners() {
        const beforeDom = document.getElementById( 'previous' );
        beforeDom.addEventListener( 'click', function() {
            let eventPrev = new CustomEvent( 'setPrevMonthButton' );
            const element = document.getElementById( 'calendar' );
            element.dispatchEvent( eventPrev );
        } );

        const afterDom = document.getElementById( 'next' );
        afterDom.addEventListener( 'click', function() {
            let event = new CustomEvent( 'setNextMonthButton' );
            const el = document.getElementById( 'calendar' );
            el.dispatchEvent( event );
        } );
    }

    function setEventListeners( calendarModel ) {
        setYearChoiceAndMonthEventListeners( calendarModel );
        setMonthCoiceEvenListeners( calendarModel );
    }

    return {
        displayDataInTheCalendar: displayDataInTheCalendar,
        getCurrentDate: getCurrentDate,
        setEventListeners: setEventListeners
    };
};

view = view();

export { view };
