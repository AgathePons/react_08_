// == Import
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeDirection, actionChangeInput } from '../actions/actions';

import InputDirection from '../components/InputDirection/InputDirection';
// == Component
function DirectionInput() {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.inputValue);
  const min = 0;
  const max = 360;

  const handleInputChange = (event) => {
    console.log(`input: ${event.target.value}`);
    const newInputValue = Math.max(min, Math.min(max, Number(event.target.value)));
    dispatch(actionChangeInput(newInputValue));
    dispatch(actionChangeDirection(newInputValue));
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <InputDirection
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onInputSubmit={handleInputSubmit}
    />
  );
}

export default DirectionInput;
