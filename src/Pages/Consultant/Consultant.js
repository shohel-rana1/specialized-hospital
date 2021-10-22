import React from 'react';
import './Consultant.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Consultant = ({ consultor }) => {
    const { img, name, designation, D_id } = consultor;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <Card.Img className="img card img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Text className="name">{designation}</Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between ">
                    <Link
                        to={`/doctorsdetails/${D_id}`}
                        className="btn w-50 btn-bg mx-1"
                    >
                        View Details
                    </Link>
                    <Link
                        to={`/appointment/${D_id}`}
                        className="btn w-50 btn-bg mx-1"
                    >
                        Appointment
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Consultant;