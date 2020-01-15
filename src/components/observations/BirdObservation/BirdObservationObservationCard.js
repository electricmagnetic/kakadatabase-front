import React from 'react';
import PropTypes from 'prop-types';

import Observation from '../Observation';

/**
  Presents a card about a given Observation as part of an BirdObservation
  (given a specified Bird, show the Observation).
 */
const BirdObservationObservationCard = ({ birdObservation, ...others }) => {
  const { className } = others;
  const classNames = ['BirdObservationObservationCard'];
  if (className) classNames.push(className);

  return (
    <div className={classNames.join(' ')}>
      <Observation observation={birdObservation.observation} type="card" />
    </div>
  );
};

BirdObservationObservationCard.propTypes = {
  birdObservation: PropTypes.object.isRequired,
};

export default BirdObservationObservationCard;
