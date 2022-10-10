import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navBar";
import Sidebar from "../components/sideBar";
import CardView from "../components/userCard";
function DashBoard() {
    return <>
        <Container>
            <NavBar />
            <Row className="dashboard mt-4">
                <Col md='3'>
                    <Sidebar />
                </Col>
                <Col className="user-container" md='9' style={{ background: '#fbfbfb' }}>
                    <div className="m-5">
                        <CardView />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default DashBoard;