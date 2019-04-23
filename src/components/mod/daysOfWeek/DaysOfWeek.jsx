import React from "react";
import PropTypes from "prop-types";
import styles from "./daysOfWeek.scss";

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const DaysOfWeek = (props) => (
  <div className={styles.calendar__weekDay}>
    <div>M</div>
    <div>T</div>
    <div>W</div>
    <div>T</div>
    <div>F</div>
    <div>S</div>
    <div>S</div>
  </div>
);

DaysOfWeek.propTypes = {
  /** Description of prop "text". */

  optionsState: PropTypes.string
};

DaysOfWeek.defaultProps = {
  text: "defaultText"
};

export default DaysOfWeek;
