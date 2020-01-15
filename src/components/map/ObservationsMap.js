import React, { Component } from "react";
import {
  FeatureGroup,
  ScaleControl,
  Circle,
  CircleMarker,
  Popup
} from "react-leaflet";
import { GeoJSON as LeafletGeoJSON } from "leaflet";
import PropTypes from "prop-types";

import BaseMap from "./BaseMap";
import { DEFAULT_BOUNDS } from "./defaults";
import Observation from "../observations/Observation";

import "./ObservationsMap.css";

/**
  Presents a nicely formatted map of given observations:
  - If `single` true, disables interactivity, popups and uses real precision for circle.
  - If `single` false, provides an interactive map with popups and a consistent circle size.
  */
class ObservationsMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridBounds: DEFAULT_BOUNDS
    };

    this.updateGridBounds = this.updateGridBounds.bind(this);
  }

  /**
    Update the gridBounds in state
  */
  updateGridBounds(event) {
    this.setState({ gridBounds: event.target.getBounds() });
  }

  /**
    Generate CircleMarker and associated Tooltip for a given observation.
    */
  createCircleMarker = observation => (
    <CircleMarker
      center={LeafletGeoJSON.coordsToLatLng(
        observation.point_location.coordinates
      )}
      color="orange"
      key={observation.id}
      radius={10}
    >
      <Popup className="ObservationPopup" closeButton={false}>
        <Observation observation={observation} type="card" />
      </Popup>
    </CircleMarker>
  );

  /**
    Generate single Circle without Tooltip, better used for single observations
    */
  createCircle = observation => (
    <Circle
      center={LeafletGeoJSON.coordsToLatLng(
        observation.point_location.coordinates
      )}
      color="red"
      key={observation.id}
      radius={observation.precision}
    />
  );

  render() {
    const { observations, single } = this.props;

    const disableInteractivityProperties = {
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      touchZoom: false,
      scrollWheelZoom: false,
      boxZoom: false
    };
    const boundsOptions = {
      maxZoom: 13
    };

    return (
      <div className="ObservationsMap">
        <BaseMap
          boundsOptions={boundsOptions}
          bounds={this.state.gridBounds}
          {...(single && disableInteractivityProperties)}
        >
          <FeatureGroup onAdd={event => this.updateGridBounds(event)}>
            {single
              ? observations.map(observation => this.createCircle(observation))
              : observations.map(observation =>
                  this.createCircleMarker(observation)
                )}
          </FeatureGroup>
          <ScaleControl />
        </BaseMap>
      </div>
    );
  }
}

ObservationsMap.propTypes = {
  observations: PropTypes.array.isRequired,
  single: PropTypes.bool.isRequired
};

ObservationsMap.defaultProps = {
  single: false
};

export default ObservationsMap;
