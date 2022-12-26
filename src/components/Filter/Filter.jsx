import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css'


export  function Filter({ filter, changeFilter }) {
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.prototype = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}