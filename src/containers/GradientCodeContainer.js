// == Import
import { useSelector } from 'react-redux';

import GradientCode from '../components/GradientCode/GradientCode';
// == Component
function GradientCodeContainer() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);
  return (
    <GradientCode
      direction={direction}
      firstColor={firstColor}
      lastColor={lastColor}
    />
  );
}

export default GradientCodeContainer;
