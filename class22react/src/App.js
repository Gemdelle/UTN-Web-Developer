
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/Ejemplo01';
import Ejemplo02 from './pages/Ejemplo02';
import Ejemplo03 from './pages/Ejemplo03';
import Ejemplo04 from './pages/Ejemplo04';
import Ejemplo05 from './pages/Ejemplo05';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */} {/* In case we need to write something INSIDE the component. */}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ejemplo01' element={<Ejemplo01 />}></Route>
          <Route path='/ejemplo02' element={<Ejemplo02 />}></Route>
          <Route path='/ejemplo03' element={<Ejemplo03 />}></Route>
          <Route path='/ejemplo04' element={<Ejemplo04 />}></Route>
          <Route path='/ejemplo05' element={<Ejemplo05 />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
