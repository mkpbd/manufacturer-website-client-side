import React, { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../custom_hooks/useToken";
import { toast } from "react-toastify";


const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
  const [sendPasswordResetEmail, sending, passwordError] = useSendPasswordResetEmail(auth);

  const {
    register,trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  // const [token] = useToken(user || gUser);

  
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

      if(user || gUser){
        navigate(from, { replace: true });
      }
       
  


    // useEffect( () =>{
  //     if (token) {
  //         navigate(from, { replace: true });
  //     }
  // }, [token, from, navigate])


  const onSubmitForm = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  if (error || gError) {
    signInError = (
      <p className="text-danger">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const handleResetPassword =  async (event) => {
    event.preventDefault();
    const email =  await trigger("username");

   // console.log(email ," dfadsfa")
    if (email) {
      await sendPasswordResetEmail(email);

     console.log('emails ', passwordError);

     if(sending){
      toast.success("password reset send");
     }
     if(passwordError){
      toast.error(passwordError.message);
  }
     
    } else {
      toast.error("place valid Email address");
    }
  };

  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <span className="login100-form-title p-b-53 mb-4 pt-3">
            Sign In With
          </span>
          <Row className="d-flex px-5 ">
            <button  className="btn-face m-b-20 me-3 btn transparent">
              <FaGithub className="h2 me-2"></FaGithub>
              Github
            </button>

            <button onClick={()=>signInWithGoogle()} className="btn-google m-b-20 bg-primary text-light btn transparent">
              <FaGoogle className="h2 me-2 text-warning"></FaGoogle>
              Google
            </button>
          </Row>
          <form
            className="login100-form validate-form flex-sb flex-w p-5"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="p-t-31 p-b-9 my-2">
              <label htmlFor="userName" className="txt1">
                Username
              </label>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                {...register("username", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
               
                id="userName"
              />
              <span className="focus-input100"></span>
            </div>
            {errors.username && (
              <p className="text-danger">Email Address invalid </p>
            )}

            <div className="p-t-13 p-b-9 my-3">
              <label htmlFor="password" className="txt1">
                Password
                <button onClick={handleResetPassword} className="txt2 bo1 m-l-5 my-2 ms-2 btn transparent">
                  Forgot?
                </button>
              </label>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                id="password"
              />
              <span className="focus-input100"></span>
            </div>
            {errors.password && (
              <p className="text-danger">
                Password invalid or at list 6 character{" "}
              </p>
            )}

            <div className="container-login100-form-btn m-t-17 my-2">
              <button className="login100-form-btn">Sign In</button>
            </div>
            {signInError}
          </form>
          <div className="w-full text-center p-t-55 my-3">
            <span className="txt2">Not a member?</span>

            <Link to='/register' className="txt2 bo1 ms-2">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
