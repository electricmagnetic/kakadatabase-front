import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import './Header.css';

/**
  Main header. Different CSS/functionality behaviour can be toggled by prop `onHome`.
  */
const Header = ({ onHome }) => {
  const headerClassNames = ['header', onHome ? 'on-home' : 'not-home'];

  const navClassNames = ['navbar', 'navbar-expand-lg', 'navbar-dark', onHome ? '' : 'bg-secondary'];

  return (
    <header className={headerClassNames.join(' ')}>
      <nav className={navClassNames.join(' ')}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Kākā Database" className="pr-3" />
            Kākā Database
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  <i className="fa-fw fas fa-home mr-2" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/learn" className="nav-link">
                  <i className="fa-fw fas fa-feather-alt mr-2" />
                  About
                  <span className="d-lg-none d-xl-inline"> Kākā</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/birds" className="nav-link">
                  <i className="fa-fw fas fa-search mr-2" />
                  <span className="d-lg-none d-xl-inline">Search </span>Birds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/observations" className="nav-link">
                  <i className="fa-fw fas fa-list-alt mr-2" />
                  <span className="d-lg-none d-xl-inline">View </span>
                  Observations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/report" className="nav-link">
                  <i className="fa-fw fas fa-eye mr-2" />
                  Report
                  <span className="d-lg-none d-xl-inline"> Observation</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  onHome: false,
};

/**
  Sets onHome property to true.
  */
const HomePageHeader = ({ onHome }) => {
  return <Header onHome />;
};

export { Header, HomePageHeader };
