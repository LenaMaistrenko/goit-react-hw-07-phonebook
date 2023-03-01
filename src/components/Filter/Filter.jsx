import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { addFilter } from 'redux/filterSlice';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <label className={css.filterlabel}>
      FIND CONTACTS BY NAME
      <input
        className={css.filterinput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(addFilter(e.currentTarget.value))}
      />
    </label>
  );
}
