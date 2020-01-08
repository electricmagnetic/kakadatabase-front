import React from "react";
import PropTypes from "prop-types";

/**
  Presents a nicely formatted page for a given bird.
 */
const BirdPage = ({ bird }) => {
  return (
    <div className="BirdPage">
      <dl>
        <dt>Name</dt>
        <dd>{bird.name}</dd>
        <dt>Primary Band</dt>
        <dd>{bird.primary_band}</dd>
        <dt>Band Combo</dt>
        <dd>{bird.band_combo}</dd>
      </dl>
    </div>
  );
};

BirdPage.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdPage;
