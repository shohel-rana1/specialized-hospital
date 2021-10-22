// import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css'
const Services = () => {
    const [services] = useServices();
    return (
        <>
            <div className="text-center py-5">
                <h1 style={{ color: '#069CAD' }} className="fs-1">The Services we provides</h1>
            </div>
            <div className="backgrnd-img container-fluid px-4 p-md-5">
                <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                    {
                        services?.map(service => <ServiceItem
                            key={service.key}
                            service={service}
                        ></ServiceItem>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Services;