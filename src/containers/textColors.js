// == Import
import { useSelector } from 'react-redux';

import SpanColor from '../components/SpanColor/SpanColor';
// == Component
function TextColors() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  console.log('TextColors render');
  return (
    <div className="text-colors">
      <SpanColor color={firstColor} />
      -
      <SpanColor color={lastColor} />
    </div>
  );
}

export default TextColors;
