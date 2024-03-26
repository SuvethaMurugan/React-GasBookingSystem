import './App.css';
import Register from './Component/Register';
import Booking from './Component/Booking';
import GetcustomerCylinderById from './Component/GetcustomerCylinderById';
import Header from './Component/Header';
import Bank from './Component/Bank';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLogin from './Component/CustomerLogin';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Footer/>
    <Routes>
      <Route path='/bank' element={<Bank />}>Bank</Route>
      <Route path='/cylinder/available' element={<Booking/>}>Cylinder</Route>
      <Route path='/booked/cylinders' element={<GetcustomerCylinderById/>}>Booked</Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<CustomerLogin />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
