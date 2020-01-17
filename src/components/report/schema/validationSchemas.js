import * as yup from 'yup';
import { maximumBirdObservations } from './observationParameters';

const requiredMessage = 'This field is required.';
const notNumber = 'This field must be a number.';
const emailInvalid = 'Invalid email address.';
const dateInvalid = 'Date format invalid. Must be YYYY-MM-DD.';
const maxDateInvalid = 'Date must be today or earlier.';
const maxBirdObservationMessage = 'You have reached the maximum of birds permitted.';

/**
  Specifies validation of contributor.
  */
export const contributorValidationSchema = yup
  .object({
    name: yup.string().required(requiredMessage),
    email: yup
      .string()
      .email(emailInvalid)
      .required(requiredMessage),
    activity: yup.string(),
    heard: yup.string(),
  })
  .required()
  .strict()
  .noUnknown();

/**
  Specifies validation of nested object xxxxx in URL parameters.
  */
export const birdObservationValidationSchema = yup
  .object()
  .shape({
    banded: yup.string().required(requiredMessage),
    band_combo: yup.string(),
    sex_guess: yup.string(),
    life_stage_guess: yup.string(),
  })
  .strict()
  .noUnknown();

/**
  Specifies full validation schema for form.
  Values are also verified by API, yup is used to provide immediate (async) feedback to users.
  */
export const fullValidationSchema = yup
  .object({
    contributor: contributorValidationSchema.required(requiredMessage),
    date_sighted: yup
      .date()
      .max(new Date(), maxDateInvalid)
      .required(requiredMessage)
      .typeError(dateInvalid),
    time_sighted: yup.string().required(requiredMessage),
    birds: yup
      .array()
      .of(birdObservationValidationSchema)
      .max(maximumBirdObservations, maxBirdObservationMessage),
    comments: yup.string(),
    observation_type: yup.string().required(),
    point_location: yup.object({
      type: yup
        .string()
        .matches(/(Point)/)
        .required(),
      coordinates: yup
        .array()
        .of(
          yup
            .number()
            .min(-180)
            .max(180)
            .typeError(notNumber)
        )
        .required(),
    }),
    precision: yup.number().typeError(notNumber),
    number: yup
      .number()
      .min(1)
      .typeError(notNumber),
    location_details: yup.string(),
    behaviour: yup.string(),
    challenge: yup
      .string()
      .matches(/(kaka)/)
      .required(),
  })
  .required()
  .strict()
  .noUnknown();
