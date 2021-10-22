import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegistration, signInWithGoogle, signInWithGithub, getEmail, getPassword, getRePassword, handleNameChanged, handlePhoneChanged, toggleLogin } = useAuth();

    const [error, setError] = useState('');
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
                location.reload();
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri);
                location.reload();
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };


    return (
        <div className="backgrnd-img">
            <div className="container login-form ">
                <div className="py-5">
                    <h2>Create Account</h2>
                    <form className="text-left" onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input onBlur={handleNameChanged} type="text" className="form-control" placeholder="Your Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input onBlur={handlePhoneChanged} type="text" className="form-control" placeholder="Phone Number" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={getPassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Re-enter Password</label>
                            <input onBlur={getRePassword} type="password" className="form-control" placeholder="Re-enter Password" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already Login?</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                    <p>
                        Already have an account? <Link to="/login">Log-In</Link>
                    </p>
                    <div className="text-lg-start px-2">
                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-secondary">Google Sing In</button>
                        <button onClick={handleGithubLogin} type="submit" className="btn btn-secondary">Github Sing In</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;