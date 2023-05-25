import React, { useState } from 'react';
import './Login.css';
import img from '../../assets/others/authentication1.png';

const Login = () => {

    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = { email, password };
        console.log(formData);
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }
    }

    return (
        <div className='loginContainer'>
            <div className="hero min-h-screen">
                <div className="hero-content flex md:justify-around">
                    <div className='heroSection'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body text-center">
                            <h1 className='loginTitle'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {
                                    error && <p className='label-text-alt text-center text-red-600'>{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="submitBtn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;