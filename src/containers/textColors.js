// == Import
import SpanColor from '../components/SpanColor/SpanColor';
// == Component
function TextColors() {
  console.log('TextColors render');
  return (
    <div className="text-colors">
      <SpanColor color="#f0f" />
      -
      <SpanColor color="#0f0" />
    </div>
  );
}

export default TextColors;
