import React from 'react';
import { Field } from 'formik';

import RenderField from '../helpers/RenderField';

/**
  Fieldset for optional fields.
 */
const FurtherInformationFieldset = ({ fieldOptions }) => (
  <fieldset className="mb-3">
    <legend>Further Information</legend>
    <Field
      component={RenderField}
      fieldOptions={fieldOptions.comments}
      name="comments"
      type="textarea"
      placeholder="(optional)"
    />
    <Field
      component={RenderField}
      fieldOptions={fieldOptions.behaviour}
      name="behaviour"
      type="textarea"
      placeholder="Behaviour observed? (optional)"
    />
  </fieldset>
);

export default FurtherInformationFieldset;
