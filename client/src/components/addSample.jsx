import React, { useEffect } from 'react';


export default function AddSample({ handleInputChange, name, amount, isAvailable, handleAddSample }) {

    useEffect(() => {
    }, [])
    return (
        <div className="container pt-5">
            <h3 className="text-center">You can <span className="text-danger">Create</span> samples here!</h3>
            <div className="mb-2">
                <label class="from-label" for="name">Name</label>
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    value={name}
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
                    value={amount}
                    name="amount"
                    id="amount"
                    type="number"
                    placeholder="amount"
                />
            </div>
            <div className="mb-2">
                <label className="from-label" for="isAvailable">Status</label>
                <select className="custom-select" id="isAvailable" onChange={handleInputChange} name="isAvailable" value={isAvailable}>
                    <option value={true}>Available</option>
                    <option value={false}>Not Available</option>
                </select>
            </div>
            <button
                className="btn btn-success"
                type="submit"
                onClick={() => handleAddSample(name, amount, isAvailable)}
            >
                Save
            </button>
        </div>
    );
};