
/* import './App.css'; */
import Header from "./components/layout/Header";

// El segundo Header es llamado directamente para no poner NADA dentro.

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header/> 
    </div>
  );
}

export default App;
