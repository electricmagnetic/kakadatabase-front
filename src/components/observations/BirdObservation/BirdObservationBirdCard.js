import React from "react";
import PropTypes from "prop-types";

import Bird from "../../birds/Bird";

const UnknownBirdCard = ({ birdObservation }) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{birdObservation.banded}</li>
      <li className="list-group-item">
        {birdObservation.band_combo ? (
          <>birdObservation.band_combo</>
        ) : (
          <>
            {birdObservation.life_stage_guess} {birdObservation.sex_guess}
          </>
        )}
      </li>
    </ul>
  </div>
);

/**
  Presents a card about a given bird as part of an BirdObservation
  (given a specified Observation, show either the Bird (if known) or given information about a bird)
 */
const BirdObservationBirdCard = ({ birdObservation, ...others }) => {
  const { className } = others;
  const classNames = ["BirdObservationBirdCard"];
  if (className) classNames.push(className);

  return (
    <div className={classNames.join(" ")}>
      {birdObservation.bird ? (
        <Bird bird={birdObservation.bird} type="card" />
      ) : (
        <UnknownBirdCard birdObservation={birdObservation} />
      )}
    </div>
  );
};

BirdObservationBirdCard.propTypes = {
  birdObservation: PropTypes.object.isRequired
};

export default BirdObservationBirdCard;
