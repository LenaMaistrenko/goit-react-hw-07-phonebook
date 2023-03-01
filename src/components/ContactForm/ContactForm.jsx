import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);

        break;
      default:
        alert('No values');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    const isExist = contacts.some(item => {
      return item.name === name && item.number === number;
    });
    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      <label className={css.formlabel}>
        Name :
        <input
          className={css.forminput}
          onChange={handleChange}
          type="text"
          name="name"
          value={name || ''}
          required
        />
      </label>
      <label className={css.formlabel}>
        Number :
        <input
          className={css.forminput}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number || ''}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addbtn}>
        Add contact
      </button>
    </form>
  );
}
