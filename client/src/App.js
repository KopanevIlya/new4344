import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Poster from './components/Poster';
import Catalog from './components/Catalog';
import Modal from './components/Modal';
import Subscribe from './components/Subscribe';
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogs from './pages/Catalogs';
import Filter from './components/Filter';




function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Header/>

        <Routes>

          <Route path='/catalog' element={<Catalogs/>} />
          <Route path='/search' element={<Filter/>} />
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

        </Routes>

        
        

      </BrowserRouter>

      
    </div>
  );
}

export default App;