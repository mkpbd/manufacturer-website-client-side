import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FaTrash, FaPenSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
import useItems from "../../../custom_hooks/useItems";

const ManageProduct = () => {
//   const [products, setProducts, updateData, setUpdateData] = useProducts();
  const {isLoading, data: products, error, isFetching} = useItems()
  

  if(isLoading){
      return <Loading></Loading>
  }
  const deleteConfirmAlert = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui bg-success p-5 text-light">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button className="btn btn-md btn-primary" onClick={onClose}>No</button>
            <button
              onClick={() => {
                handleDelete(id);
                onClose();
              }}
              className="btn btn-md btn-danger ms-4"
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  };


  const handleDelete = id =>{

    console.log('delete id = ', id);
    fetch(`https://mysterious-fortress-37861.herokuapp.com/parts/${id}`,{
      method:'DELETE'
    }).then(res => res.json())
    .then(data => {
      console.log(data);

      const result = products.filter(pro => pro?._id !== id);

    //  console.log('delete Id', result);
     // setProducts(result);
    } );
  }



  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
          <th>Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Qty</th>

           
        
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(pro=>(
              <tr key={pro._id}>
              <td style={{width:'250px'}}> <img className="img-thumbnail w-100" src={pro.image} alt={pro.productName}/></td>
              <td width="250">{pro.itemName}</td>
              <td width="500">{pro?.description?.slice(0,120)}...</td>
              <td>{pro.price}</td>
              <td>{pro.quantity}</td>
             
              <td width="270">

                <Link to={`/dashboard/update/${pro._id}`}>
                  <FaPenSquare className="fs-2">
                  </FaPenSquare>
                </Link>


               || <FaTrash  role="button" className="text-danger fs-2"  onClick={()=> deleteConfirmAlert(pro._id)}></FaTrash></td>
            </tr>
            ))
          }
          
        </tbody>
      </Table>
     
     
    </div>
  );
};

export default ManageProduct;
