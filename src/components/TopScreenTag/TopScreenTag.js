// == Import
import PropTypes from 'prop-types';
import './topScreenTag.scss';

// == Component
function TopScreenTag({ text, className }) {
  return (
    <div
      className={`top-screen-tag ${className}`}
    >
      {text}
    </div>
  );
}

TopScreenTag.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TopScreenTag.defaultProps = {
  className: '',
};

export default TopScreenTag;
