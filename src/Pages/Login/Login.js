import React from 'react';
import { Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';

const Login = () => {
    return (
        <div className="limiter">
		<div className="container-login100" style={{"background-image": "url('images/bg-01.jpg')"}}>
			<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form className="login100-form validate-form flex-sb flex-w p-5">
					<span className="login100-form-title p-b-53 mb-4">
						Sign In With
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
					
					<div className="p-t-31 p-b-9 my-2">
						<label htmlFor='userName' className="txt1">
							Username
						</label>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Username is required">
						<input className="input100" type="text" name="username" id="userName" />
						<span className="focus-input100"></span>
					</div>
					
					<div className="p-t-13 p-b-9 my-3">
						<label htmlFor='password' className="txt1">
							Password
                            <a href="#" className="txt2 bo1 m-l-5 my-2 ms-2">
							Forgot?
						</a>
						</label>

					
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" id='password' />
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn m-t-17 my-2">
						<button className="login100-form-btn">
							Sign In
						</button>
					</div>

					<div className="w-full text-center p-t-55 my-3">
						<span className="txt2">
							Not a member?
						</span>

						<a href="#" className="txt2 bo1 ms-2">
							Sign up now
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
    );
};

export default Login;