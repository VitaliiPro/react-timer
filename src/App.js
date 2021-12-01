import './App.css';
import Timer from './Componenet/Timer';

function App() {
  return (
    <div className="app">
      <Timer minutes={5} seconds={30} step={1000} />
    </div>
  );
}

export default App;
