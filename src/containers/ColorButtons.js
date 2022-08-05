// == Import
import ButtonsList from '../components/ButtonsList/ButtonList';
// == Component
function ColorButtons() {
  return (
    <ButtonsList
      buttons={[
        {
          name: 'Random First',
          className: 'test',
          onClick: () => console.log('clic first'),
        },
        {
          name: 'Random Last',
          onClick: () => console.log('clic last'),
        },
      ]}
    />
  );
}

export default ColorButtons;
