import React, { Component } from 'react';
import moment from 'moment';

/**
  FOO
 */
class DateSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    const fields = {
      date: moment(this.props.value).format('DD'),
      month: moment(this.props.value).format('MM'),
      year: moment(this.props.value).format('YYYY'),
    };
    const updatedFields = Object.assign({}, fields, { [event.target.name]: event.target.value });

    console.log('date_sighted', updatedFields);
    this.props.form.setFieldValue(
      'date_sighted',
      `${updatedFields.year}-${updatedFields.month}-${updatedFields.date}`
    );
  }

  render() {
    const dayChoices = [];
    Array.from(new Array(31), (object, index) => {
      const day = index + 1;
      dayChoices.push({
        value: moment(day, 'DD').format('DD'),
        display_name: moment(day, 'DD').format('DD'),
      });
    });

    const monthChoices = [];

    Array.from(new Array(12), (object, index) => {
      const month = index + 1;
      monthChoices.push({
        value: moment(month, 'MM').format('MM'),
        display_name: moment(month, 'MM').format('MM'),
      });
    });

    const { form, ...inputAttributes } = this.props;
    const [date, month, year] = [
      moment(this.props.value).format('DD'),
      moment(this.props.value).format('MM'),
      moment(this.props.value).format('YYYY'),
    ];

    return (
      <>
        <select name="date" value={date} onChange={this.handleChange}>
          {dayChoices.map(option => (
            <option value={option.value} key={option.value}>
              {option.display_name}
            </option>
          ))}
        </select>

        <select name="month" value={month} onChange={this.handleChange}>
          {monthChoices.map(option => (
            <option value={option.value} key={option.value}>
              {option.display_name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="year"
          value={year}
          onChange={this.handleChange}
          onBlur={event => form.setFieldTouched(inputAttributes.name, true)}
        />
        {/**/}
        <input type="text" {...inputAttributes} readOnly />
      </>
    );
  }
}

/**
  Constructs a simple select field with times at 15 mins intervals.
 */
const TimeSelector = inputAttributes => {
  var hourChoices = [];
  const interval = 15;

  Array.from(new Array(24), (object, hour) => {
    Array.from(new Array(4), (object, minuteIndex) => {
      const minute = minuteIndex * interval;
      const value = `${hour}:${minute}`;

      hourChoices.push({
        value: moment(value, 'H:mm').format('H:mm'),
        display_name: moment(value, 'H:mm').format('h:mm A'),
      });
    });
  });

  return (
    <select {...inputAttributes}>
      {hourChoices.map(option => (
        <option value={option.value} key={option.value}>
          {option.display_name}
        </option>
      ))}
    </select>
  );
};

export default TimeSelector;
