import React from "react";
import Select from "./Select";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import renderer from "react-test-renderer";

describe("Test Select component", () => {
  it("should be defined", () => {
    let wrapper = shallow(<Select/>);
    expect(wrapper).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
