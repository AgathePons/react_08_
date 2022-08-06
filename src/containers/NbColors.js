// == Import
import { useSelector } from 'react-redux';

import TopScreenTag from '../components/TopScreenTag/TopScreenTag';
// == Component
function NbColors() {
  const nbColors = useSelector((state) => state.nbColors);
  const sStr = nbColors > 1 ? 's' : '';
  return (
    <TopScreenTag
      text={`${nbColors} couleur${sStr} générée${sStr}`}
    />
  );
}

export default NbColors;
