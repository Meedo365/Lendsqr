import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navBar";
import Sidebar from "../components/sideBar";
function DashBoard() {
    return <>
        <Container>
            <NavBar />
            <Row className="dashboard mt-4">
                <Col md='3'>
                    <Sidebar />
                </Col>
                <Col md='9' style={{ background: '#E5E5E5' }}>

                </Col>
            </Row>
        </Container>
    </>
}

export default DashBoard;