import React from "react";
import Helmet from "react-helmet";

import Banner from "../../components/presentation/Banner";

const ObservationsPage = () => {
  return (
    <div className="ObservationsPage">
      <Helmet title="View Observations" />
      <section className="mb-5">
        <Banner size="small">
          <h1>View Observations</h1>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <p>Observations coming soon</p>
        </div>
      </section>
    </div>
  );
};

export default ObservationsPage;
