import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from '../../redux/contactsSelectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
