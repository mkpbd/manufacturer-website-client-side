import axios from 'axios';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';
import useItems from '../../../custom_hooks/useItems';

const Purchase = () => {
    const { id } = useParams();

    const {isLoading, error, data, isFetching } = useItems();
  
  
    if(isLoading){

        return <Loading></Loading>
    }
    const singleData = data?.map(d => d._id === id);

    
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
                <Row className='row row-cols-sm-1 row-cols-md-2'>
                    <Col md="5">
                        <img src="images/banner1.jpg" alt="" className='w-100 img-thumbnail border-0 transparent'/>
                    </Col>
                    <Col md="7">
                        <h4>Mountain fox - Vector graphics  </h4>
                        <p>$60.00</p>
                        <p>inStock</p>
                        <p>Minimum Qty:</p>
                        <hr style={{width:"100vh", height:'2px', background:'red'}}></hr>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam incidunt at et eaque quod similique veritatis nulla atque optio voluptatibus.</p>
                        
                        <p className='d-flex my-3 align-items-center'>
                          <span>  Qty</span> <input className='form-control ms-4 form-control-sm' name='productQty' style={{width:'100px'}} type="number" defaultValue="10" />

                          <button className='btn btn-primary ms-3'>Buy</button>
                        </p>
                    </Col>
                </Row>
              </Card>
         
      </Container>
    );
};

export default Purchase;