// == Import
import PropTypes from 'prop-types';
import './toggleElement.scss';

// == Component
function ToggleElement({ checkboxValue, onCheckboxChange }) {
  return (
    <label className="switch" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        checked={checkboxValue}
        onChange={onCheckboxChange}
      />
      <div className="slider round" />
    </label>
  );
}

ToggleElement.propTypes = {
  checkboxValue: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default ToggleElement;
