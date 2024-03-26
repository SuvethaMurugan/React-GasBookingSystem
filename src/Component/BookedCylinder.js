import { useState,useEffect } from "react";
import CylinderService from "../Service/CylinderService";
function BookedCylinderTable({cylinderArray})
{
    return(
        <>
          <h3>Booked Cylinders</h3>
          <table className="table table-bordered">
            <thead>
            <thead>
            <tr>
                <th>Id</th>
                <th>CylinderId</th>
                <th>Cylinder Type</th>
                <th>BookingDate</th>
                <th>DeliveryDate</th>
            </tr>
        </thead>
            </thead>
            <tbody>
              {
                cylinderArray.map((cylinder)=>
                 <tr key={cylinder.id}>
                    <td>{cylinder.id}</td>
                    <td>{cylinder.cylinderId}</td>
                    <td>{cylinder.type}</td>
                    <td>{cylinder.bookingDate}</td>
                    <td>{cylinder.deliveryDate}</td>

                 </tr>
                )
              }
            </tbody>
          </table>
        </>

    );
}
function BookedCylinder()
{
    const[cylinders,setCylinder]=useState([])
            useEffect(()=>{
                bookedcylinders();
            },[]);
    const bookedcylinders=()=>{
        CylinderService.BookedCylinder()
        .then(
            (resp) => {
                console.log(resp.data)
                setCylinder(resp.data);
            }
        )
        .catch(
            (err) => console.log(err)
        )
        .finally(
            () => console.log("Server completed sending data.")
        );
    }
    return(
        <>
            {
                cylinders.length>0 ?<BookedCylinderTable cylinderArray={cylinders}/>:<h3>No cylinders found</h3>
            }
        </>
    )
    

}
export default BookedCylinder;