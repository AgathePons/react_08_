// == Import
import { useSelector } from 'react-redux';

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
    <div style={isBackgroundActive ? style : null}>
      {element}
    </div>
  );
}

export default AppContainer;
