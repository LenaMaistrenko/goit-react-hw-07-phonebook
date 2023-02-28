import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    const contact = { name, number };
    props.onSubmit(contact);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
