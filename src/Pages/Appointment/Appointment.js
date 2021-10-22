import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/appointments.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const singleappointment = appointments?.find(appointment => appointment.D_id === parseInt(id));
    return (
        <div className="backgrnd-img">
            <div className="container mx-auto py-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-6">
                        <img style={{ height: '300px' }} className="img img-fluid w-75" src={singleappointment?.img} alt="" />
                    </div>
                    <div className="col-md-6 pt-5 text-left">
                        <h1>{singleappointment?.name}</h1>
                        <h4>{singleappointment?.deignation}</h4>
                        <h4>{singleappointment?.description}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appointments;