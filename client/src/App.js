import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalogs from './pages/Catalogs';
import Search from './pages/Search';
import Home from './pages/Home';
import Product from './pages/Product';
import BreadCrumbs from './components/BreadСrumbs';
// import Catalogs from './pages/Catalogs';




function App() {
  return (
    <div className="App">

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