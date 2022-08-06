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
            dispatch(actionChangeDirection(270));
          },
        },
        {
          name: 'to right',
          onClick: () => {
            dispatch(actionChangeDirection(90));
          },
        },
        {
          name: 'to bottom',
          onClick: () => {
            dispatch(actionChangeDirection(180));
          },
        },
        {
          name: 'to top',
          onClick: () => {
            dispatch(actionChangeDirection(0));
          },
        },
        {
          name: 'to top right',
          onClick: () => {
            dispatch(actionChangeDirection(45));
          },
        },
        {
          name: 'to bottom left',
          onClick: () => {
            dispatch(actionChangeDirection(225));
          },
        },
      ]}
    />
  );
}

export default DirectionButtons;
