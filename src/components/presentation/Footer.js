import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

/**
  Main footer. Different CSS/functionality behaviour can be toggled by prop `onSubmitPage`.
  */
const Footer = () => {
  return (
    <footer className="d-print-none">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-md-8">
            <nav>
              <ul className="footer-links my-4">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 text-white text-right">
            <p>
              <small>
                <em>A project of Orokonui Ecosanctuary</em>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
