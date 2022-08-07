// == Import
import PropTypes from 'prop-types';
import './inputDirection.scss';

// == Component
function InputDirection({ inputValue, onInputChange, onInputSubmit }) {
  return (
    <form
      className="input"
      onSubmit={onInputSubmit}
    >
      <label htmlFor="direction">
        <input
          type="number"
          id="direction"
          name="direction"
          min="0"
          max="360"
          required
          value={inputValue}
          onChange={onInputChange}
        />
      </label>
    </form>
  );
}

InputDirection.propTypes = {
  inputValue: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputSubmit: PropTypes.func.isRequired,
};

export default InputDirection;
