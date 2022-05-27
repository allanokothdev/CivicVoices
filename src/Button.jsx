import React from "react";
import './Button.styles.css';

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
