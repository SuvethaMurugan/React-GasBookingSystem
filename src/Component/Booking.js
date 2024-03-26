import { useEffect, useState } from "react";
import BookingService from "../Service/BookingService";
import { useNavigate } from 'react-router-dom';
import homeImage from './home.jpg';
function DisplayCylinders({cylinderarray}){
    const navigate = useNavigate();

    const bookCylinder=(cylinderid)=>{
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        const bookcylinder = {
            customerId: customer.data.id,
            cylinderId: cylinderid
        };
        console.log(bookcylinder);
        if (window.confirm("Are you sure you want to book")) {
        BookingService.bookCylinder(bookcylinder)
        .then(
            (resp) => {
                console.log(resp.data);
                navigate('/booked/cylinders');
                
            }
        )
        .catch(
            (err) => {
                console.log(err.response.data);
            }
        )
        }
        
}

    return(
        <>
        <h3>DISPLAY AVAILABLE CYLINDER </h3>
    <table  className="table table-bordered">
      <thead>
      <tr>
        <th>ID</th>
        <th>TYPE</th>
        <th>WEIGHT</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
            {
                cylinderarray.map(
                    (cylinder) =>
                    (<tr key={cylinder.cylinderId}>
                                <td>{cylinder.cylinderId}</td>
                                <td>{cylinder.type}</td>
                                <td>{cylinder.weight}</td>
                                <td>{cylinder.price}</td>
                                <td><button onClick={() => bookCylinder(cylinder.cylinderId)}>Book</button></td>
                    </tr>)


                        )
                    }
                    </tbody>
    </table>
        </>

    )
}

function Booking() {
    let[cylinders,setcylinders]=useState([]);
    useEffect(()=>{
        getAllCylinders();
    },[]);
    const getAllCylinders=()=>{
        BookingService.getAllCylinders()
            .then(
                (resp)=>{
                    console.log(resp);
                    setcylinders(resp.data);
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                }
            )
            .finally(
                ()=>{
                    console.log("Loaded data from server");
                }
            )
    }
    const navigate = useNavigate();
    const handleHomeClick=()=>{
        console.log("Home clicked");
        navigate("/customer/Home");
    }
    return(
        <>
        <br></br>
         <button onClick={handleHomeClick}>
            <img src={homeImage} alt="Home" style={{width:'30px'}} />
        </button>
        <br></br>
        <br></br>
            {
                cylinders.length>0 ?<DisplayCylinders cylinderarray={cylinders}/>:<h3>No cylinders found</h3>
            }
        </>
    )

    
}
export default Booking;