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
import Catalogs from './pages/Catalogs';
<<<<<<< HEAD
import Filter from './components/Filter';
import SearchResults from './components/SearchResults';
=======
>>>>>>> bbb7310de82f59621fa636000d092ec52f75f68d




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CardProvider>
      <Header/>
      <BreadCrumbs/>

        <Routes>

          
          <Route path='/catalog' element={<Catalogs/>} />
<<<<<<< HEAD
          <Route path='/search' element={<SearchResults/>} />
          <Route path='/' element={
            
            <>

            <Poster />
            <Catalog/>
            <Cart/>
            <Modal/>
            <Subscribe/>
            <About/>

            </>
          }/>

=======
          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:productId" element={<ProductPage />} />
       
>>>>>>> bbb7310de82f59621fa636000d092ec52f75f68d
        </Routes>
      </CardProvider>
      

        
       
        
      </BrowserRouter>

      
    </div>
  );
}

export default App;