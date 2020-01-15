import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import generateSummary from "./helpers/generateSummary";

/**
  Presents a nicely formatted card for a given observation.
 */
const ObservationCard = ({ observation, ...others }) => {
  const { className } = others;
  const classNames = ["ObservationCard"];
  if (className) classNames.push(className);

  return (
    <div className={classNames.join(" ")}>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h2 className="card-title h5 m-0">
              <Link
                to={`/observations/${observation.id}`}
              >{`#${observation.id}`}</Link>
            </h2>
          </li>
          <li className="list-group-item">
            {observation.date_sighted} {observation.time_sighted}
          </li>
          <li className="list-group-item">
            {observation.geocode}, {observation.region}
          </li>
          <li className="list-group-item">{generateSummary(observation)}</li>
          <li className="list-group-item">{observation.contributor}</li>
        </ul>
      </div>
    </div>
  );
};

ObservationCard.propTypes = {
  observation: PropTypes.object.isRequired
};

export default ObservationCard;
