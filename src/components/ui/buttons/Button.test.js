import React from "react";
import Button from "./Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import renderer from "react-test-renderer";

describe("Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = renderer.create(<Button text="button test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has a .button classname", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button").hasClass("button")).toEqual(true);
  });
  // const mockFunction = jest.fn();
  // it("should call mock function when button is clicked", () => {
  //   const component = shallow(<Button onClick={mockFunction}/>);
  //   component.find("button").simulate("click");
  //   expect(mockFunction.mock.calls.length).toEqual(1)
  // });
});
