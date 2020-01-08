import React from "react";
import Helmet from "react-helmet";

import Banner from "../../components/presentation/Banner";
import Bird from "../../components/birds/Bird";

const BirdDetailPage = ({ match }) => {
  const slug = match.params.slug;

  return (
    <div className="BirdDetailPage">
      <Helmet title={`#${slug} (Bird)`} />
      <section className="mb-5">
        <Banner size="small">
          <h1>Bird #{slug}</h1>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <Bird id={slug} type="page" />
        </div>
      </section>
    </div>
  );
};

export default BirdDetailPage;
