
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/home';
import Ourservices from './components/pages/Ourservices'

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='ourServices' element={<Ourservices/>}/>
        </Routes>
        </BrowserRouter>
      
      </div>

    </div>
  );
}

export default App;
