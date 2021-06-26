import './App.css';
import { Header } from './components/header';
import { Slider } from './components/slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Slider/>
      </header>
      
    </div>
  );
}

export default App;
