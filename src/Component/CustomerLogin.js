import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react'
import AccountService from "../Service/AccountService";


function CustomerLogin() {
  let [customer, setCustomer] = useState({
    "userName":'',
    "password":''
  });
  const handleAccountChange = (e) => {
    setCustomer({...customer,[e.target.name]:e.target.value});
  }
  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(customer);
    AccountService.loginCustomerAccount(customer)
        .then(
            (resp)=>{
                console.log(resp.data);
                // navigate
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
    <div class="container">
            <p className="title">Registration Form</p>
            <div class="card">
            <form className="align-items-center" onLogin={handleLogin}>
                <p>
                    <label for="b">User Name:</label>
                    <input id = "b" type="text" name="email" value={customer.email} onChange={handleAccountChange}  required></input>
                </p>
                <br></br>
                <p>
                    <label for="c">Password:</label>
                    <input id = "c" type="text" name="password" value={customer.password} onChange={handleAccountChange} required></input>
                </p>
                <input class="button" type={"submit"} placeholder="Login" />
            </form>
            </div>
    </div>
    </>
  )
}

export default CustomerLogin