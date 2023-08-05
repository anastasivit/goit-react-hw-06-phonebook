import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicateName = contacts.some(contact => contact.name === name);

    if (isDuplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
