import React from "react";
import logo from './logo.png';
import './Logo.styles.css';

export const Logo = ({ isFooterLogo }) => {
  return (
    <img src={isFooterLogo ? logo : logo} alt="civic" className="logo" />
  );
};
