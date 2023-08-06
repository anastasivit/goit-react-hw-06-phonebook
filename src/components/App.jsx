import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      dispatch(addContact(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.heading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
