import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = e => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <label className={css.filterlabel}>
      FIND CONTACTS BY NAME
      <input
        className={css.filterinput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}
