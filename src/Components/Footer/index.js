import React, { Component } from 'react';
import './style.scss';
import '../../Styles/main.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <div>
            <p className="footer__contacts"><span className="footer__contacts--bold">Mobile: </span>+38066-66-66-666</p>
            <p className="footer__contacts"><span className="footer__contacts--bold">Email: </span>mail&#64;gmail.com</p>
            <p className="footer__contacts"><span className="footer__contacts--bold">Skype: </span>mySkypeAcc</p>
          </div>
          <p className="footer__logo">&lt;/&gt;</p>
        </div>
      </footer>
    );
  }
}

export default Footer;