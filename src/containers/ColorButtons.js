// == Import
import ButtonsList from '../components/ButtonsList/ButtonList';
// == Component
function ColorButtons() {
  return (
    <ButtonsList
      buttons={[
        {
          name: 'Random First',
          onclick: () => console.log('click first'),
        },
        {
          name: 'Random Last',
          onclick: () => console.log('click last'),
        },
      ]}
    />
  );
}

export default ColorButtons;
