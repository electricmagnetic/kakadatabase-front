import React from "react";
import Helmet from "react-helmet";

import Birds from "../../components/birds/Birds";
import Banner from "../../components/presentation/Banner";

const BirdsPage = props => {
  return (
    <div className="BirdsPage">
      <Helmet title="Birds" />
      <section className="mb-5">
        <Banner size="small">
          <h1>Birds</h1>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <Birds type="card" />
        </div>
      </section>
    </div>
  );
};

export default BirdsPage;
