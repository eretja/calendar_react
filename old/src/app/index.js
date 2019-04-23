
import { model as calendarModel } from './calendar/model.js';
//console.log( 'calendar', calendarModel );

import { view as calendarView } from './calendar/view.js';
//console.log( 'view', calendarView );
calendarView.setEventListeners();


import { view as eventView } from './event/view.js';
//console.log( 'eventView', eventView );
eventView.setEventBodyEventListener();


import { control as calendarControl } from './calendar/control.js';
//console.log( 'calendarControl', calendarControl, typeof calendarControl );
const calendarControlF = calendarControl( calendarView, eventView );
//console.log( 'calendarControlF', calendarControlF );
calendarControlF.initModel( calendarModel );
calendarControlF.updateModelAndView( calendarModel );


import { control as eventControl } from './event/control.js';
const eventControlF = eventControl( eventView, calendarControlF );
//console.log( 'eventControlF', eventControlF );


import { model as weekModel } from './week/model.js';
//console.log( 'weekModel', weekModel);

import { view as weekView } from './week/view.js';

weekView.init( calendarControlF );
//weekView.updateModel(calendarControlF );
//weekView.returnToCalendar(calendarControlF);


//console.log( 'weekView', weekView );
//weekView.getModel(calendarControlF );
//console.log("weekView", weekView.getModel(calendarControl));
//weekView.updateModel(calendarControlF);
//console.log( 'calendarControlF', calendarControlF );
//weekViewF.returnToCalendar(calendarModel);


import { control as weekControl } from './week/control.js';
//console.log( 'weekControl', weekControl);

