import './App.css';

import './styles/normalize.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import UsPage from './pages/UsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/us' element={<UsPage />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/gallery' element={<GalleryPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
