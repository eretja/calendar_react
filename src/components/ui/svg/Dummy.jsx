import * as React from "react";

const Dummy = props => (
  <svg width={10} height={10} {...props}>
    <path fill="#00f" d="M0 0h110v110H0z" />
  </svg>
);

export default Dummy;
