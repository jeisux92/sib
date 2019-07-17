import React from "react";
import classes from "./Input.module.scss";

const Input = props => {
  let input;
  switch (props.inputType) {
    case "text":
      input = (
        <input
          className={classes.Input}
          {...props.config}
          onChange={props.changed.bind(this, props.inputKey)}
          value={props.value}
        />
      );
      break;
    case "select":
      const options = props.config.options.map(op => (
        <option value={op.value}>{op.text}</option>
      ));
      input = (
        <select
          className={classes.Input}
          onChange={props.changed.bind(this, props.inputKey)}
          {...props.config}
          value={props.value}
        >
          {options}
        </select>
      );
      break;
    default:
      input = (
        <input
          type="text"
          className={classes.Input}
          onChange={props.changed(this, props.inputKey)}
          {...props.config}
          value={props.value}
        />
      );
      break;
  }
  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {input}
    </div>
  );
};
export default Input;
