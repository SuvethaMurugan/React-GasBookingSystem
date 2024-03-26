import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

// import {styles} from './Register.css'; 


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

            {/* <div class = "container">
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
            </div> */}
     <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={14} lg={10} xs={6}>
            <Card className="px-20">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Register
                  </h2>
                  <div className="mb-8">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="userName" value={customer.userName} onChange={handleAccountChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={customer.email} onChange={handleAccountChange} required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"name="password" value={customer.password} onChange={handleAccountChange} required/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicMobileNum">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile num" name="mobileNo" value={customer.mobileNo} onChange={handleAccountChange} required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicDoorNo">
                        <Form.Label>DoorNum</Form.Label>
                        <Form.Control type="text" placeholder="Door No" name="doorNo" value={customer.address.doorNo} onChange={handleAddressChange} required/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicStreet">
                        <Form.Label>StreetName</Form.Label>
                        <Form.Control type="text" placeholder="Street Name" name="streetName" value={customer.address.streetName} onChange={handleAddressChange} required/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" name="City" value={customer.address.City} onChange={handleAddressChange} required/>
                      </Form.Group><Form.Group className="mb-3" controlId="formBasicSpin">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="text" placeholder="PinCode" name="pinCode" value={customer.address.pinCode} onChange={handleAddressChange} required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type={"submit"} style={{ backgroundColor: '#9B4444'}}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
        </>
    );
}

export default Register;