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
            console.log('clic first');
            dispatch(actionSetFirstColor(randomHexColor()));
          },
        },
        {
          name: 'Random All',
          onClick: () => {
            console.log('clic all');
            dispatch(actionSetFirstColor(randomHexColor()));
            dispatch(actionSetLastColor(randomHexColor()));
          },
        },
        {
          name: 'Random Last',
          onClick: () => {
            console.log('clic first');
            dispatch(actionSetLastColor(randomHexColor()));
          },
        },
      ]}
    />
  );
}

export default ColorButtons;
