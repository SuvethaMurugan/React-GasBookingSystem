import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
import styles from './Register.css'; // Import the CSS file


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
        {/* <div class={styles.container}>
            <p className="title">Registration Form</p>
            <div class="card">
            <form className="align-items-center">
                <div class="form-group">
                UserName: <input type="text" class ={styles.formcontrol} name="userName" value={customer.userName} onChange={handleAccountChange} required></input>
                <br></br>
                </div>
                <div class="form-group">
                Email: <input type="email" class ={styles.formcontrol} name="email" value={customer.email} onChange={handleAccountChange} required></input>
                </div>
                <div class="form-group">
                Password: <input type="text" class ={styles.formcontrol} name="password" value={customer.password} onChange={handleAccountChange} required></input>
                </div>
                <div class="form-group">
                Mobile Number: <input type="text" class ={styles.formcontrol} name="mobileNo" value={customer.mobileNo} onChange={handleAccountChange} required></input>
                </div>
                <div class="form-group">
                Door No.: <input type="text" class ={styles.formcontrol} name="doorno" value={customer.address.doorNo} onChange={handleAddressChange} required></input>
                </div>
                <div class="form-group">
                Street Name: <input type="text" class ={styles.formcontrol} name="streetname" value={customer.address.streetName} onChange={handleAddressChange} required></input>
                </div>
                <div class="form-group">
                City : <input type="text" class ={styles.formcontrol} name="city" value={customer.address.City} onChange={handleAddressChange} required></input>
                </div>
                <div class="form-group">
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
                </div>
            </form>
            </div>
            </div> */}
            <div class="container">
            <h3 class="heading" >Register</h3>
            <form class="form-control" onSubmit={handleSubmit}>
                <p>
                    <label for="a">Name:</label>
                    <input id = "a" type="text" name="userName" value={customer.userName} onChange={handleAccountChange} required></input>
                </p>
                <br></br>
                <p>
                    <label for="b">Email:</label>
                    <input id = "b" type="email" name="email" value={customer.email} onChange={handleAccountChange} required></input>
                </p>
                <br></br>
                <p>
                    <label for="c">Password:</label>
                    <input id = "c" type="text" name="password" value={customer.password} onChange={handleAccountChange} required></input>
                </p>
                <br></br>
                <p>
                <label for="d">MobileNo:</label>
                <input id = "d" type="text" name="mobileNo" value={customer.mobileNo} pattern="[0-9]{10}" onChange={handleAccountChange} required></input>
                </p>
                <div>
                    {mobileRef.invalid && (mobileRef.touched || mobileRef.dirty) && (
                <div>
                    {mobileRef.errors?.['required'] && <p className="text-danger">Mobile Number is required, cant be blank.</p>}
                    {mobileRef.errors?.['pattern'] && <p className="text-danger">Mobile Number should be of length 10.</p>}
                </div>)}
                </div>
                <br></br>
                <p>
                    <label for="e">Door no.:</label>
                    <input id = "e" type="text" name="doorNo" value={customer.address.doorNo} onChange={handleAddressChange} required></input>
                </p>
                <br></br>
                <p>
                    <label for="f">StreetName:</label>
                    <input id ="f" type="text" name="streetName" value={customer.address.streetName} onChange={handleAddressChange} required></input>
                </p>
                <br></br>
                <p>
                    <label for="g">City:</label>
                    <input if="g" type="text" name="City" value={customer.address.City} onChange={handleAddressChange} min = "500" required></input>
                </p>
                <br></br>
                <p>
                <label for="h">Pin Code:</label>
                <input id="h" type="text" name="pinCode" value={customer.address.pinCode} onChange={handleAddressChange} required></input>
                </p>
                <input class="button" type={"submit"} />
            </form>
            </div>
        </>
    );
}

export default Register; 
