import React, { useState } from 'react';
import img from '../../assets/others/authentication1.png';

const Register = () => {

    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const formData = { name, email, password };
        console.log(formData);
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }
    }

    return (
        <div className='loginContainer'>
            <div className="hero min-h-screen">
                <div className="hero-content flex md:justify-around flex-row-reverse">
                    <div className='heroSection'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body text-center">
                            <h1 className='loginTitle'>Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                                <button className="submitBtn">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;