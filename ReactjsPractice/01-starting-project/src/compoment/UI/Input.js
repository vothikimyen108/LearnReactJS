import classe from "./Input.module.css";

import React from "react";
//customer lại input
const Input = (props) => {
  return (
    <div className={classe.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}></input>
      {/* id={props.input.id} */}
    </div>
  );
};
export default Input;
