import React from 'react';

export default function RadioButton({feelIdx, item, onChange, feeling}) {
  return (
    <label>
      <input
        name="feeling"
        id={feelIdx}
        type="radio"
        value={item}
        defaultChecked={feeling === item ? true : false}
        onChange={onChange}
      />
      {item}
    </label>
  )
}