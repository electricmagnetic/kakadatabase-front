import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Banner from "../components/presentation/Banner";

import banner from "../assets/img/banner.jpg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Helmet title="Kākā Database" />
      <section className="mb-5">
        <Banner backgroundImage={banner} size="home">
          <h1 className="mb-4 banner-title">Kākā Database</h1>
          <div className="home-buttons">
            <Link to="/birds" className="btn btn-lg btn-light mr-2 mb-2">
              <i className="fa-fw fas fa-search mr-1"></i>Search Birds
            </Link>
          </div>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <p>The future home of the Orokonui Kākā Database</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
