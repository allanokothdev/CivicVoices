import React from "react";
import './Navbar.styles.css';
import { Button } from './Button';
import { Logo } from './Logo';

function Navbar() {
  return (
    <nav>
      <Logo />

      <a href="https://play.google.com/store/apps/details?id=com.civicke.android" target="_blank" rel="noreferrer noopener">
      <Button className="btn-primary">Download</Button>
      </a>
    </nav>
  );
}

export default Navbar;
