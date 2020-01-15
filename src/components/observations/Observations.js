import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import Observation from './Observation';
import ObservationsMap from '../map/ObservationsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `https://data.kakadatabase.nz/observations/`;

class Observations extends Component {
  render() {
    const { observationsFetch, ...others } = this.props;

    if (observationsFetch.pending) {
      return <Loader />;
    } else if (observationsFetch.rejected) {
      return <Error message="Error fetching observations" />;
    } else if (observationsFetch.fulfilled) {
      const observations = observationsFetch.value.results;

      // Intercept type 'map', as this needs rendering as a group on a single map
      if (this.props.type === 'map')
        return <ObservationsMap observations={observations} {...others} />;
      else
        return observations.map(observation => (
          <Observation observation={observation} key={observation.id} {...others} />
        ));
    } else return null;
  }
}

Observations.propTypes = {
  type: PropTypes.string.isRequired,
  queryString: PropTypes.string,
};

Observations.defaultProps = {
  type: 'card',
};

export default connect(props => ({
  observationsFetch: `${API_URL}${props.queryString ? props.queryString : ''}`,
}))(Observations);
