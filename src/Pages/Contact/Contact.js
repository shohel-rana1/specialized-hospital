import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import logo2 from '../../images/logo2.jpg';
const Contact = () => {
    return (
        <div className="backgrnd-img">
            <div className="container mx-auto">
                <div className=" row g-4">
                    <h1 className="text-left">Get in touch with us</h1>
                    <hr />
                    <div className="col-md-6 py-5">
                        <img className="img img-fluid h-100" src={logo2} alt="" />
                    </div>
                    <div className="col-md-6 text-left py-5">
                        <Form className="w-100">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Patient Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Age:</Form.Label>
                                <Form.Control placeholder="Patient Age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control placeholder="Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Patient Complain:</Form.Label>
                                <Form.Control placeholder="Complain" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Reffered By:</Form.Label>
                                <Form.Control placeholder="Reffered By" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Remark</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;