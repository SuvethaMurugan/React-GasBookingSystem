import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function Register() {
    class Address {
        constructor(doorNo, streetName, City,pinCode) {
            this.pinCode = pinCode;
            this.City = City;
            this.streetName = streetName;
            this.doorNo = doorNo;
        }
    }
    let [customer, setCustomer] = useState({
        "userName": '',
        "email": '',
        "password": '',
        "mobileNo":'',
        "address":new Address('','','',''),
    });



    const handleAccountChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });

    }
    
    const handleAddressChange = (e) => {
        setCustomer({ ...customer,address:{
            ...customer.address,[e.target.name]: e.target.value
        }  });

    }
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customer);
        AccountService.addAccount(customer)
            .then(
                (resp) => {
                    console.log(resp.data);
                    navigate('/login');
                    
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
                    Name: <input type="text" name="userName" value={customer.userName} onChange={handleAccountChange} required></input>
                </p>

                <p>
                    Email: <input type="email" name="email" value={customer.email} onChange={handleAccountChange} required></input>
                </p>
                <p>
                password: <input type="text" name="password" value={customer.password} onChange={handleAccountChange} required></input>
                </p>
                <p>
                mobileNo: <input type="text" name="mobileNo" value={customer.mobileNo} onChange={handleAccountChange} required></input>
                </p>
                <p>
                    doorno: <input type="text" name="doorNo" value={customer.address.doorNo} onChange={handleAddressChange} required></input>
                </p>
                <p>
                    streetName: <input type="text" name="streetName" value={customer.address.streetName} onChange={handleAddressChange} required></input>
                </p>

                <p>
                    City: <input type="text" name="City" value={customer.address.City} onChange={handleAddressChange} min = "500" required></input>
                </p>
                <p>
                    pinCode: <input type="text" name="pinCode" value={customer.address.pinCode} onChange={handleAddressChange} required></input>
                </p>
                <button type="submit">Add Account</button>
            </form>
        </>
    );
}

export default Register; 
