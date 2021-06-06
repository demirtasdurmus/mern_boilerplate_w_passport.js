import React, { useEffect, useState } from 'react';
import axios from "axios";
import ListSamples from "../components/listSamples";
import AddSamples from "../components/addSample";
import Navbar from "../components/navbar";


export default function Sample() {
  const [inputs, setInputs] = useState({
    name: "",
    amount: "",
    isAvailable: false
  });
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleListSamples = () => {
    axios.get("/api/list-samples")
      .then((res) => {
        setData(res.data)
      })
  };

  const handleAddSample = (name, amount, isAvailable) => {
    axios.post("/api/add-sample",
      {
        name: name,
        amount: amount,
        is_available: isAvailable
      })
      .then((res) => {
        console.log(res);
        handleListSamples();
      })
  };

  const handleEditSample = (id) => {
    axios.delete(`/api/delete-sample/${id}`)
      .then((res) => {
        console.log(res);
        handleListSamples();
      })
  };

  const handleDeleteSample = (id) => {
    axios.delete(`/api/delete-sample/${id}`)
      .then((res) => {
        console.log(res);
        handleListSamples();
      })
  };

  useEffect(() => {
    handleListSamples();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <h3 className="text-center mt-5">A page displaying full CRUD opertaions</h3>
        <div className="row">
          <div className="col-4">
            <AddSamples
              handleInputChange={handleInputChange}
              handleAddSample={handleAddSample}
              name={inputs.name}
              amount={inputs.amount}
              isAvailable={inputs.isAvailable}
            />
          </div>

          <div className="col-8">
            <ListSamples
              data={data}
              handleListSamples={handleListSamples}
              handleDeleteSample={handleDeleteSample}
              handleEditSample={handleEditSample}
            />
          </div>
        </div>
      </div>
    </div>
  );
};