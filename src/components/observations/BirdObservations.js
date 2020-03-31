import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import BirdObservation from './BirdObservation';
import ObservationsMap from './Observation/ObservationsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/bird_observations/`;

/**
  BirdObservations fetches a series of bird observations using a given (optional) queryString and renders it using BirdObservation.
  */
class BirdObservations extends Component {
  render() {
    const { birdObservationsFetch, ...others } = this.props;

    if (birdObservationsFetch.pending) {
      return <Loader />;
    } else if (birdObservationsFetch.rejected) {
      return <Error message="Error fetching bird observations" />;
    } else if (birdObservationsFetch.fulfilled) {
      const birdObservations = birdObservationsFetch.value.results;

      // Catch zero observations so map doesn't attempt to render
      if (birdObservations.length === 0) return null;

      // Intercept type 'map', as this needs rendering as a group on a single map
      if (this.props.type === 'map')
        return (
          <ObservationsMap
            observations={birdObservations.map(birdObservation => birdObservation.observation)}
            {...others}
          />
        );
      else
        return birdObservations.map(birdObservation => (
          <BirdObservation birdObservation={birdObservation} key={birdObservation.id} {...others} />
        ));
    } else return null;
  }
}

BirdObservations.propTypes = {
  queryString: PropTypes.string,
};

export default connect(props => ({
  birdObservationsFetch: `${API_URL}${props.queryString ? props.queryString : ''}`,
}))(BirdObservations);
