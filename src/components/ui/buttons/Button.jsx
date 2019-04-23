import React from "react";
import PropTypes from "prop-types";
import styles from "./buttons.scss";
//import ButtonPrev from './PrevNextButtons/ButtonPrev';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Button = ({ text, onclick }) => (
  <button onClick={onclick} className={styles.button}>
    {text}
  </button>
);

Button.propTypes = {
  /** Description of prop "text". */
  text: PropTypes.string
};

Button.defaultProps = {
  text: "defaultText"
};

export default Button;
