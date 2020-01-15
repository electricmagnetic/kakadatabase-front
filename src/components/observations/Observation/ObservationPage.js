import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Banner from "../../presentation/Banner";
import generateSummary from "./helpers/generateSummary";

import "./ObservationPage.css";

/**
  Presents a nicely formatted page for a given observation.
 */
const ObservationPage = ({ observation }) => {
  const { profile } = observation;

  return (
    <div className="ObservationPage">
      <Helmet title={`#${observation.id} (Observation)`} />
      <section className="mb-5">
        <Banner size="small">
          <h1>{`Observation #${observation.id}`}</h1>
        </Banner>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <dl>
              <dt>When</dt>
              <dd>
                {observation.date_sighted} {observation.time_sighted}
              </dd>
              <dt>Where</dt>
              <dd>
                {observation.geocode}, {observation.region}
              </dd>
              <dt>Who</dt>
              <dd>{observation.contributor}</dd>
              <dt>What</dt>
              <dd>{generateSummary(observation)}</dd>
              <dt>Status</dt>
              <dd>{observation.status}</dd>
            </dl>
            {observation.comments && (
              <section>
                <h2>Comments</h2>
                <p className="comments">{observation.comments}</p>
              </section>
            )}
            {observation.location_details && (
              <section>
                <h2>Location Details</h2>
                <p className="location">{observation.location_details}</p>
              </section>
            )}
            {observation.behaviour && (
              <section>
                <h2>Behaviour</h2>
                <p className="behaviour">{observation.behaviour}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ObservationPage.propTypes = {
  observation: PropTypes.object.isRequired
};

export default ObservationPage;
