import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import getPicture from '../../birds/Bird/helpers/getPicture';
import birdLink from '../../birds/Bird/helpers/birdLink';

/**
  Presents a 'feature' (rounded image with details) containing information about a recently sighted
  Bird and the relevant observation.
  */
const BirdObservationFeature = ({ birdObservation, ...others }) => {
  const { className } = others;
  const classNames = ['BirdObservationFeature'];
  if (className) classNames.push(className);

  const { bird, observation } = birdObservation;

  return (
    <div className={classNames.join(' ')}>
      <div className="card border-0">
        <Link to={birdLink(bird)}>
          <img
            src={getPicture(bird, 'large')}
            alt={bird.label}
            className="card-img-top rounded-circle"
          />
        </Link>
        <div className="card-body px-0 py-2 text-center">
          <h3 className="card-title h5 m-0">
            <Link to={birdLink(bird)}>{bird.label}</Link>
          </h3>
          <p>{observation.date_sighted}</p>
        </div>
      </div>
    </div>
  );
};

BirdObservationFeature.propTypes = {
  birdObservation: PropTypes.object.isRequired,
};

export default BirdObservationFeature;
