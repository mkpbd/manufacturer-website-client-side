import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import UserRoles from "./UserRoles";

const User = () => {
    const { data: users, isLoading, refetch } = useQuery('users', 
    () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>user Email</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {
                           users.map(user=><UserRoles
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRoles>)
                       }
       
       
      </tbody>
    </Table>
  )
};

export default User;
