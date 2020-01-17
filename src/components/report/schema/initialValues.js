import moment from 'moment';

/**
  Specifies initial values for a Contributor.
  See also: contributorValidationSchema
  */
export const initialContributorValues = {
  name: '',
  email: '',
  activity: '',
  heard: '',
};

/**
  Specifies initial values for a BirdObservation.
  See also: birdObservationValidationSchema
  */
export const initialBirdObservationValues = {
  banded: '',
  band_combo: '',
  sex_guess: '',
  life_stage_guess: '',
};

/**
  Specifies values and shape for submission to API. Includes API challenge.
  See also: fullValidationSchema
  */
export const initialValues = {
  contributor: initialContributorValues,
  date_sighted: moment().format('YYYY-MM-DD'),
  time_sighted: moment().format('HH:mm'),
  birds: [],
  comments: '',
  observation_type: '',
  point_location: {
    type: 'Point',
    coordinates: [],
  },
  precision: null,
  number: null,
  location_details: '',
  behaviour: '',
  challenge: 'kaka',
};
