// == Import
import { useDispatch } from 'react-redux';
import { actionChangeDirection } from '../actions/actions';

import ButtonsList from '../components/ButtonsList/ButtonList';
// == Component
function DirectionButtons() {
  const dispatch = useDispatch();
  return (
    <ButtonsList
      buttons={[
        {
          name: 'to left',
          onClick: () => {
            console.log('clic to left');
            dispatch(actionChangeDirection(270));
          },
        },
        {
          name: 'to right',
          onClick: () => {
            console.log('clic to right');
            dispatch(actionChangeDirection(90));
          },
        },
      ]}
    />
  );
}

export default DirectionButtons;
