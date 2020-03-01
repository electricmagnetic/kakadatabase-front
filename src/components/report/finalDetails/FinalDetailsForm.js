import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-refetch';
import { Form, withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Error from '../../helpers/Error';

import Messages from '../helpers/Messages';
//import BirdsFieldset from './fieldsets/BirdsFieldset';
//import ContributorFieldset from './fieldsets/ContributorFieldset';
//import FurtherInformationFieldset from './fieldsets/FurtherInformationFieldset';
import SubmitFieldset from './fieldsets/SubmitFieldset';

import { initialFullValues, initialBirdObservationValues } from '../schema/initialValues';
import { fullValidationSchema, initialValidationSchema } from '../schema/validationSchemas';

const API_URL = `https://data.kakadatabase.nz/report/`;

/**
  xxxxx
 */
class FormComponent extends Component {
  componentDidUpdate(prevProps) {
    // Handle react-refetch response (either successful POST or error handling for fields)
    if (this.props.postSubmissionResponse) {
      const { postSubmissionResponse } = this.props;
      const isSettled =
        postSubmissionResponse.settled &&
        prevProps.postSubmissionResponse.settled !== postSubmissionResponse.settled;

      // Conclude isSubmitting if either rejected or fulfilled
      if (
        (postSubmissionResponse.rejected || postSubmissionResponse.fulfilled) &&
        this.props.isSubmitting
      )
        this.props.setSubmitting(false);

      // Set formik status if API errors encountered, otherwise redirect to success page
      if (postSubmissionResponse.rejected && isSettled)
        this.props.setStatus(postSubmissionResponse.reason.cause);
      else if (postSubmissionResponse.fulfilled && isSettled)
        this.props.history.push(`/submit/success/${postSubmissionResponse.value.id}`);
    }
  }

  render() {
    // Validate parameters passed via queryString
    if (!initialValidationSchema.isValidSync(this.props.queryString))
      return <Error message="Invalid or missing URL parameters" />;

    const fieldOptions = this.props.fieldOptions;
    return (
      <div className="FinalDetailsForm">
        <Helmet title="2. Final Observation Details" />
        <section className="mb-5">
          <Form>
            <div className="container">
              <Messages {...this.props} />
              {/*<ContributorFieldset {...this.props} fieldOptions={fieldOptions} />*/}
              {/*<DetailsFieldset {...this.props} fieldOptions={fieldOptions} />*/}
              {/*<BirdsFieldset {...this.props} fieldOptions={fieldOptions} />*/}
              {/*<LocationFieldset {...this.props} fieldOptions={fieldOptions} />*/}
              <SubmitFieldset {...this.props} />
            </div>
          </Form>
        </section>
      </div>
    );
  }
}

/**
  Computes initial values for the form, based on gridTiles provided via the queryString.
 */
const computeInitialValues = props => {
  const { queryString } = props;

  const birds = [1, 2, 3, 4].map(bird => Object.assign({}, initialBirdObservationValues));

  return Object.assign({}, initialFullValues, { birds: birds }, queryString);
};

/**
  Primary submission form, using formik, yup and react-refetch
*/
const FinalDetailsForm = withFormik({
  mapPropsToValues: props => computeInitialValues(props),
  validationSchema: fullValidationSchema,
  handleSubmit: (values, actions) => {
    actions.props.postSubmission(Object.assign({}, values));
  },
})(FormComponent);

FinalDetailsForm.propTypes = {
  fieldOptions: PropTypes.object.isRequired,
  queryString: PropTypes.shape({
    //gridTiles: PropTypes.array.isRequired,
  }).isRequired,
};

export default withRouter(
  connect(props => ({
    postSubmission: values => ({
      postSubmissionResponse: {
        url: API_URL,
        method: 'POST',
        body: JSON.stringify(values),
      },
    }),
  }))(FinalDetailsForm)
);
