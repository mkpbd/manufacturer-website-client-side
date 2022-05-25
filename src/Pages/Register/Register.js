import React from 'react';
import { Row } from 'react-bootstrap';
import { useForm,Controller } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../custom_hooks/useToken';
import Loading from '../../components/Loading/Loading';

const Register = () => {

	const { register,formState: { errors }, handleSubmit ,control, watch} = useForm();
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

	
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token]  = useToken(user || gUser);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (token) {
    //     navigate('/appointment');
    // }
	const onSubmitForm = async(data) => {
		await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.username });
	  console.log(data)
	};

	// const password = watch('password');

    return (
        <div className="limiter">
		<div className="container-login100" style={{"backgroundImage": "url('images/bg-01.jpg')"}}>
			<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form onSubmit={handleSubmit(onSubmitForm)} className="login100-form validate-form flex-sb flex-w p-5">
					<span className="login100-form-title p-b-53 mb-4">
						Register Form
					</span>
                    <Row className='d-flex px-5 '>
                        
					<a href="#" className="btn-face m-b-20 me-3">
        <FaGithub className='h2 me-2'></FaGithub>
						Github
					</a>

					<a href="#" className="btn-google m-b-20 bg-primary text-light">
                    <FaGoogle className='h2 me-2 text-warning'></FaGoogle>
						Google
					</a>
				
                    </Row>
					
                    <Row>
                    <div className="p-t-31 p-b-9 my-2">
						<label htmlFor='userName' className="txt1">
							Name
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Username is required">
						<input className="input100" type="text" {...register("username",{required:true, minLength:4})} id="userName" />
						<span className="focus-input100"></span>
					</div>
					{errors.username && <p className='text-danger'>user name required at list 4 character  or more </p>}
                    </Row>
					
					
                    <Row>
                    <div className="p-t-31 p-b-9 my-2">
						<label htmlFor='email' className="txt1">
							Email
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "email is required">
						<input className="input100" type="text" {...register('email', {required : true, pattern:   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} id="email" />
						<span className="focus-input100"></span>
					</div>
					{errors.email && <p className='text-danger'>Email required </p>}
                    </Row>

                  
					
					
                    <Row>
                    <div className="p-t-13 p-b-9 my-3">
						<label htmlFor='password' className="txt1">	Password</label>

					</div>
					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" {...register('password', {required: true, minLength: 6})} id='password' />
						<span className="focus-input100"></span>
					</div>
					{errors.password && <p className='text-danger'>password required and 6 or more character </p>}
                    <Row>
                    <div className="p-t-31 p-b-9 my-2">
						<label htmlFor='confirmPassword' className="txt1">
							Confirm Password
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "email is required">
						<input className="input100" type="password" {...register('confirmPassword', {required: true, minLength: 6})} id="confirmPassword" />
						<span className="focus-input100"></span>
					</div>
					{errors.confirmPassword && <p className='text-danger'>Confirm password required and 6 or more character </p>}
					{errors.password !== errors.confirmPassword && <p className='text-danger'>password and confirm password dose not match </p>}
                    </Row>
                    </Row>

					<Row>
                    <div className="container-login100-form-btn m-t-17 my-2">
						<button className="login100-form-btn">
							Sign In
						</button>
					</div>
					{signInError}
					<div className="w-full text-center p-t-55 my-3">
						<span className="txt2">
							You have a account
						</span>

						<Link to="/login" className="txt2 bo1 ms-2">
							Login up now
						</Link>
					</div>

                    </Row>
				</form>
			</div>
		</div>
	</div>
	
    );
};

export default Register;