import React from 'react';
import { Field } from 'formik';

import RenderField from '../../helpers/RenderField';

/**
  Fieldset for Contributor fields.
 */
const ContributorFieldset = ({ fieldOptions }) => (
  <fieldset className="mb-3">
    <legend>Contributor Details</legend>
    <div className="row">
      <div className="col-md-5">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.contributor.children.name}
          name="contributor.name"
          type="text"
          placeholder="Name"
          helpText="Your name will be publicly visible"
        />
      </div>
      <div className="col-md-7">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.contributor.children.email}
          name="contributor.email"
          type="text"
          placeholder="Email"
          helpText="Your email is only visible to the project team"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.contributor.children.activity}
          name="contributor.activity"
          type="choice"
          helpText="(optional)"
        />
      </div>
      <div className="col-md-6">
        <Field
          component={RenderField}
          fieldOptions={fieldOptions.contributor.children.heard}
          name="contributor.heard"
          type="choice"
          label="How did you hear about this?"
          helpText="(optional)"
        />
      </div>
    </div>
  </fieldset>
);

export default ContributorFieldset;
