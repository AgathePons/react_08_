// == Import
import PropTypes from 'prop-types';
import './gradientCode.scss';

// == Component
function GradientCode({ direction, firstColor, lastColor }) {
  const styleCode = `linear-gradient(${direction},${firstColor},${lastColor})`;
  return (
    <div className="gradient-code">
      <code>
        {styleCode}
      </code>
    </div>
  );
}

GradientCode.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default GradientCode;
