import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title={'Lottery'} numBalls={8} maxNum={40}/>
    </div>
  );
}

export default App;
