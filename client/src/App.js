import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Search from './pages/Search'
import Home from './pages/Home'





function App() {
  return (
    <div className="App">

    <Router>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;