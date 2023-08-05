import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={e => dispatch(updateFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
