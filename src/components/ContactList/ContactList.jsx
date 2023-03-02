import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';

export function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  console.log(filterContacts);

  return (
    <ul className={css.contactList}>
      {filterContacts?.map(item => (
        <li className={css.contactItem} key={item.id}>
          {item.name}
          <span>{item.number}</span>
          <button
            id={item.id}
            onClick={() => dispatch(deleteContact(item.id))}
            className={css.btndelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
