// == Import
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeCheckbox } from '../actions/actions';

import ToggleElement from '../components/ToggleElement/ToggleElement';
// == Component
function TogglerContainer() {
  const dispatch = useDispatch();
  const checkboxValue = useSelector((state) => state.checkboxValue);
  //!
  console.log(`checkbox value: ${checkboxValue}`);
  console.log(`type: ${typeof checkboxValue}`);

  const handleChangeCheckboxValue = () => {
    dispatch(actionChangeCheckbox(!checkboxValue));
  };
  return (
    <div className="toggle-container">
      <ToggleElement
        checkboxValue={checkboxValue}
        onCheckboxChange={handleChangeCheckboxValue}
      />
    </div>
  );
}

export default TogglerContainer;
