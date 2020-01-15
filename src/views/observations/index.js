import React from "react";
import Helmet from "react-helmet";

import Observations from "../../components/observations/Observations";
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
          <div className="row">
            <Observations
              type="card"
              className="col-6 col-sm-4 col-lg-3 mb-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObservationsPage;
