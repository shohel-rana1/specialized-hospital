import React, { useState } from 'react';
import './Login.css'
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInWithGithub, handleEmalAndPassLogin, getEmail, getPassword } = useAuth();

    //to place order after login
    const [error, setError] = useState('');
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
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
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };


    const handleManualLogin = (event) => {
        event.preventDefault();
        handleEmalAndPassLogin()
            .then(result => {
                history.push(redirect_uri);
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
                    <h2>SignIn Please</h2>
                    <form className="text-left" onSubmit={handleManualLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={getPassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already Registered</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </form>
                    <p>New to this website? <Link to="/register">Create Account</Link></p>
                    <div className="text-left"><h6>SignIn With Apps</h6></div>
                    <div className="text-lg-start px-2">
                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-secondary">Google Sing In</button>
                        <button onClick={handleGithubLogin} type="submit" className="btn btn-secondary">Github Sing In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;