import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceItem.css'

const ServiceItem = ({ service }) => {
    const { img, name, description, key } = service;
    return (
        <Col className="mt-5">
            <Card>
                <Card.Img className="img image-desgin img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Text className="name">{description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link
                        to={`/servicedetails/${key}`}
                        className="btn w-100 btn-bg"
                    >
                        View Details
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceItem;