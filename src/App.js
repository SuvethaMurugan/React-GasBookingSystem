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
import CustomerHome from './Component/CustomerHome';
import Logout from './Component/Logout';
import Transaction from './Component/Transaction';
import ViewProfile from './Component/ViewProfile';
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
      <Route path='/customer/Home' element={<CustomerHome />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      <Route path='/transaction' element={<Transaction />}></Route>
      <Route path='/profile' element={<ViewProfile />}></Route>
    </Routes>
  </BrowserRouter>
  <Footer/>
  </>
  );
}

export default App;
