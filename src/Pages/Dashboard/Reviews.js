import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,reset
    } = useForm();
   // const imageStorageKey = "57aa6916ec4d0781296d7c959206f0d7";
  
    const handelRevies = (data) => {
     
           
            let part = {
              userName: user.displayName,
              review: data.review,
              rating: data.rating,
              email: user.email,
            };
            // send to your database
            fetch("http://localhost:5000/review", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(part),
            })
              .then((res) => res.json())
              .then((inserted) => {
                console.log("insertd", inserted)
                if (inserted) {
                  toast.success("Parts added successfully");
                  reset();
                } else {
                  toast.error("Failed to add the Review");
                }
              });
       
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Add parts
                </h5>
                <Form onSubmit={handleSubmit(handelRevies)}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      {...register("username")}
                      className="form-control"
                      id="floatingInputUsername"
                      defaultValue={user?.displayName}
                      disabled
                    />
                
                  </div>
  
                  <div className="form-floating mb-3">
                    <textarea
                      type="text"
                      {...register("review", {
                        required: {
                          value: true,
                          message: "Parts description Required",
                        },
                        minLength: {
                          value: 20,
                          message: "Minimum 20 characters or More",
                        },
                      })}
                      className="form-control"
                      id="floatingInputDescription"
                      rows="15"
                      cols="10"
                    ></textarea>
                    <label htmlFor="floatingInputDescription">
                    review
                    </label>
                    {errors?.review?.type === "required" && (
                      <span className="text-danger">
                        {errors?.review?.message}
                      </span>
                    )}
                    {errors?.review?.type === "minLength" && (
                      <span className="text-danger">
                        {errors?.review?.message}
                      </span>
                    )}
                  </div>
  
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-floating mb-3">
                        <input
                          {...register("rating", {
                            required: {
                              value: true,
                              message: "rating is required",
                            },
                            max:{
                                value:5,
                                message:"maximum value given 5"
                            }
                          })}
                          type="number"
                          className="form-control"
                          id="floatingPrice"
                          placeholder="price"
                        />
                        <label htmlFor="floatingPrice">Rating</label>
                        {errors?.rating?.type === "required" && (
                          <span className="text-danger">
                            {errors?.rating?.message}
                          </span>
                        )}
                        {errors?.rating?.type === "max" && (
                          <span className="text-danger">
                            {errors?.rating?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
  
           
  
                  <div className="d-grid mb-2 col-6 offset-3">
                    <input
                      value="Add  Review"
                      className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                      type="submit"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;