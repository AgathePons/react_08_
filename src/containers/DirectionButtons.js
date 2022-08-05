// == Import
import ButtonsList from '../components/ButtonsList/ButtonList';
// == Component
function DirectionButtons() {
  return (
    <ButtonsList
      buttons={[
        {
          name: 'to left',
          onClick: () => console.log('clic to left'),
        },
        {
          name: 'to right',
          onClick: () => console.log('clic to right'),
        },
      ]}
    />
  );
}

export default DirectionButtons;
