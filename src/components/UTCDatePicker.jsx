import moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';


const convertUTCToLocalDate = (date) => {
  if (!date) {
    return date
  }
  return moment(moment(date).format('YYYY-MM-DD HH:mm:ss')).local().toDate()
}

const convertLocalToUTCDate = (date) => {
  if (!date) {
    return date
  }
  return moment(moment(date).format('YYYY-MM-DD HH:mm:ss')).utc().toDate()
}

const UTCDatePicker = ({ startDate, endDate, selected, onChange, ...props }) => {
  return (
    <DatePicker
      startDate={convertUTCToLocalDate(startDate)}
      endDate={convertUTCToLocalDate(endDate)}
      selected={convertUTCToLocalDate(selected)}
      onChange={date => onChange(convertLocalToUTCDate(date))}
      {...props}
    />
  )
}

export default UTCDatePicker