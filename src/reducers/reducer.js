// == Import Actions
import {
  SET_FIRST_COLOR,
  SET_LAST_COLOR,
} from '../actions/actions';

const initialState = {
  firstColor: '#ffffff',
  lastColor: '#000000',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = initialState, action = {}) {
  console.log(`reducer: ${{ state, action }}`);

  switch (action.type) {
    case SET_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.payload,
      };
    case SET_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
