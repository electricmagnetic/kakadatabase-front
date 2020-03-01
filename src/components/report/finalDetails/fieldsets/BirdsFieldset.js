import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import RenderField from '../../helpers/RenderField';

import { initialBirdObservationValues } from '../../schema/initialValues';

class RenderBirdObservation extends Component {
  render() {
    const { surveyHour, index, fieldOptions, form } = this.props;
    const name = `birdObservations.${index}`;

    const gridTileField = (() => {
      const { values } = form;
      const gridTileName = `${name}.grid_tile`;

      if (hasSingleGridTile(values)) {
        return (
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.grid_tile}
            name={gridTileName}
            type="text"
            readOnly
            hideLabel
            tabIndex={-1}
          />
        );
      } else if (isNotSurveying(surveyHour)) {
        return (
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.grid_tile}
            name={gridTileName}
            type="text"
            disabled
            hideLabel
            tabIndex={-1}
          />
        );
      } else {
        return (
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.grid_tile}
            type="gridTileSelect"
            name={gridTileName}
            hideLabel
            selected={surveyHour.grid_tile}
            options={values.gridTiles}
            minLength={0}
            maxResults={15}
            paginate={false}
          />
        );
      }
    })();

    return (
      <tr key={index} className={isWinter(surveyHour.birdObservation) ? 'winter' : 'summer'}>
        <td>
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.birdObservation}
            name={`${name}.birdObservation`}
            type="number"
            readOnly
            hideLabel
            tabIndex={-1}
          />
          {!isWinter(surveyHour.birdObservation) && <small>summer only</small>}
        </td>
        <td>
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.activity}
            name={`${name}.activity`}
            type="choice"
            addBlank
            hideLabel
          />
        </td>
        <td>
          <Field
            component={RenderField}
            fieldOptions={fieldOptions.kea}
            name={`${name}.kea`}
            type="checkbox"
            hideLabel
            disabled={isNotSurveying(surveyHour)}
          />
        </td>
        <td>{gridTileField}</td>
      </tr>
    );
  }
}

class RenderBirdObservations extends Component {
  render() {
    const { values } = this.props.form;

    return (
      <div className="RenderBirdObservations">
        {hasSingleGridTile(values) && (
          <div className="alert alert-info">
            Only one grid tile has been selected, so this has been added to every birdObservation.
          </div>
        )}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Hour</th>
              <th>Activity</th>
              <th>Kea?</th>
              <th>Grid Tile</th>
            </tr>
          </thead>
          <tbody>
            {values.birdObservations &&
              values.birdObservations.length > 0 &&
              values.birdObservations.map((surveyHour, index) => (
                <RenderBirdObservation
                  surveyHour={surveyHour}
                  index={index}
                  {...this.props}
                  key={surveyHour.birdObservation}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const BirdsFieldset = ({ fieldOptions }) => {
  return (
    <fieldset className="mb-3">
      <legend>2. Hours</legend>
      <FieldArray
        initialValues={initialHourValues}
        name="birdObservations"
        render={arrayHelpers => (
          <RenderBirdObservations
            fieldOptions={fieldOptions.birdObservations.child.children}
            {...arrayHelpers}
          />
        )}
      />
    </fieldset>
  );
};

BirdsFieldset.propTypes = {
  fieldOptions: PropTypes.object.isRequired,
};

export default BirdsFieldset;
