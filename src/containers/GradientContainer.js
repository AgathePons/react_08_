// == Import
import { useSelector } from 'react-redux';

import Gradient from '../components/Gradient/Gradient';
// == Component
function GradientContainer() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);
  return (
    <Gradient
      direction={direction}
      firstColor={firstColor}
      lastColor={lastColor}
    />
  );
}

export default GradientContainer;
