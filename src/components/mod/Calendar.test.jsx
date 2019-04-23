import React from "react";
import Calendar from "./Calendar";
import ReactDOM from 'react-dom';

it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Calendar/>, div );
    ReactDOM.unmountComponentAtNode( div );
  } );