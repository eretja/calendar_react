import React from "react";
import CalendarBody from "./CalendarBody";

import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";

import TestRenderer from "react-test-renderer";

// const setup = (props={}, state=null)=>{
//     return shallow(<CalendarBody {...props}/>)
// }

describe("<CalendarBody />", () => {
  // https://jestjs.io/docs/en/snapshot-testing
  // https://github.com/facebook/jest/issues/2234

  const fixDate = "2019-04-03T15:31:44.892Z";
  // const fixDate = '2019-04-04T15:31:44.00'; // check error

  const RealDate = Date.now;
  global.Date.now = jest.fn(() => new RealDate(fixDate));
  Object.assign(Date, RealDate);

  //console.log( 'new Date()', new Date(), typeof new Date() );

  let CalendarBodyComponent;
  let state = {
    currentDate: new Date()
  };
  CalendarBodyComponent = shallow(
    <CalendarBody currentDate={state.currentDate} />
  );

  const testRenderer = TestRenderer.create(
    <CalendarBody currentDate={state.currentDate} />
  ).toJSON();

  it("should render CalendarBody with correct html", () => {
    expect(testRenderer).toMatchSnapshot();
  });

  global.Date.now = RealDate;

  it("should mount CalendarBody sucessfully", () => {
    expect(CalendarBodyComponent.length).toBe(1);
  });
});
