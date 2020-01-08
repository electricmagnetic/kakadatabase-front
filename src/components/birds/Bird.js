import React, { Component } from "react";
import { connect } from "react-refetch";
import PropTypes from "prop-types";

import BirdPage from "./Bird/BirdPage";
import BirdCard from "./Bird/BirdCard";

import Loader from "../helpers/Loader";
import Error from "../helpers/Error";

const API_URL = `https://data.kakadatabase.nz/birds/`;

class Bird extends Component {
  constructor(props) {
    super(props);
    this.renderBird = this.renderBird.bind(this);
  }

  renderBird(bird) {
    const { type, ...others } = this.props;
    switch (type) {
      case "card":
        return <BirdCard bird={bird} {...others} />;
      default:
        return <BirdPage bird={bird} {...others} />;
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.lazyFetchBird(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.props.lazyFetchBird(this.props.id);
  }

  render() {
    if (this.props.birdFetch) {
      const { birdFetch } = this.props;
      if (birdFetch.pending) {
        return <Loader />;
      } else if (birdFetch.rejected) {
        return <Error message="Bird invalid" />;
      } else if (birdFetch.fulfilled) {
        return this.renderBird(birdFetch.value);
      }
    } else if (this.props.bird) {
      return this.renderBird(this.props.bird);
    } else return null;
  }
}

Bird.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  bird: PropTypes.object
};

Bird.defaultProps = {
  type: "page"
};

export default connect(props => ({
  lazyFetchBird: id => ({
    birdFetch: `${API_URL}${props.id}/`
  })
}))(Bird);
