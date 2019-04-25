import React from "react";
import PropTypes from "prop-types";
import Button from "ui/buttons/Button";
import Select from "ui/form/Select";
import SVGPrevious from "ui/svg/Previous";
import SVGNext from "ui/svg/Next";
import styles from "./calendar.scss";
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
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      day: new Date().getDay(),
      calendarDays: [],
      calendarWeeks: [],
      yearChoice:state.yearChoice,
      monthChoice:state.monthChoice
    };
  }

  componentDidMount() {
    this.calendar();
  }

  calendar = () => {
    let { year, month, date } = this.state;
    const calendarWeeks = [],
      calendarDays = [];
    let firstDay = new Date(year, month).getDay() -1;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let totalWeeks = Math.ceil(daysInMonth / 7);

    let dates = 1;
    for (let i = 0; i < totalWeeks * 7; i++) {

      if (
        date === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
      ) {
        styles.isToday
      }
     if (i < firstDay || i >= daysInMonth + firstDay) {
        calendarDays.push(null);
      } else {
        calendarDays.push(dates);
        dates++;
      }
    }
    for (let i = 0; i < calendarDays.length; i++) {
      calendarWeeks.push(calendarDays.splice(0, 7));
    }

    this.setState({
      calendarDays,
      calendarWeeks
    });
  };
  updateState(element) {
    this.setState({monthChoice: element});
    this.setState({yearChoice: element});
  }
  onClick = action => {
    let year = this.state.year;
    let month = this.state.month;
    month = month + action;

    if (month < 0) {
      year += action;
      month = 11;
    } else if (month > 11) {
      year += action;
      month = 0;
    }
    this.setState(
      {
        month,
        year
      },
      () => {
        this.calendar();
      }
    );
  };

  render() {
    const {
      calendarWeeks,
      year,
      month,
      yearChoice,
      monthChoice
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.monthlabel}>
          {state.monthNames[month]} {year}
        </div>
        <div className={styles.calendar}>
          <div className={styles.calendartopHeader}>
            <div className={styles.button} onClick={() => this.onClick(-1)}>
              <SVGPrevious width={20} height={10} /> Previous
            </div>
            <Select options={monthChoice} onChange={this.updateState.bind(this)} />
            <Select options={yearChoice} onChange={this.updateState.bind(this)} />
            <div className={styles.button} onClick={() => this.onClick(+1)}>
              Next
              <SVGNext width={20} height={10} />
            </div>
          </div>
          <div className={styles.calendarheader}>
            {state.daysOfWeek.map((items, i) => {
              return (
                <div className={styles.day}>
                  <abbr title={items}>{items}</abbr>
                </div>
              );
            })}
          </div>
          <div className={styles.calendarbody}>
            {calendarWeeks.map((days, i) => {
              return (
                <div className={styles.aweek}>
                  {days.map((day, i) => {
                    return <div className={styles.aday}>{day}</div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const calendar = <Calendar showMonths={2} />;

export default Calendar;
