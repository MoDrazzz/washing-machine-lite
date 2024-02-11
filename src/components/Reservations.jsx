import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray, Form } from 'redux-form';
import { Button, Container, Row, Col } from 'reactstrap';
import _map from 'lodash/map';
import ReactJson from 'react-json-view';

import { WEEK_DAYS } from '../common/constants';
import {
  clearReservations,
  saveReservations,
} from '../actions/machine';
import SingleDayReservations from './SingleDayReservations';
import './Reservations.scss';
import moment from 'moment';

const checkConflict = (entries) => {
  const sortedEntries = [...entries].sort((entryA, entryB) =>
    new Date(entryA.start) - new Date(entryB.start)
  );

  for (let i = 0; i < sortedEntries.length - 1; i++) {
    const currentEndTime = sortedEntries[i].end;
    const nextStartTime = sortedEntries[i + 1].start;

    if (new Date(currentEndTime) > new Date(nextStartTime)) {
      return true;
    }
  }

  return false;
};

const validate = fields => {
  const errors = {}

  for (const fieldName in fields) {
    const fieldErrors = fields[fieldName].map(entry => {
      const entryErrors = {}

      if(!moment(entry.end).isAfter(entry.start)) {
        entryErrors.end = 'End time should be after start time'
      }
      if(!entry.start) {
        entryErrors.start = 'Can not be empty'  
      }
      if(!entry.end) {
        entryErrors.end = 'Can not be empty'
      }

      if(Object.keys(entryErrors).length) {
        return entryErrors
      } else {
        return null
      }
    })

    // Check if there is any error in fieldErrors array (don't count null as an error)
    if(fieldErrors.some(err => err)) {
      errors[fieldName] = fieldErrors
      continue
    }

    const isConflict = checkConflict(fields[fieldName])

    if(isConflict) {
      errors[fieldName] = {
        _error: 'Conflict between two reservations!'
      }
    }
  }

  return errors;
};

const Reservations = ({
  clearReservations,
  handleSubmit,
  machine,
  saveReservations,
}) => (
  <Container className="reservations">
    <Form onSubmit={handleSubmit(saveReservations)}>
      <Row>
        <Col xs={8}>
          <h2>Reservations</h2>
          {_map(WEEK_DAYS, day => (
            <FieldArray
              key={`single-${day}`}
              component={SingleDayReservations}
              name={day}
            />
          ))}
          <Button color="primary" type="submit">
            Save data
          </Button>
        </Col>
        <Col xs={4}>
          <ReactJson src={machine} name="machineStoreState" />
          <Button
            onClick={clearReservations}
            color="warning"
            className="reservations__clear-btn"
          >
            Reset Data
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

const mapStateToProps = state => ({
  machine: state.machine,
  initialValues: state.machine,
});

const mapDispatchToProps = {
  clearReservations,
  saveReservations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'reservations',
    validate,
    enableReinitialize: true,
  })(Reservations),
);
