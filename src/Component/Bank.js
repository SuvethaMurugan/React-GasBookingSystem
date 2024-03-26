import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BankService from "../Service/BankService";
function Bank() {
   
    let [bank, setBank] = useState({
        "bankId":'',
        "customerId": 1,
        "password":''
        
    });

    const handleAccountChange = (e) => {
        setBank({ ...bank, [e.target.name]: e.target.value });

    }
    // const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bank);
        BankService.LinkBankAccount(bank)
            .then(
                (resp) => {
                    console.log(resp.data);  
                    localStorage.setItem("customer",JSON.stringify(resp)); 
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                }
            )
    }
    return (
        <>
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
