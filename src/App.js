import React, { Component } from 'react';
// import Dummy from './components/ui/dummys/Dummy';
//import DummyBig from './components/mod/DummyBig';
import Calendar from './components/mod/Calendar';
 import state from './components/mod/Data/state';

class App extends Component {
    render() {
        return (  <div>
            {/* <DummyBig /> */}
            <Calendar state={state}/>
        </div>
        );
    }
}

export default App;
