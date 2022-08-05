// == Import
import PropTypes from 'prop-types';

// == Component
function SpanColor({ color }) {
  const style = {
    color,
  };
  return (
    <span style={style}>
      {color}
    </span>
  );
}

SpanColor.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SpanColor;
