import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import bg from '../assets/bg.PNG';
import logo from '../assets/logo.png';
import { Col, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    return <>
        <Container>
            <Row>
                <Col className="login-bg mt-5" lg="6" md='5'>
                    <img id="logo" src={logo} alt='logo' />
                    <img src={bg} alt='logo' />
                </Col>
                <Col className="login-form p-5" lg="6" md='7'>
                    <Form className="m-5">
                        <h3>Welcome!</h3>
                        <p>Enter details to login.</p>
                        <FormGroup className="mb-4" >
                            <span className="flex">
                                <Form.Control
                                    type='email'
                                    placeholder="Email"
                                />
                            </span>
                        </FormGroup>
                        <FormGroup className="mb-4" >
                            <span className="flex">
                                <Form.Control
                                    type='password'
                                    placeholder="Password"
                                />
                                <p id='showPassword'>show</p>
                            </span>
                        </FormGroup>
                        <Link to="#">forgot password?</Link>
                        <br />
                        <button>
                            log in
                        </button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
}
export default Login