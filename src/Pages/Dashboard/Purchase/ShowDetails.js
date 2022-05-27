import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';
import useItems from '../../../custom_hooks/useItems';

const ShowDetails = () => {
    const { id } = useParams();
    console.log("params", useParams())
    const {isLoading, error, data, isFetching } = useItems();
   
  
    if(error){
        console.log(error);
    }
  
    if(isLoading){

        return <Loading></Loading>
    }

    // console.log(id, 'Id')
    // console.log(data, " data ")
    
    const item = data?.filter(it => it._id == id);

    console.log(item, "items");
    
    const handleUpdateItem = (ev) => {
        ev.preventDefault();
      
  
        const qty = ev.target.productQty.value;
    
    
        let result = {
         
          qty
          
        };
  
        if (!qty || qty <= 0) {
          toast(" Product Qty is required");
          return;
        }
     
    
        // fetch(`https://warm-mesa-46770.herokuapp.com/restock/${id}`, {
        //   method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(result),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {console.log(data)
        //     toast("qty update ");
        //   }
        //   )
        //   .catch((err) => console.log(err));
    
        // console.log("product Update", result);
      };
    
  


    // const {isLoading, error, data, isFetching } = useQuery('purchase-id',()=>{
      
    //     axios.get(
    //       "data/product.json"
    //     ).then((res) => {
    //        return  res.data
        
     
    // })


    return (
      <Container>
              <Card className='border-0'>
                {item.map(it => (
                   <Row className='row row-cols-sm-1 row-cols-md-2' key={it._id}>
                   <Col md="5">
                       <img  src={it.image} alt="no image" className='w-100 img-thumbnail border-0 transparent'/>
                   </Col>
                   <Col md="7">
                       <h4>Parts : <span className='ms-2'>{it.itemName}</span>  </h4>
                       <p>Pice :<span className='ms-2'>{it.price}</span></p>
                       <p>inStock : <span className='ms-2'>{it.quantity}</span></p>
                       <p>Minimum Qty : <span className='ms-2'>{it.minimumOrderQty}</span></p>
                       <hr className='bg-success' style={{maxWidth:"100vw", height:'2px'}}></hr>
                       <p>Description : <span className='ms-2'> {it.description}</span> </p>
                       <p className='d-flex my-3 align-items-center'>
                         <span>  Qty</span> <input className='form-control ms-4 form-control-sm' name='productQty' style={{width:'100px'}} type="number" defaultValue="10" />
                         <button className='btn btn-success ms-3'>Order Now</button>
                       </p>
                   </Col>
               </Row>
                ))}
               
              </Card>
         
      </Container>
    );
};

export default ShowDetails;