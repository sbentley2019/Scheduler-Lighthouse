import React from "react";

import "components/Button.scss";

export default function Button(props) {
  const buttonClass = `button ${props.confirm && "button--confirm"} ${
    props.danger && "button--danger"
  }`;
  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
