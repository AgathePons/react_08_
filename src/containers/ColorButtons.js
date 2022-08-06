// == Import
import { useDispatch } from 'react-redux';
import { actionSetFirstColor, actionSetLastColor } from '../actions/actions';

import randomHexColor from '../utils';

import ButtonsList from '../components/ButtonsList/ButtonList';
// == Component
function ColorButtons() {
  // useDispatch hook allows to use the dispatch function
  const dispatch = useDispatch();
  return (
    <ButtonsList
      buttons={[
        {
          name: 'Random First',
          className: 'test',
          onClick: () => {
            dispatch(actionSetFirstColor(randomHexColor()));
          },
        },
        {
          name: 'Random All',
          onClick: () => {
            dispatch(actionSetFirstColor(randomHexColor()));
            dispatch(actionSetLastColor(randomHexColor()));
          },
        },
        {
          name: 'Random Last',
          onClick: () => {
            dispatch(actionSetLastColor(randomHexColor()));
          },
        },
        {
          name: 'Set beautiful',
          onClick: () => {
            dispatch(actionSetFirstColor('#f0f'));
            dispatch(actionSetLastColor('#0f0'));
          },
        },
      ]}
    />
  );
}

export default ColorButtons;
