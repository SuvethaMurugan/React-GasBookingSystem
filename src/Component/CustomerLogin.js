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
                navigate("/cylinder/available")
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
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    LOGIN
                  </h2>
                  <div className="mb-8">
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="userName" value={customer.userName} onChange={handleAccountChange} required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"name="password" value={customer.password} onChange={handleAccountChange} required/>
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