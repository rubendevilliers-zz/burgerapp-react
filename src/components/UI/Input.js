import React from "react";
import inputStyles from "./Input.module.css";
const Input = ({label, input}) => {
  return <div className={inputStyles.input}>
  <label htmlFor={input.id}>{label}</label>
  <input {...input} />
  </div>;
};

export default Input;
