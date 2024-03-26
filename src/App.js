import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Route, Routes,Link, Router } from 'react-router-dom';
import Booking from './Component/Booking';
import GetcustomerCylinderById from './Component/GetcustomerCylinderById';
import Header from './Component/Header';
import Bank from './Component/Bank';
import Footer from './Component/Footer';
function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Footer/>
    <Routes>
      <Route path='/register' element={<Register />}> Register</Route>
      <Route path='/login' element={<Login />}>Login</Route>
      <Route path='/bank' element={<Bank />}>Bank</Route>
      <Route path='/cylinder/available' element={<Booking/>}>Cylinder</Route>
      <Route path='/booked/cylinders' element={<GetcustomerCylinderById/>}>Booked</Route>
    </Routes>

  </BrowserRouter>
  );
}

export default App;
