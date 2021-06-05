import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";


export default function ListSamples({ data, handleDeleteSample }) {


  useEffect(() => {
  }, [])
  return (
    <div className="container pt-5">
      <h3 className="text-center mb-4">You can list&edit&delete samples here!</h3>
      <div>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          {data.map((i) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{i._id}</th>
                  <td>{i.name}</td>
                  <td>{i.amount}</td>
                  <td>{i.is_available === true ? "Available" : "Not Available"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger mx-1"
                      onClick={() => handleDeleteSample(i._id)}
                    >
                      Delete
                    </button>
                    <NavLink to={`/edit-sample/${i._id}`}>
                      <button
                        className="btn btn-sm btn-info mx-1"
                      >
                        Edit
                      </button>
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </div>
  );
};