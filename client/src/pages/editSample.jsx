import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { createBrowserHistory } from 'history';
import axios from "axios";


export default function EditSample() {
    const { id } = useParams();
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        amount: "",
        isAvailable: false
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleGetSample = () => {
        console.log(id);
        axios.get(`http://localhost:8000/api/get-sample/${id}`)
            .then((res) => {
                setInputs(
                    {
                        id: res.data._id,
                        name: res.data.name,
                        amount: res.data.amount,
                        isAvailable: res.data.is_available
                    }
                )
            })
    }

    const handleSaveSample = (id, name, amount, isAvailable) => {
        console.log(id, name, amount, isAvailable);
        axios.put(`http://localhost:8000/api/save-sample/${id}`,
            {
                name: name,
                amount: amount,
                is_available: isAvailable
            })
            .then((res) => {
                if (res.data === true) {
                    const history = createBrowserHistory();
                    history.push('/sample');
                    window.location.reload();
                }
            })
    }

    useEffect(() => {
        handleGetSample();
    }, [])
    return (
        <div className="container pt-5">
            <h3 className="text-center">You can add samples here!</h3>
            <div className="mb-2">
                <label class="from-label" for="name">Name</label>
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.name}
                    name="name"
                    id="name"
                    type="text"
                    placeholder="name"
                />
            </div>
            <div className="mb-2">
                <label class="from-label" for="amount">Amount</label>
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.amount}
                    name="amount"
                    id="amount"
                    type="number"
                    placeholder="amount"
                />
            </div>
            <div className="mb-2">
                <label className="from-label" for="isAvailable">Status</label>
                <select className="custom-select" id="isAvailable" onChange={handleInputChange} name="isAvailable" value={inputs.isAvailable}>
                    <option value={true}>Available</option>
                    <option value={false}>Not Available</option>
                </select>
            </div>
            <button
                className="btn btn-success"
                type="submit"
                onClick={() => handleSaveSample(inputs.id, inputs.name, inputs.amount, inputs.isAvailable)}
            >
                Save
            </button>
        </div>
    );
};