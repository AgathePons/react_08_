// == Import
import NbColors from './NbColors';
import ColorButtons from './ColorButtons';
import TextColors from './textColors';
import GradientContainer from './GradientContainer';

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <ColorButtons />
      <TextColors />
      <GradientContainer />
    </div>
  );
}

// == Export
export default App;
