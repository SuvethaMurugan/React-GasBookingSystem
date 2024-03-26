import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BankService from "../Service/BankService";
import homeImage from './home.jpg';
function Bank() {
    var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
    let [bank, setBank] = useState({
        "bankId":'',
        "customerId": customer.data.id,
        "password":''
        
    });

    const handleAccountChange = (e) => {
        setBank({ ...bank, [e.target.name]: e.target.value });

    }
     const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bank);

        BankService.LinkBankAccount(bank)
            .then(
                (resp) => {
                    console.log(resp.data);  
                    localStorage.setItem("customer",JSON.stringify(resp)); 
                    navigate("/customer/Home");
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                }
            )
    }
    const handleHomeClick=()=>{
        console.log("Home clicked");
        navigate("/customer/Home");
    }
    return (
        <>
        <br></br>
         <button onClick={handleHomeClick}>
            <img src={homeImage} alt="Home" style={{width:'30px'}} />
        </button>
        <br></br>
        <br></br>
            <h3>Add new Account:</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    BankID: <input type="text" name="bankId" value={bank.bankId} onChange={handleAccountChange} required></input>
                </p>
                <p>
                    Password: <input type="text" name="password" value={bank.password} onChange={handleAccountChange} required></input>
                </p>
                <button type="submit">Add Account</button>
            </form>
        </>
    );
}

export default Bank; 
