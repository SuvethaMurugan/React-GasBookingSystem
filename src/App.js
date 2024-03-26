import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLogin from './Component/CustomerLogin';
function App() {
  return (
    <>
    {/* <Header /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<CustomerLogin />}></Route>

      

        
    
    </Routes>

  </BrowserRouter>
  </>
  );
}

export default App;
