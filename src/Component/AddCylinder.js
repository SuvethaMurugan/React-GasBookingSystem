import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CylinderService from "../Service/CylinderService";
function AddCylinder()
{
    let [cylinder,setCylinder]=useState(
        {
            "type":'HouseHold',
            "weight":'',
            "price":''
        }
    );
    const handleAccountChange=(e)=>
    {
        setCylinder({...cylinder,[e.target.name]:e.target.value});
    }
    //const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cylinder);
        CylinderService.AddCylinder(cylinder)
            .then(
                (resp) => {
                    console.log(resp.data);  
                    
                }
            )
            .catch(
                (err) => {
                    console.log(err.response);
                }
            )
    }
    return (
        <>
           <div class="container">
            <h3>Add Cylinder Details</h3>
            <form onSubmit={handleSubmit}>
                <label for="CylinderType">CylinderType</label>
                <select name="type" id="type" value={cylinder.type} onChange={handleAccountChange} required>
                    <option value="HouseHold">HouseHold</option>
                    <option value="Industry">Industry</option>
                    <option value="Medical">Medical</option>
                </select><br></br><br></br>
                <label for="CylinderWeight">Weight</label>
                <input type="text" name="weight" id="weight" value={cylinder.weight} onChange={handleAccountChange} required></input><br></br><br></br>
                <label for="CylinderPrice">Price</label>
                <input type="text" name="price" id="price" value={cylinder.price} onChange={handleAccountChange} required></input><br></br><br></br>
                <input class="button" type={"submit"} />
            </form>
          </div>

        </>

    );
}
export default AddCylinder;