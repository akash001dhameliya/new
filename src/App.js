import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import About from './About';
// import { } from '@mui/material/';
// import { } from '@mui/icons-material/';
import {Routes,Route, Link} from 'react-router-dom';
import Header from './Header';


function App() {
  return (
    <div className="App">
      
    <Header/>

    <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/About' element={< About />}></Route>
        {/* <Route path='/contact' element={< Contact />}></Route>  */}
      </Routes>
    </div>
  );
}

export default App;
