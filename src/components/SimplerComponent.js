// Code SimplerComponent Here
import React from "react";

const SimplerComponent = (props) => (
  <div onClick={props.handleClick}>I am just happy{console.log(props)}</div>
);
export default SimplerComponent;
