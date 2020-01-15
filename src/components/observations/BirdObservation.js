import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import BirdObservationBirdCard from './BirdObservation/BirdObservationBirdCard';
import BirdObservationObservationCard from './BirdObservation/BirdObservationObservationCard';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `https://data.kakadatabase.nz/birdObservations/`;

class BirdObservation extends Component {
  constructor(props) {
    super(props);
    this.renderBirdObservation = this.renderBirdObservation.bind(this);
  }

  renderBirdObservation(birdObservation) {
    const { type, ...others } = this.props;
    switch (type) {
      case 'observationCard':
        return <BirdObservationObservationCard birdObservation={birdObservation} {...others} />;
      default:
        return <BirdObservationBirdCard birdObservation={birdObservation} {...others} />;
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.lazyFetchBirdObservation(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.props.lazyFetchBirdObservation(this.props.id);
  }

  render() {
    if (this.props.birdObservationFetch) {
      const { birdObservationFetch } = this.props;
      if (birdObservationFetch.pending) {
        return <Loader />;
      } else if (birdObservationFetch.rejected) {
        return <Error message="BirdObservation invalid" />;
      } else if (birdObservationFetch.fulfilled) {
        return this.renderBirdObservation(birdObservationFetch.value);
      }
    } else if (this.props.birdObservation) {
      return this.renderBirdObservation(this.props.birdObservation);
    } else return null;
  }
}

BirdObservation.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  birdObservation: PropTypes.object,
};

BirdObservation.defaultProps = {
  type: 'birdCard',
};

export default connect(props => ({
  lazyFetchBirdObservation: id => ({
    birdObservationFetch: `${API_URL}${props.id}/`,
  }),
}))(BirdObservation);
