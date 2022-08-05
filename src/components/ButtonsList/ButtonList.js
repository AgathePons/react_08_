/* eslint-disable react/no-array-index-key */
// == Import
import PropTypes from 'prop-types';
import './buttonsList.scss';

// == Component
function ButtonsList({ buttons }) {
  return (
    <div className="buttons group">
      {
        buttons.map(({ name, className, ...rest }, index) => (
          <button
            type="button"
            key={index}
            className={`button ${className || ''}`}
            {...rest}
          >
            {name}
          </button>
        ))
      }
    </div>
  );
}

ButtonsList.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ButtonsList;
