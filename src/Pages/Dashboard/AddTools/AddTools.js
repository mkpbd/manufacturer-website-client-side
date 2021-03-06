import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddTools = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();
  const imageStorageKey = "57aa6916ec4d0781296d7c959206f0d7";

  const heandleSubmitProducts = (data) => {
    const image = data.images[0];
    console.log("images", image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    // data.preventDefault();
    console.log(data);
    const productName = data.productName;
    const partsDescription = data.partsDescription;
    const productPrice = data.productPrice;
    const productQty = data.productQty;
    const minProductQty = data.minProductQty;
    const imageUrl = data.images;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          let part = {
            itemName: productName,
            description: partsDescription,
            price: productPrice,
            quantity: productQty,
            minimumOrderQty: minProductQty,
            image: img,
            email: user.email,
          };
          // send to your database
          fetch("https://mysterious-fortress-37861.herokuapp.com/parts", {
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
              if (inserted.result.insertedId) {
                toast.success("Parts added successfully");
                reset();
              } else {
                toast.error("Failed to add the Parts");
              }
            });
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
              <Form onSubmit={handleSubmit(heandleSubmitProducts)}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    {...register("productName", {
                      required: {
                        value: true,
                        message: "Parts name is required",
                      },
                      minLength: {
                        value: 3,
                        message: "At list 3 character or More...",
                      },
                    })}
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="Product Name"
                  />
                  <label htmlFor="productName">Parts Name</label>
                  {errors?.productName?.type === "required" && (
                    <span className="text-danger">
                      {errors?.productName?.message}
                    </span>
                  )}
                  {errors?.productName?.type === "minLength" && (
                    <span className="text-danger">
                      {errors?.productName?.message}
                    </span>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    {...register("partsDescription", {
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
                    Parts Description
                  </label>
                  {errors?.partsDescription?.type === "required" && (
                    <span className="text-danger">
                      {errors?.partsDescription?.message}
                    </span>
                  )}
                  {errors?.partsDescription?.type === "minLength" && (
                    <span className="text-danger">
                      {errors?.partsDescription?.message}
                    </span>
                  )}
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-floating mb-3">
                      <input
                        {...register("productPrice", {
                          required: {
                            value: true,
                            message: "Price is required",
                          },
                        })}
                        type="number"
                        className="form-control"
                        id="floatingPrice"
                        placeholder="price"
                      />
                      <label htmlFor="floatingPrice">Price</label>
                      {errors?.productPrice?.type === "required" && (
                        <span className="text-danger">
                          {errors?.productPrice?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        {...register("productQty", {
                          required: {
                            value: true,
                            message: "Parts Quantity required",
                          },
                        })}
                        type="number"
                        className="form-control"
                        id="floatingQty"
                        placeholder="Quantity"
                      />
                      <label htmlFor="floatingQty">Quantity</label>
                      {errors?.productQty?.type === "required" && (
                        <span className="text-danger">
                          {errors?.productQty?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        {...register("minProductQty", {
                          required: {
                            value: true,
                            message: "Minimum Quantity is Required",
                          },
                        })}
                        type="number"
                        className="form-control"
                        id="floatingQty"
                        placeholder="Minimum Qty"
                      />
                      <label htmlFor="floatingQty">Minimum Quantity</label>

                      {errors?.minProductQty?.type === "required" && (
                        <span className="text-danger">
                          {errors?.minProductQty?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    {...register("images")}
                    type="file"
                    className="form-control"
                    id="floatingPasswordConfirm"
                    placeholder="image url"
                  />
                  <label htmlFor="floatingPasswordConfirm">Image</label>
                </div>

                <div className="d-grid mb-2 col-6 offset-3">
                  <input
                    value="Add Product"
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

export default AddTools;
