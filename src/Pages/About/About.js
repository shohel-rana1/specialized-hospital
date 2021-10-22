import React from 'react';
import logo1 from '../../images/successful-medical-team.jpg';
const About = () => {
    return (
        <div className="backgrnd-img">
            <div className="container py-5">
                <div className="row g-2">
                    <div className="image col-md-6">
                        <img className="img img-fluid" style={{ height: '500px', width: '350px' }} src={logo1} alt="" />
                    </div>
                    <div className="text-left col-md-6">
                        <h1>Who We Are?</h1>
                        <p>Doctors care  Hospital is the Best Hospital in Bangladesh. We are a 250 bedded multi-disciplinary tertiary-care Hospital, situated at Banai, Dhaka.</p>
                        <h1>Our Mission</h1>
                        <p>To serve each patient with individualized care through dedicated and professionally competent healthcare team using advanced technology and efficient leadership.</p>
                        <h1>Our Vision</h1>
                        <p>To deliver patient-focused comprehensive healthcare services through facilities of International Standard.</p>
                        <h1>Our Promise</h1>
                        <ul>
                            <li>Be polite and respectful.</li>
                            <li>Protect your privacy.</li>
                            <li>Listen to your problems with utmost interest.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;