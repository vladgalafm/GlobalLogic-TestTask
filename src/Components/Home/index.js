import React, { Component } from 'react';
import './style.scss';
import '../../Styles/main.scss';

class Home extends Component {
  render() {
    return (
      <header className="home">
        <div className="home__top-bar">
          <p className="home__logo">&lt;/&gt;</p>
          <nav className="home__navigation">
            <input className="home__checkbox" type="checkbox" id="hamburger" />
            <span className="home__burger-line home__burger-line--top"></span>
            <span className="home__burger-line  home__burger-line--middle"></span>
            <span className="home__burger-line home__burger-line--bottom"></span>
            <ul className="home__nav-list">
              <li>
                <a className="home__link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="home__link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="home__link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="home__link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home__header-wrapper">
          <h1 className="home__header">
            NAME SURNAME
          </h1>
          <h2 className="home__sub-header">
            FRONT-END DEVELOPER
          </h2>
        </div>
      </header>
    );
  }
}

export default Home;