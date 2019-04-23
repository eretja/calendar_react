import React from "react";
import PropTypes from "prop-types";
import styles from "./calendarHeader.scss";

const CalendarHeader = props => {
  return (
    <div className={styles.calendarHeader}>
      {props.state.monthNames[props.state.month]} {props.state.year}
    </div>
  );
};

CalendarHeader.propTypes = {
  optionsState: PropTypes.string
};

CalendarHeader.defaultProps = {
  text: "defaultText"
};

export default CalendarHeader;
