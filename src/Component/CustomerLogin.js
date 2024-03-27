import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react'
import AccountService from "../Service/AccountService";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';



function CustomerLogin() {
  let [customer, setCustomer] = useState({
    "userName":'',
    "password":''
  });
  const [validationErrors, setValidationErrors] = useState({
    userName: '',
    password: ''
  });
  const handleAccountChange = (e) => {
    setCustomer({...customer,[e.target.name]:e.target.value});
    const { name, value } = e.target;
      let errorMessage = '';
      if (name === 'userName') {
        if (value.length < 3) {
          errorMessage = 'Invalid Username!';
        }
      }else{
        if (value.length < 6) {
          errorMessage = '*Password should contain at least one digit(0-9), between 8 to 15 characters, contain at least one lowercase letter(a-z), at least one uppercase letter(A-Z), contain at least one special character';
        }
      } 
      setValidationErrors({ ...validationErrors, [name]: errorMessage}) 
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
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={14} lg={10} xs={6}>
            <Card className="px-20">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <h3 className="fw-bold mb-2 text-center text-uppercase ">
                    Welcome to EGas Booking Applicaion
                  </h3>
                  <h5 className="fw-bold mb-2 text-center text-uppercase ">
                    LOGIN
                  </h5>
                  <div className="mb-8">
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="userName" value={customer.userName} onChange={handleAccountChange} required />
                        {validationErrors.userName && <div className="text-danger">{validationErrors.userName}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"name="password" value={customer.password} onChange={handleAccountChange} required/>
                        {validationErrors.password && <div className="text-danger">{validationErrors.password}</div>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type={"submit"} style={{ backgroundColor: '#9B4444'}}>
                          Login
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
  )
}

export default CustomerLogin