import React from 'react';
// import Links from '../Links';

const NavbarLinks = ({innerRef}) => (
  <div ref={innerRef} className="sidenav">
    <a href="https://old.reddit.com/r/DecTalk/">
      Reddit
    </a>
    <a href="https://github.com/dectalk">
      GitHub
    </a>
    <a href="http://theflameofhope.co/DECTALK.html">
      The Flame of Hope
    </a>
  </div>
);

export default NavbarLinks;
