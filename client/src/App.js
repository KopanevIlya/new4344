import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalogs from './pages/Catalogs';
import Search from './pages/Search';
import Home from './pages/Home';
import Product from './pages/Product';
import BreadCrumbs from './components/BreadСrumbs';
import { CardProvider } from './components/CardContext';
import React, { useContext } from 'react';
import ProductPage from './components/ProductPage';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CardProvider>
      <Header/>
      <BreadCrumbs/>

        <Routes>

          {/* <Route path='/product' element={<Product/>} />  */}
          {/* <Route path='/catalog' element={<Catalogs/>} /> */}
          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:productId" element={<ProductPage />} />

        </Routes>
      </CardProvider>
      

        
       
        
      </BrowserRouter>

      
    </div>
  );
}

export default App;