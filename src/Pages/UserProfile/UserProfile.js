import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "57aa6916ec4d0781296d7c959206f0d7";

  const heandleSubmitProducts = (data) => {
    // const image = data.images[0];
    // console.log("images", image);
    // const formData = new FormData();
    // formData.append("image", image);
    //const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    // data.preventDefault();
    console.log(data);
    

    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.success) {
    //       const img = result.data.url;
          let part = {
            linkedIn: data.linkedIn,
            phoneNumber: data.phoneNumber,
            education: data.education,
            location: data.city,
            userName: user.displayName,
            email: user.email,
          };
          // send to your database
          fetch(`http://localhost:5000/myprofile/${user.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("insertd", inserted);
              if (inserted.result.insertedId) {
                toast.success("update success fully");
                reset();
              } else {
                toast.error("Failed  ");
              }
            });
      //   }
      // });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                User profiles
              </h5>
              <Form onSubmit={handleSubmit(heandleSubmitProducts)}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    {...register("userName", {})}
                    defaultValue={user.displayName}
                    className="form-control"
                    id="floatingInputUsername"
                    disabled
                  />
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    {...register("userEmail", {})}
                    defaultValue={user.email}
                    className="form-control"
                    id="floatingInputUsername"
                    disabled
                  />
                  <label htmlFor="productName">user Email</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    {...register("education", {
                      required: {
                        value: true,
                        message: "Address Required",
                      },
                    })}
                    className="form-control"
                    id="floatingInputDescription"
                    rows="20"
                    cols="20"
                  ></textarea>
                  <label htmlFor="floatingInputDescription">education</label>
                  {errors?.education?.type === "required" && (
                    <span className="text-danger">
                      {errors?.education?.message}
                    </span>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    {...register("location", {})}
                    className="form-control"
                    id="floatingInputLocation"
                  />
                  <label htmlFor="location">Location</label>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("phoneNumber", {
                          required: {
                            value: true,
                            message: "Phone is required",
                          },
                        })}
                        type="text"
                        className="form-control"
                        id="floatingPrice"
                      />
                      <label htmlFor="floatingPrice">Phone Number</label>
                      {errors?.phoneNumber?.type === "required" && (
                        <span className="text-danger">
                          {errors?.phoneNumber?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        {...register("linkedIn", {
                          required: {
                            value: true,
                            message: "Linked In required",
                          },
                        })}
                        type="text"
                        className="form-control"
                        id="floatingQty"
                        placeholder="LinkedIn"
                      />
                      <label htmlFor="floatingQty">LinkedIn</label>
                      {errors?.linkedIn?.type === "required" && (
                        <span className="text-danger">
                          {errors?.linkedIn?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* <div className="form-floating mb-3">
                  <input
                    {...register("images")}
                    type="file"
                    className="form-control"
                    id="floatingPasswordConfirm"
                    placeholder="image url"
                  />
                  <label htmlFor="floatingPasswordConfirm">Image</label>
                </div> */}

                <div className="d-grid mb-2 col-6 offset-3 my-3">
                  <input
                    value="Save data"
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

export default UserProfile;
