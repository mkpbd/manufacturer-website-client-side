import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";



const AddTools = () => {
  const [user] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const heandleSubmitProducts = (data) => {
   // data.preventDefault();
    console.log(data)
    const productName = data.productName;
    const partsDescription = data.partsDescription;
    const productPrice = data.productPrice;
    const productQty = data.productQty;
    const minProductQty = data.minProductQty;
    const imageUrl = data.imageUrl;

    let result = {
      productName,
      partsDescription,
      productPrice,
      productQty,
      minProductQty,
      imageUrl,
      email:user.email
    };

    

  

      fetch('https://warm-mesa-46770.herokuapp.com/add-products',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(result)
      }).then(res => res.json())
      .then(data =>{
        console.log(data);
        toast("item success fully added");
      } )
      .catch(err => console.log(err))

 

    console.log("product inserted", result);
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
                    {...register("productName", {required:{
                        value:true,
                        message:"Parts name is required"
                    },
                    minLength:{
                        value:3,
                        message:"At list 3 character or More..."
                    }
                })}
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="Product Name"
                  />
                  <label htmlFor="productName">Parts Name</label>
                  {errors?.productName?.type === "required" && <span className="text-danger">{errors?.productName?.message}</span> }
                  {errors?.productName?.type === "minLength" && <span className="text-danger">{errors?.productName?.message}</span> }
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    {...register('partsDescription',{
                        required:{
                            value:true,
                            message: "Parts description Required"
                        },
                        minLength:{
                            value:20,
                            message:"Minimum 20 characters or More"
                        }
                    })}
                    className="form-control"
                    id="floatingInputDescription"
                    rows='15' cols='10'
                  ></textarea>
                  <label htmlFor="floatingInputDescription">
                    Parts Description
                  </label>
                  {errors?.partsDescription?.type === "required" && <span className="text-danger">{errors?.partsDescription?.message}</span> }
                  {errors?.partsDescription?.type === "minLength" && <span className="text-danger">{errors?.partsDescription?.message}</span> }
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-floating mb-3">
                      <input
                        {...register('productPrice', {
                            required:{
                                value:true,
                                message:"Price is required"
                            }
                        })}
                        type="number"
                        className="form-control"
                        id="floatingPrice"
                        placeholder="price"
                      />
                      <label htmlFor="floatingPrice">Price</label>
                      {errors?.productPrice?.type === "required" && <span className="text-danger">{errors?.productPrice?.message}</span> }
                    
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        {...register('productQty',{
                            required:{
                                value:true,
                            message:'Parts Quantity required'
                            }
                        })}
                        type="number"
                        className="form-control"
                        id="floatingQty"
                        placeholder="Quantity"
                      />
                      <label htmlFor="floatingQty">Quantity</label>
                      {errors?.productQty?.type === "required" && <span className="text-danger">{errors?.productQty?.message}</span> }
                    
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        {
                            ...register("minProductQty",{
                                required:{
                                    value:true,
                                    message:'Minimum Quantity is Required'
                                }
                            })
                        }
                        type="number"
                        className="form-control"
                        id="floatingQty"
                        placeholder="Minimum Qty"
                      />
                      <label htmlFor="floatingQty">Minimum Quantity</label>

                      {errors?.minProductQty?.type === "required" && <span className="text-danger">{errors?.minProductQty?.message}</span> }
                   
                    </div>
                  </div>
                  
                </div>

                <div className="form-floating mb-3">
                  <input
                   {...register('imageUrl')}
                    type="text"
                    className="form-control"
                    id="floatingPasswordConfirm"
                    placeholder="image url"
                  />
                  <label htmlFor="floatingPasswordConfirm">ImageUrl</label>
                </div>
           

                <div className="d-grid mb-2 col-6 offset-3">
                  <input value="Add Product"
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
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
