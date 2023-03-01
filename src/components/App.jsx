import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.apptitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.apptitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
