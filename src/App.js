import './App.css';
import Login from './login/Login';
import Home from './Home';
import Card from './login/Card.js'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/> 
            <Route path="home" element={<Home/>} />
            <Route path='/card' element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
