import React from "react";
import PropTypes from "prop-types";
//import Button from "ui/buttons/Button";
import Select from "ui/form/Select";
import SVGPrevious from "ui/svg/Previous";
import SVGNext from "ui/svg/Next";
import styles from "./calendar.scss";
//import CalendarBody from "mod/calendarBody/CalendarBody";
import CalendarHeader from "mod/calendarHeader/CalendarHeader";
import EventBody from "mod/eventBody/EventBody";
import state from "./Data/state";
import cx from "classnames";

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
      yearChoice: state.yearChoice,
      monthChoice: state.monthChoice,

      days: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.calendar();
  }

  handleChange(event) {
    this.setState({monthChoice: value});
  }
  calendar = () => {
    let { year, month, date } = this.state;
    const calendarWeeks = [],
      calendarDays = [];
    let firstDay = new Date(year, month).getDay() - 1;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let totalWeeks = Math.ceil((daysInMonth + firstDay) / 7);

    let dates = 1;
    for (let i = 0; i < totalWeeks * 7; i++) {
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
    let today = new Date();

    const { calendarWeeks, year, month, yearChoice, monthChoice } = this.state;
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

          <select value={this.state.value} onChange={this.handleChange}>
            <option value={monthChoice}  onChange={e => this.handleChange(e)}></option>

          </select><
            <Select
              options={monthChoice}
              onChange={e => this.handleChange(e)}
            />
            <Select options={yearChoice} onChange={e => this.handleChange(e)} />
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
                <div className={styles.week}>
                  {days.map((day, i) => {
                    return (
                      <div
                        className={cx(styles.day, {
                          [day === today.getDate() &&
                          month === today.getMonth() &&
                          styles.isToday]: true
                        })}
                      >
                        {day}
                      </div>
                    );
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
