import Adapter from "enzyme-adapter-react-16";
import React from "react";
//import renderer from "react-test-renderer";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import DaysOfWeek from "./DaysOfWeek";
//uimport "jest-styled-components";

configure({ adapter: new Adapter() });

describe("<DaysOfWeek /> enzyme snapshot", () => {
  it("serializes the styles", () => {
    const output = shallow(<DaysOfWeek name="Test" />);
    expect(toJson(output)).toMatchSnapshot();
  });
});