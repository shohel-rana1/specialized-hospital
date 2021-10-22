import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const DoctorsDetails = () => {
    const [doctors, setDoctors] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const singleDoctor = doctors?.find(doctor => doctor.D_id === parseInt(id));
    return (
        <div className="backgrnd-img">
            <div className="container mx-auto py-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-6">
                        <img style={{ height: '300px' }} className="img img-fluid w-75" src={singleDoctor?.img} alt="" />
                    </div>
                    <div className="col-md-6 pt-5 text-left">
                        <h1>{singleDoctor?.name}</h1>
                        <h4>{singleDoctor?.deignation}</h4>
                        <h4>{singleDoctor?.description}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;