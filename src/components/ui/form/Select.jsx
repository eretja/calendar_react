import React from "react";
import PropTypes from "prop-types";
import styles from "./select.scss";

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Select = ({ options }) => {
  const listItems = options.map(entry => (
    <option key={entry.text}>{entry.text}</option>
  ));
  return (
    <label>
      <select className={styles.select}>{listItems}</select>
    </label>
  );
};

Select.propTypes = {
  /** Description of prop "text". */

  options: PropTypes.array
};

Select.defaultProps = {
  options: [{ value: "0", text: "bitte wählen" }]
};

export default Select;
