
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName="chiken karahi" sweetName="RasGullah" />
      <hr/>
      <Dinner dishName="chiken biryani" sweetName="Laddoo" />
      <hr/>
      <Dinner dishName="Mutton biryani" sweetName="Gajar ka Halwa" />
    </div>
  );
}

export default App;
