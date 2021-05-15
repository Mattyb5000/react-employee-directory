import './App.css';
import API from './utils/API.js'
import Employees from "./components/Employees"

function App() {
  console.log(API.getRandomEmployee())
  return (
  
      // <h1>Employee Directory</h1>
      <Employees />
   
  );
}

export default App;

