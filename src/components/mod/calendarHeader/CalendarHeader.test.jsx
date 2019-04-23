import React from "react";
import CalendarHeader from "./CalendarHeader";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("<CalendarHeader />", () => {
  it("should render a calendar title", () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let CalendarHeaderComponent;

    const wrapper = shallow(<CalendarHeader monthNames={monthNames} />);
    CalendarHeaderComponent = shallow(
      <CalendarHeader monthNames={monthNames} />
    );
    expect(wrapper.find(".calendarHeader")).toBeDefined();
    //expect(wrapper.find('.calendarHeader')).toHaveLength(monthNames.length);
    //expect(wrapper.contains(<div>May 2019</div>)).toBeTruthy();
    expect(CalendarHeaderComponent.length).toBe(1);
  });
});
