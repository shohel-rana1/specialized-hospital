import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const singleItem = items?.find(item => item.key === parseInt(id));

    return (
        <div className="backgrnd-img">
            <div className="container mx-auto py-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-6">
                        <img style={{ height: '300px' }} className="img img-fluid w-75" src={singleItem?.img} alt="" />
                    </div>
                    <div className="col-md-6 pt-5">
                        <h1>{singleItem?.name}</h1>
                        <h4>{singleItem?.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServiceDetails;