import React from 'react';
import './index.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container footer">
        <div className="left-pad-links">
          <a href="https://github.com/dectalk/list/blob/master/LICENCE">
            MIT Licence
          </a>
        </div>
        <p className="footer-copyright">DECtalk is a product of Fonix Speech, Inc. and is not associated with this website.</p>
      </footer>
    );
  }
}

export default Footer;
