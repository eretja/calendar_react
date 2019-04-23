import React from "react";
import PropTypes from "prop-types";
import Button from "ui/buttons/Button";
import Select from "ui/form/Select";
import SVGPrevious from "ui/svg/Previous";
import SVGNext from "ui/svg/Next";
import styles from "./calendar.scss";
import DaysOfWeek from "mod/daysOfWeek/DaysOfWeek";
import CalendarBody from "mod/calendarBody/CalendarBody";
import CalendarHeader from "mod/calendarHeader/CalendarHeader";
import EventBody from "mod/eventBody/EventBody";
import state from "./Data/state";

class Calendar extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    optionsState: PropTypes.string
  };

  static defaultProps = {
    text: "defaultText",
    optionsState: "text"
  };

  state = {
    currentDate: new Date()
  };

  setPreviousMonthButton(currentDate) {
    currentDate.setMonth(currentDate.getMonth() - 1);
    this.setState({
      currentDate: currentDate
    });
    console.log(1, currentDate, this.props);
  }

  setNextMonthButton(currentDate) {
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.setState({
      currentDate: currentDate
    });
    console.log(2, currentDate, this.props);
  }

  getPreviousMonthButton(currentDate) {
    let setPrevMonth = currentDate.getMonth();
    let newYear = currentDate.getFullYear();

    if (setPrevMonth === 0) {
      setPrevMonth = 11;
      newYear--;
    } else {
      setPrevMonth = currentDate.getMonth() - 1;
    }
    return setPrevMonth;
  }
  getNextMonthButton(currentDate) {
    let setNextMonth = currentDate.getMonth();
    let newYear = currentDate.getFullYear();

    if (setNextMonth === 11) {
      newYear++;
      setNextMonth = 0;
    } else {
      setNextMonth = newDate.getMonth() + 1;
    }
    return setNextMonth;
  }
  handleClick() {
    console.log("Clicked!");
  }


  onClick = (action) =>{
    let year = this.state.year
    let month = this.state.month
    month = month + action
    
    
    if(month < 0){
      year+=action
      month = 11
    }else if(month > 11){
      year+=action
      month = 0
    }
    this.setState({
      month,
      year
    },
    () =>{
      this.calendarBody()
    })    
  }

  render() {

    return (
      <div>
        <div className={styles.calendarHeader}>
          <CalendarHeader state={state} />
        </div>
        <div>
          <Button text="Month" onclick={this.handleClick} />
          <Button text="Week" />
          <Button text="Day" />
        </div>

        <Select options={state.monthChoice} />
        <Select options={state.yearChoice} />
        <SVGPrevious width={20} height={10} />
        <Button
          text="Previous"
          onclick={event => this.setPreviousMonthButton(this.state.currentDate)}
        />
        <Button
          text="Next"
          onclick={event => this.setNextMonthButton(this.state.currentDate)}
        />
        <SVGNext width={20} height={10} />
        <DaysOfWeek />
        <CalendarBody  state={state} currentDate={this.state.currentDate} /> 
        {/* <EventBody />  */}
      </div>
    );
  }
}

export default Calendar;
