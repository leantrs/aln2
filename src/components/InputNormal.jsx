import React from "react";
import InputMask from "react-input-mask";
import "../css/Button.css";

const InputNormal = (props) => (
  <InputMask
    className="inputc"
    mask=""
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  ></InputMask>
);

export default InputNormal;
