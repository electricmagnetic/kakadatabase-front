import React, { Component } from 'react';
import { connect } from 'react-refetch';
import { Form, withFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

import Messages from './fieldsets/Messages';
// import BirdsFieldset from './fieldsets/BirdsFieldset';
// import ContributorFieldset from './fieldsets/ContributorFieldset';
// import LocationFieldset from './fieldsets/LocationFieldset';
import SubmitFieldset from './fieldsets/SubmitFieldset';

import { initialValues } from './schema/initialValues';
import { fullValidationSchema } from './schema/validationSchemas';

const API_URL = `https://data.kakadatabase.nz/report/`;

/**
  Master form layout for observation submission.

  Loads permissible choices using react-refetch from an OPTIONS call to the API.
  Validates data using yup, reports errors back to user. Also reports API errors back to user using 'status' field.

  On successful client-side validation, values are posted to server and user is redirected to success page.
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
        this.props.history.push(`/report/success/${postSubmissionResponse.value.id}`);
    }
  }

  render() {
    const { submissionOptions } = this.props;

    if (submissionOptions.pending)
      return (
        <div className="container mb-5">
          <Loader />
        </div>
      );
    else if (submissionOptions.rejected)
      return (
        <div className="container mb-5">
          <Error message="Error">
            {submissionOptions.reason.cause && `(${submissionOptions.reason.cause.detail})`}
          </Error>
        </div>
      );
    else if (submissionOptions.fulfilled) {
      const fieldOptions = submissionOptions.value.actions.POST;

      return (
        <div className="ReportForm">
          <section className="mb-5">
            <Form>
              <div className="container">
                <Messages {...this.props} />
                {/*<DetailsFieldset {...this.props} fieldOptions={fieldOptions} />
                <ContributorFieldset {...this.props} fieldOptions={fieldOptions} />
                <BirdsFieldset {...this.props} fieldOptions={fieldOptions} />
                <LocationFieldset {...this.props} fieldOptions={fieldOptions} />*/}
                <SubmitFieldset {...this.props} />
              </div>
            </Form>
          </section>
        </div>
      );
    } else return null;
  }
}

/**
  Computes initial values for the form.
 */
const computeInitialValues = props => {
  return Object.assign({}, initialValues);
};

/**
  Primary submission form, using formik, yup and react-refetch
*/
const ReportForm = withFormik({
  mapPropsToValues: props => computeInitialValues(props),
  validationSchema: fullValidationSchema,
  handleSubmit: (values, actions) => {
    actions.props.postSubmission(Object.assign({}, values));
  },
})(FormComponent);

export default withRouter(
  connect(props => ({
    submissionOptions: {
      url: API_URL,
      method: 'OPTIONS',
    },
    postSubmission: values => ({
      postSubmissionResponse: {
        url: API_URL,
        method: 'POST',
        body: JSON.stringify(values),
      },
    }),
  }))(ReportForm)
);
