import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import './Header.styles.css';
import bills from './bills.jpg';

function Header() {
  return (
    <header>
      <div className="intro">
        <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
          <h1>Amplifying Public Voice in the Law Making Process</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          duration={1}
          delay={500}
          animateOnce={true}
        >
          <p>
            With this app in hand, you'll have more money in your pocket.
            Because every time you send, spend, or receive money
            internationally, you'll pay the lowest possible price.
          </p>
        </ScrollAnimation>
        <div className="stores">
          <div className="store-2">
            
          </div>
        </div>
      </div>
      <div className="phones">
        <img src={bills} alt="bills" className="phone-2" />
      </div>
    </header>
  )
}


export default Header;