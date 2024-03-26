import './App.css';
import Register from './Component/Register';
import Booking from './Component/Booking';
import GetcustomerCylinderById from './Component/GetcustomerCylinderById';
import Header from './Component/Header';
import Bank from './Component/Bank';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLogin from './Component/CustomerLogin';
import AddCylinder from './Component/AddCylinder';
import AvailableCylinder from './Component/AvailableCylinder';
import BookedCylinder from './Component/BookedCylinder';
import CylinderFunctionality from './Component/CylinderFunctionality';
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
      <Route path='/AddCylinder' element={<AddCylinder/>}></Route>
      <Route path='/AvailableCylinder' element={<AvailableCylinder/>}></Route>
      <Route path='/BookedCylinder' element={<BookedCylinder/>}></Route>
      <Route path='/CylinderFunctionality' element={<CylinderFunctionality/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
