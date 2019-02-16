import React from 'react';

import '../../ModestaCSS/css/modesta.min.css';
import '../../ModestaCSS/css/twemoji.min.css';
import './index.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

class GlobalLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default GlobalLayout;
