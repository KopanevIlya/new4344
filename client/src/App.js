import './App.css';
import Header from './components/Header';

import Cart from './components/Cart';

import Poster from './components/Poster';
import Catalog from './components/Catalog';



function App() {
  return (
    <div className="App">
      
      <Header />

      

      <Poster />
      <Catalog/>

      <Cart/>


    </div>
  );
}

export default App;
