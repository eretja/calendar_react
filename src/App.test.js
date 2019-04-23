import React from "react";
import App from "./App";
//import state from './Data/state';
import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toEqual(1);
});
