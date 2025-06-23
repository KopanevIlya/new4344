import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Poster from './components/Poster';
import Catalog from './components/Catalog';
import Modal from './components/Modal';
import Subscribe from './components/Subscribe';
import About from './components/About';
import Footer from './components/Footer'






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

    </div>
  );
}

export default App;