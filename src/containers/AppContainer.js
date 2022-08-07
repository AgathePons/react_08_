// == Import
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// == Component
function AppContainer({ element }) {
  const isBackgroundActive = useSelector((state) => state.checkboxValue);
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);

  const style = {
    background: `linear-gradient(${direction},${firstColor},${lastColor})`,
  };
  return (
    <div
      style={isBackgroundActive ? style : null}
      className="app-container"
    >
      <div className="element-container">
        {element}
      </div>
    </div>
  );
}

AppContainer.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AppContainer;
