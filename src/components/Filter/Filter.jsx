import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
export function Filter({ value, onChange }) {
  return (
    <label className={css.filterlabel}>
      FIND CONTACTS BY NAME
      <input
        className={css.filterinput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
