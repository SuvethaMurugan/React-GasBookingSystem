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
    const [validationErrors, setValidationErrors] = useState({
      userName: '',
      email: '',
      password: '',
      mobileNo: '',
      doorNo: '',
      streetName: '',
      City: '',
      pinCode: ''
    });
    const handleAccountChange = (e) => {
      const { name, value } = e.target;
      let errorMessage = '';
      if (name === 'userName') {
        if (value.length < 3) {
          errorMessage = 'Username must be at least 3 characters long';
        }
      }else if (name === 'email') {
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'Invalid email format';
        }
      } else if (name === 'password') {
        if (value.length < 6) {
          errorMessage = '*Password should contain at least one digit(0-9), between 8 to 15 characters, contain at least one lowercase letter(a-z), at least one uppercase letter(A-Z), contain at least one special character';
        }
      } else{
        if (!/^\d{10}$/.test(value)) {
          errorMessage = 'Mobile number must be 10 digits long';
        }
      } 
        setCustomer({ ...customer, [name]: value });
        setValidationErrors({ ...validationErrors, [name]: errorMessage})
    }
    
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';
        if (name === 'doorNo') {
          if (value.length === 0) {
            errorMessage = 'Door number is required';
          }
        } else if (name === 'streetName') {
          if (value.length === 0) {
            errorMessage = 'Street name is required';
          }
        } else if (name === 'City') {
          if (value.length === 0) {
            errorMessage = 'City is required';
          }
        } else if (name === 'pinCode') {
          if (!/^\d{6}$/.test(value)) {
            errorMessage = 'Pin code must be 6 digits long';
          }
        }
        setCustomer({ ...customer,address:{
          ...customer.address,[name]: value
      }  });
        setValidationErrors({ ...validationErrors, [name]: errorMessage });
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
                        {validationErrors.userName && <div className="text-danger">{validationErrors.userName}</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={customer.email} onChange={handleAccountChange} required/>
                        {validationErrors.email && <div className="text-danger">{validationErrors.email}</div>}

                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"name="password" value={customer.password} onChange={handleAccountChange} required/>
                        {validationErrors.password && <div className="text-danger">{validationErrors.password}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicMobileNum">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile num" name="mobileNo" value={customer.mobileNo} onChange={handleAccountChange} required />
                        {validationErrors.mobileNo && <div className="text-danger">{validationErrors.mobileNo}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicDoorNo">
                        <Form.Label>DoorNum</Form.Label>
                        <Form.Control type="text" placeholder="Door No" name="doorNo" value={customer.address.doorNo} onChange={handleAddressChange} required/>
                        {validationErrors.doorNo && <div className="text-danger">{validationErrors.doorNo}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicStreet">
                        <Form.Label>StreetName</Form.Label>
                        <Form.Control type="text" placeholder="Street Name" name="streetName" value={customer.address.streetName} onChange={handleAddressChange} required/>
                        {validationErrors.streetName && <div className="text-danger">{validationErrors.streetName}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" name="City" value={customer.address.City} onChange={handleAddressChange} required/>
                        {validationErrors.City && <div className="text-danger">{validationErrors.City}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicSpin">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="text" placeholder="PinCode" name="pinCode" value={customer.address.pinCode} onChange={handleAddressChange} required />
                        {validationErrors.pinCode && <div className="text-danger">{validationErrors.pinCode}</div>}
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