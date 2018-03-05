import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default function SelectBox({ options, value, onChange }) {
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

SelectBox.propTypes = propTypes;
