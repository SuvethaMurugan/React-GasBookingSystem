import { useEffect, useState } from "react";
import CylinderService from "../Service/CylinderService";
function CylinderTable({cylinderArray})
{
    return(
        <>
          <h3>Available Cylinders</h3>
          <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
              {
                cylinderArray.map((cylinder)=>
                 <tr key={cylinder.cylinderId}>
                    <td>{cylinder.cylinderId}</td>
                    <td>{cylinder.type}</td>
                    <td>{cylinder.weight}</td>
                    <td>{cylinder.price}</td>
                    <td>{cylinder.isActive ? "true" : "false"}</td>

                 </tr>
                )
              }
            </tbody>
          </table>
        </>

    );
}
function AvailableCylinder()
{
    const[cylinders,setCylinder]=useState([])
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await CylinderService.AvailableCylinder();
                    setCylinder(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
    
            fetchData();
        }, []);
    const allcylinders=()=>{
        CylinderService.AvailableCylinder()
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
                cylinders.length>0 ?<CylinderTable cylinderArray={cylinders}/>:<h3>No cylinders found</h3>
            }
        </>
    )
    

}
export default AvailableCylinder;