import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Poster from './components/Poster';
import Catalog from './components/Catalog';
import Modal from './components/Modal';
import Subscribe from './components/Subscribe';
import About from './components/About'




function App() {
  return (
    <div className="App">
      <Header/>
      <Poster />
      <Catalog/>
      <Cart/>
      <Modal/>
      <Subscribe/>
      <About/>
    </div>
  );
}

export default App;