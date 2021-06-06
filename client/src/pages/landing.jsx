import React from 'react';
import ReactLogo from '../assets/logos/reactjs-logo.svg';
import NodeLogo from '../assets/logos/nodejs-logo.svg';
import MongoLogo from '../assets/logos/mongodb-logo.svg';
import '../assets/styles/Landing.css';
import Navbar from "../components/navbar";


export default function Landing() {
    return (
        <div>
            <Navbar />
            <div className="Landing">
                <h2>A comprehensive, ready-to-use MongoDb-Express-React-Node Boilerplate</h2>
                <header className="Landing-header">
                    <img src={ReactLogo} className="React-logo" alt="logo" />
                    <img src={NodeLogo} className="Node-logo" alt="logo" />
                    <img src={MongoLogo} className="Mongo-logo" alt="logo" />
                </header>
                <div className="Landing-info">
                    <p>Some Info Text</p>
                </div>
            </div>
        </div>

    );
};
