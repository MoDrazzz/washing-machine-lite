import React from 'react';
import UTCDatePicker from './UTCDatePicker';

const TimePickerWrapper = ({
  input: { onChange, value },
  meta: { error },
}) => {
  console.log(error);
  return (
    <React.Fragment>
      <UTCDatePicker
        selected={value || null}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
      <span className="reservations__error">{error}</span>
    </React.Fragment>
  );
};
export default TimePickerWrapper;
