import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
  Presents a nicely formatted card for a given bird.
 */
const BirdCard = ({ bird }) => {
  return (
    <div className="BirdCard card mb-1">
      <div className="card-body">
        <Link to={`/birds/${bird.id}`}>{bird.name}</Link>
      </div>
    </div>
  );
};

BirdCard.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdCard;
