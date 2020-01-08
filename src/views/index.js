import React from "react";
import Helmet from "react-helmet";

import logo from "../logo.svg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Helmet title="Kākā Database" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        The future home of the
        <br />
        Orokonui Kākā Database
      </p>
    </div>
  );
};

export default HomePage;
