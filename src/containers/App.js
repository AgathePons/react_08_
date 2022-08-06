// == Import
import NbColors from './NbColors';
import ColorButtons from './ColorButtons';
import TextColors from './textColors';
import GradientContainer from './GradientContainer';
import DirectionButtons from './DirectionButtons';
import DirectionInput from './directionInput';

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <ColorButtons />
      <TextColors />
      <GradientContainer />
      <DirectionButtons />
      <DirectionInput />
    </div>
  );
}

// == Export
export default App;
