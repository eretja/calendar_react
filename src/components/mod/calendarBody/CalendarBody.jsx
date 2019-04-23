import React from "react";
import PropTypes from "prop-types";
import styles from "./calendarBody.scss";
import Button from "ui/buttons/Button";

const CalendarBody = (props) => {
 let {year,month} = props.state
 
 let daysInMonth = new Date(year, month+1, 0).getDate();

  let firstDayOfWeek = new Date(year, month).getDay();

  let lastDay = new Date(year, month, 0).getDate();
  let day = 1;
  let dayOfNextMonth = 0;
  let cellText;
  const tds = (i, currentDate) => {
    let td = [];
    const baseDayClass = "basis class";
    for (let y = 0; y < 7; y++) {
      let dayClass = baseDayClass;
      if (i === 0 && y < firstDayOfWeek - 1) {
        cellText = lastDay - firstDayOfWeek + 2 + y;
        dayClass += " " + styles.calendarNextMonth;
      } else if (day >= daysInMonth) {
        dayOfNextMonth++;
        dayClass += " " + styles.calendarNextMonth;
        cellText = day;
        day = dayOfNextMonth;
      } else {
        cellText = day;
        if (
          day === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          dayClass += " " + styles.actualDate;
        }
        day++;
      }
      td.push(
        <td key={y} className={dayClass}>
          {cellText}
        </td>
      );
    }
    return td;
  };
  const trs = currentDate => {
    let tr = [];
    for (let i = 0; i < 5; i++) {
      tr.push(<tr key={i}>{tds(i, currentDate)}</tr>);
    }
    return tr;
  }; 
  
 return (
    <div className="calendarBody">
        <table>
          <tbody>{trs(props.currentDate)}</tbody>
        </table>
      
      {/* <Button text='Add an Event'/>  */}
    </div>
  );
};
//}

CalendarBody.propTypes = {
  /** Description of prop "text". */

  text: PropTypes.string
};

CalendarBody.defaultProps = {
  text: ""
};

export default CalendarBody;
