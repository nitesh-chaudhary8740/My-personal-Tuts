import React from 'react'

export default function Alert(props) {
    const {missedFields} =props;
  return (
    <div className='missedFieldAlert'>
      <b className='missedFieldsdAlert'>{props.missedFields.map(element=>`${element}, `)}</b>
      is missed
    </div>
  )
}
