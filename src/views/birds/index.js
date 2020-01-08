import React from "react";
import Helmet from "react-helmet";

import Banner from "../../components/presentation/Banner";

const BirdPage = props => {
  return (
    <div className="BirdPage">
      <Helmet title="Birds" />
      <section className="mb-5">
        <Banner size="small">
          <h1>Birds</h1>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <p>Meet the Orokonui birds</p>
        </div>
      </section>
    </div>
  );
};

export default BirdPage;
