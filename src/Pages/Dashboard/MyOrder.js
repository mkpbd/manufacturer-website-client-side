import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";
const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  // const {isLoading, erros, data, refetch} = useQuery(['myorder',user],
  //    ()=>{
  //     axios.get(`https://mysterious-fortress-37861.herokuapp.com/order?clientEmail=${user.email}`, {
      
  //       headers:{
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //       },
  //     }).then(res => {
  //       console.log("console data", res.data);

  //       return  res.data;
  //     }  )
  //   }
  // )

  const [data, setData] = useState([]);

  useEffect(
      ()=>{
    
        axios.get(`https://mysterious-fortress-37861.herokuapp.com/order?clientEmail=${user.email}`, {
        
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
        }).then(res => {
          console.log("console data", res.data);
  
           setData( res.data);
        }  )
       
    
  }, [user])

  if( loading ){
    return <Loading></Loading>
  }

  console.log("data ", data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product name</th>
          <th>price </th>
          <th>Quantity</th>
          <th>Total price</th>
          <th>Payment</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr>
          <td>{item.itemName}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.totalPrice}</td>
          <td><button className="btn btn-sm btn-success">Payment</button></td>
          <td><button className="btn btn-sm btn-danger">Cancel</button></td>
        </tr>

        ))}
        
       
      </tbody>
    </Table>
  );
};

export default MyOrder;
