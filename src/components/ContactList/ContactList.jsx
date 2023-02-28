import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
export function ContactList({ contacts, onBtnDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(item => (
        <li className={css.contactItem} key={item.id}>
          {item.name}
          <span>{item.number}</span>
          <button id={item.id} onClick={onBtnDelete} className={css.btndelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  onBtnDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
