// == Import
import PropTypes from 'prop-types';
import './gradient.scss';

// == Component
function Gradient({ direction, firstColor, lastColor }) {
  const style = {
    background: `linear-gradient(${direction},${firstColor},${lastColor})`,
  };
  // console.log(`background: linear-gradient(${direction},${firstColor},${lastColor})`);
  return (
    <div style={style} className="gradient" />
  );
}

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Gradient;
