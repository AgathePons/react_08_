// == Import Actions
import {
  SET_FIRST_COLOR,
  SET_LAST_COLOR,
  CHANGE_DIRECTION,
  CHANGE_INPUT,
} from '../actions/actions';

const initialState = {
  firstColor: '#ffffff',
  lastColor: '#000000',
  direction: '90deg',
  nbColors: 0,
  inputValue: 90,
};

function reducer(state = initialState, action = {}) {
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
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: `${action.payload}deg`,
        inputValue: action.payload,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: Number(action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
