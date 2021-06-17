import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";


export default function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleLoginUser = (email, password) => {
        axios.post("/api/users/login",
            {
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res)
                if (res.data === true) {
                    // const history = createBrowserHistory();
                    // history.push('/sample');
                    // window.location.reload();
                    window.location.assign('/secret')
                }
            })
    };

    useEffect(() => {
    }, [])
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center mt-5">
                <Link to="/register"><h2 className="text-center mx-2"><span className="text-primary">Register</span></h2></Link>
                <Link to="/login"><h2 className="text-center mx-2"><span className="text-primary">Login</span></h2></Link>
            </div>

            <div className="container pt-4 d-flex justify-content-center">
                <div className="col-4">
                    <div className="mb-2">
                        <label class="from-label" for="email">Email</label>
                        <input
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.email}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-2">
                        <label class="from-label" for="password">Password</label>
                        <input
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.password}
                            name="password"
                            id="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={() => handleLoginUser(inputs.email, inputs.password)}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};