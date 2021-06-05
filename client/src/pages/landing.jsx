import React from 'react';
import { Link } from "react-router-dom";
import ReactLogo from '../reactjs-logo.svg';
import NodeLogo from '../nodejs-logo.svg';
import MongoLogo from '../mongodb-logo.svg';
import '../assets/Landing.css';

export default function Landing() {
    return (
        <div className="Landing">
            <h2>A comprehensive, ready-to-use MongoDb-Express-React-Node Boilerplate</h2>
            <header className="Landing-header">
                <img src={ReactLogo} className="React-logo" alt="logo" />
                <img src={NodeLogo} className="Node-logo" alt="logo" />
                <img src={MongoLogo} className="Mongo-logo" alt="logo" />
            </header>
            <div className="Landing-navigation">
                <Link to="/sample"><h4>Sample</h4><br/><p>A page displaying full CRUD opertaions</p></Link>
                <Link to="/sample"><h4>Sample</h4></Link>
                <Link to="/sample"><h4>Sample</h4></Link>
            </div>
        </div>
    );
};
