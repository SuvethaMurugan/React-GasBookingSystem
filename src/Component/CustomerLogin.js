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
              localStorage.setItem("customer",JSON.stringify(resp));
                console.log(resp);
                navigate("/customer/Home")
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
    <div className="container">
            <p className="title">Registration Form</p>
            <div className="card">
            <form className="align-items-center" onSubmit={handleLogin}>
                <p>
                    <label forName="b">User Name:</label>
                    <input id = "b" type="text" name="userName" value={customer.userName} onChange={handleAccountChange}  required></input>
                </p>
                <br></br>
                <p>
                    <label forName="c">Password:</label>
                    <input id = "c" type="text" name="password" value={customer.password} onChange={handleAccountChange} required></input>
                </p>
                <input class="button" type={"submit"} placeholder="Login"/>
            </form>
            </div>
    </div>
    </>
  )
}

export default CustomerLogin