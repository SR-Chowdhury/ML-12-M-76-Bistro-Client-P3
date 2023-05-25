import React, { useContext, useState } from 'react';
import img from '../../assets/others/authentication1.png';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data); 
    }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const formData = { name, email, password };
    //     // console.log(formData);
    //     if (password.length < 6) {
    //         setError('Password length at least 6 characters');
    //     }

    //     createUser(email, password)
    //         .then(result => {
    //             Swal.fire({
    //                 title: 'Successfully User Created!',
    //                 showClass: {
    //                     popup: 'animate__animated animate__fadeInDown'
    //                 },
    //                 hideClass: {
    //                     popup: 'animate__animated animate__fadeOutUp'
    //                 }
    //             })
    //             const loggedUser = result.user;
    //             updateUserProfile(loggedUser, name);

    //             setError('');
    //             form.reset();
    //         })
    //         .catch(err => setError(err.message))
    // }

    // const updateUserProfile = (user, name) => {
    //     updateProfile(user, {
    //         displayName: name
    //     })
    //         .then( () => console.log('name successfully updated'))
    //         .catch(err => setError(err.message))
    // }

    return (
        <div className='loginContainer'>
            <ReactHelmet title={'Register'} />
            <div className="hero min-h-screen">
                <div className="hero-content flex md:justify-around flex-row-reverse">
                    <div className='heroSection'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        {/* <form onSubmit={handleSubmit} className="card-body text-center"> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='loginTitle'>Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='label-text-alt ms-1 mt-2 text-red-600'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='label-text-alt ms-1 mt-2 text-red-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6 ,maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password field is required</span>}

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