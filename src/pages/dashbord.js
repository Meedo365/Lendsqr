import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navBar";
import Sidebar from "../components/sideBar";
import CardView from "../components/userCard";
import icon from '../assets/filter.png';
import Table from 'react-bootstrap/Table';
import icon2 from '../assets/icvert.png';


function DashBoard() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    let loadUsers = () => {
        let url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
        fetch(url)
            .then(res => res.json())
            .then(result => setUsers(result))
    };

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
                        <div className="usertable mt-5">
                            {/* <Container className=""> */}
                            <Table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%', background: 'blue' }}>
                                            <div className="flex">
                                                <h6>organization</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                        <th style={{ width: '15%', background: 'red' }}>
                                            <div className="flex">
                                                <h6>username</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                        <th style={{ width: '15%', background: 'blue' }}>
                                            <div className="flex">
                                                <h6>email</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                        <th style={{ width: '15%', background: 'red' }}>
                                            <div className="flex">
                                                <h6>phone number</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                        <th style={{ width: '15%', background: 'red' }}>
                                            <div className="flex">
                                                <h6>date joined</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                        <th style={{ width: '15%', background: 'red' }}>
                                            <div className="flex">
                                                <h6>status</h6>
                                                <img src={icon} alt="" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="p-5">
                                    {users.map((e, i) => {
                                        let hour = new Date(e.createdAt).getHours();
                                        let minute = new Date(e.createdAt).getMinutes();
                                        let day = new Date(e.createdAt).getDate();
                                        let month = new Date(e.createdAt).toLocaleDateString('en-us', { month: 'short' });
                                        let year = new Date(e.createdAt).getFullYear();
                                        let date = month + " " + day + "," + " " + year + " " + hour + ':' + minute
                                        return (
                                            <tr key={i}>
                                                <td style={{ maxWidth: '15%', background: '' }}>{e.orgName}</td>
                                                <td style={{ maxWidth: '15%', background: '' }}>{e.userName}</td>
                                                <td style={{ textTransform: "lowercase", marginLeft: '-20px' }}>{e.email}</td>
                                                <td style={{ maxWidth: '15%', background: '' }}>{e.phoneNumber}</td>
                                                <td style={{ maxWidth: '15%', background: '' }}>{date}</td>
                                                <td style={{ maxWidth: '15%', background: '' }}>
                                                    <span className="flex" style={{ justifyContent: 'space-between' }}>
                                                        <p>active</p>
                                                        <img src={icon2} />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            {/* </Container> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default DashBoard;