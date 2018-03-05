import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function TextBox(props) {
  const { onChange } = props;
  const value = props.value || '';
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  );
}

TextBox.propTypes = propTypes;
