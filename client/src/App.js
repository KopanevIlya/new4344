import './App.css';
import Header from './components/Header';

import Cart from './components/Cart';
import Poster from './components/Poster';
import Catalog from './components/Catalog';
import Modal from './components/Modal';
import Subscribe from './components/Subscribe';
import About from './components/About';
import Footer from './components/Footer'


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalogs from './pages/Catalogs';
import Search from './pages/Search';
import Home from './pages/Home';
import Product from './pages/Product';
import BreadCrumbs from './components/BreadСrumbs';






function App() {
  return (
    <div className="App">

      <h1>Привет</h1>
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Header/>
      <Poster />
      <Catalog/>
      <Cart/>
      <Modal/>
      <Subscribe/>
      <About/>
      <Footer/>


      <BrowserRouter>

      <Header/>
      <BreadCrumbs/>

        <Routes>

          <Route path='/product' element={<Product/>} /> 
          {/* <Route path='/catalog' element={<Catalogs/>} /> */}
          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<Home/>}/>

        </Routes>

        
        

      </BrowserRouter>

      

    </div>
  );
}

export default App;