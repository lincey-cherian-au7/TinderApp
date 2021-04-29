import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import TinderCards from './Components/TinderCards';

function App() {
  return (
    <div className="app">
      
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
     
    </div>
  );
}

export default App;
