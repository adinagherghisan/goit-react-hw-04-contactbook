import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
