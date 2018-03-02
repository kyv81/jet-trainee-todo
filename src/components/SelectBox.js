import React from 'react';

export default function SelectBox(props) {
  const { options, value, onChange } = props;
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(item => (
        <option key={`${item.value}${item.label}`} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
