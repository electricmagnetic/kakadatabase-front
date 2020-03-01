import React from 'react';
import { Field } from 'formik';

import RenderField from '../../helpers/RenderField';

/**
  Fieldset for main details.
 */
const DetailsFieldset = ({ fieldOptions }) => (
  <fieldset className="mb-3">
    <legend className="sr-only">Observation Details</legend>
    <div className="row">
      <div className="col">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.date_sighted}
          name="date_sighted"
          type="date"
          label="On"
        />
      </div>
      <div className="col">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.time_sighted}
          name="time_sighted"
          type="time"
          label="At"
        />
      </div>
      <div className="col">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.observation_type}
          name="observation_type"
          type="choice"
          label="I"
          addBlank
        />
      </div>
      <div className="col">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.number}
          name="number"
          type="number"
          label="the following number of kākā"
          min={1}
        />
      </div>
    </div>
  </fieldset>
);

export default DetailsFieldset;
