import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>

      

        
    
    </Routes>

  </BrowserRouter>
  );
}

export default App;
