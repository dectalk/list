import React, { Component } from 'react';
import NavbarLinks from '../NavbarLinks';
import './index.scss';
import Links from '../Links';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.open = React.createRef();
    this.navside = React.createRef();
    this.darken = React.createRef();
    this.openNavbar = this.openNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  componentDidMount() {
    this.open.current.addEventListener('click', this.openNavbar);
    this.darken.current.addEventListener('click', this.closeNavbar);
  }

  componentWillUnmount() {
    this.open.current.removeEventListener('click', this.openNavbar);
    this.darken.current.removeEventListener('click', this.closeNavbar);
  }

  openNavbar() {
    if (this.navside.current && this.navside.current.style) {
      this.navside.current.style.transform = 'translateX(0px)';
      this.darken.current.style.opacity = '0.8';
      this.darken.current.style.pointerEvents = 'all';
    }
  }

  closeNavbar() {
    this.navside.current.style.transform = 'translateX(-250px)';
    this.darken.current.style.opacity = '0';
    this.darken.current.style.pointerEvents = 'none';
  }

  render() {
    return (
      <div>
        <div className="desktop ls-nav-desktop nav-container default">
          <h1 className="nav-title">
            <Links to="/">
              DECtalk
            </Links>
          </h1>

          <NavbarLinks />
        </div>
        <div className="mobile ls-nav-mobile nav-container">
          <span ref={this.open} id="menu-icon"></span>

          <div className="nav-content">
            <h4>DECtalk</h4>
          </div>

          <NavbarLinks innerRef={this.navside} />
        </div>
        <div ref={this.darken} className="ls-mobile ls-navbar-darken"></div>
      </div>
    );
  }
}

export default Navbar;