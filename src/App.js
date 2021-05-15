import './App.css';
import API from './utils/API.js'

function App() {
  console.log(API.getRandomEmployee())
  return (
  <div>
    <h1>Employee Directory</h1>
  </div>
  );
}

export default App;

