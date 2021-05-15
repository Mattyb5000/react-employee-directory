import API from "./utils/API.js";
import Container from "./components/Container";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  console.log(API.getEmployee());
  return (
    <div>
      <Header />
      <Container />
      <Table />
    </div>
  );
}

export default App;
