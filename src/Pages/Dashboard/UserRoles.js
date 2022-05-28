import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const UserRoles = ({ user, refetch }) => {
  const { email, role, _id} = user;
  const makeAdmin = () => {
    fetch(`https://mysterious-fortress-37861.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const removeRoleForAdmin = () => {
    fetch(`https://mysterious-fortress-37861.herokuapp.com/user/admin/${_id}`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            toast.error("Failed to Make an admin");
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            toast.success(`Successfully made an admin`);
          }
        });

  }

  const removeUserRole = ()=>{

    confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to delete this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => removeRoleForAdmin()
          },
          {
            label: 'No',
           // onClick: () => alert('Click No')
          }
        ]
      });
  }

  return (
    <tr>
      <th> {_id}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-secondary btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={()=>removeUserRole(_id)}>Remove User</button>
      </td>
    </tr>
  );
};

export default UserRoles;
