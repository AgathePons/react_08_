// == Import
import NbColors from './NbColors';
import TogglerContainer from './ToggleContainer';
import ColorButtons from './ColorButtons';
import TextColors from './textColors';
import GradientContainer from './GradientContainer';
import GradientCodeContainer from './GradientCodeContainer';
import DirectionButtons from './DirectionButtons';
import DirectionInput from './DirectionInput';

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <TogglerContainer />
      <ColorButtons />
      <TextColors />
      <GradientContainer />
      <GradientCodeContainer />
      <DirectionButtons />
      <DirectionInput />
    </div>
  );
}

// == Export
export default App;
