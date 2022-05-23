import React from 'react';
import { Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Register.css'

const Register = () => {
    return (
        <div className="limiter">
		<div className="container-login100" style={{"background-image": "url('images/bg-01.jpg')"}}>
			<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form className="login100-form validate-form flex-sb flex-w p-5">
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
						<input className="input100" type="text" name="username" id="userName" />
						<span className="focus-input100"></span>
					</div>
                    </Row>
					
					
                    <Row>
                    <div className="p-t-31 p-b-9 my-2">
						<label htmlFor='email' className="txt1">
							Email
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "email is required">
						<input className="input100" type="text" name="email" id="email" />
						<span className="focus-input100"></span>
					</div>
                    </Row>

                  
					
					
                    <Row>
                    <div className="p-t-13 p-b-9 my-3">
						<label htmlFor='password' className="txt1">	Password</label>

					
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" id='password' />
						<span className="focus-input100"></span>
					</div>

                    <Row>
                    <div className="p-t-31 p-b-9 my-2">
						<label htmlFor='confirmPassword' className="txt1">
							Confirm Password
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "email is required">
						<input className="input100" type="password" name="confirmPassword" id="confirmPassword" />
						<span className="focus-input100"></span>
					</div>
                    </Row>
                    </Row>

					<Row>
                    <div className="container-login100-form-btn m-t-17 my-2">
						<button className="login100-form-btn">
							Sign In
						</button>
					</div>

					<div className="w-full text-center p-t-55 my-3">
						<span className="txt2">
							You have a account
						</span>

						<a href="#" className="txt2 bo1 ms-2">
							Login up now
						</a>
					</div>

                    </Row>
				</form>
			</div>
		</div>
	</div>
	
    );
};

export default Register;