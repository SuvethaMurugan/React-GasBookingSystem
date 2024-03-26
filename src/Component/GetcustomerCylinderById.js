
import { useEffect, useState } from "react";
import BookingService from "../Service/BookingService";
import { useNavigate } from "react-router-dom";
import PaymentService from "../Service/PaymentService";
import homeImage from './home.jpg';

function DisplayCylinders({cylinderarray}){
    var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
    let[Paymentcylinder,setPaymentCylinder] = useState({
        customerId: customer.data.id,
        bookingId: 1,
        password:''
    });
    const [password, setPassword] = useState(false);
    const handleAccountChange = (e) => {
        setPaymentCylinder({ ...Paymentcylinder, [e.target.name]: e.target.value });
    }
    const navigate=useNavigate();
    const PaymentCylinder=(id)=>{
        setPaymentCylinder({ ...Paymentcylinder,bookingId:id });
        console.log(Paymentcylinder);
        
        if (window.confirm("Are you sure you want to book")) {
            var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
            console.log(customer.data.bank);
            if(customer.data.bank==null){
                if(window.confirm("Bank account is not linked to the account")){
                navigate('/bank');
                }
            }
            else{
                setPassword(true);
                console.log(password);
            }
    
        }
    }
    const Paycylinder=()=>{
        PaymentService.PaymentCylinder(Paymentcylinder)
        .then(
            (resp) => {
                console.log(resp.data);
                console.log("Payment successful");
                navigate("/customer/Home");
                
            }
        )
        .catch(
            (err) => {
                console.log(err.response.data);
            }
        )
    }
        
    return(
        <>
         {
            password && 
            <>
                 <div className="passwordcheck">
                <label>PASSWORD</label>
                <input type="password" id="psw" name="password" value={Paymentcylinder.password} onChange={handleAccountChange}/>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={() => Paycylinder()}>Submit</button>
                 </div>
                 </>
            
         }
        <h3>DISPLAY AVAILABLE CYLINDER </h3>
        <table  className="table table-bordered">
      <thead>
      <tr>
      <th>BOOKING ID</th>
        <th>CYLINDER ID</th>
        <th>STATUS</th>
        <th>CYLINDER TYPE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
            {
                cylinderarray.map(
                    (cylinder) =>
                    (<tr key={cylinder.id}>
                                <td>{cylinder.id}</td>
                                <td>{cylinder.cylinderid}</td>
                                <td>{cylinder.status}</td>
                                <td>{cylinder.cylinderType}</td>
                                <td><button onClick={() => PaymentCylinder(cylinder.id)}>Pay</button></td>
                    </tr>)


                        )
                    }
                    </tbody>
    </table>
        </>

    )
}

function GetcustomerCylinderById() {
    let[cylinders,setcylinders]=useState([]);
    useEffect(()=>{
        getAllCylinders();
    },[]);
    const getAllCylinders=()=>{
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        BookingService.getcustomercylinderByid(customer.data.id)
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
export default GetcustomerCylinderById;