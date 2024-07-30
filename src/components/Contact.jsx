import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      <div>{contact.name}</div>
      <div>{contact.number}</div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
