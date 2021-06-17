import React from 'react';
import '../assets/styles/Landing.css';
import Navbar from "../components/navbar";


export default function SecretPage() {
    return (
        <div>
            <Navbar />
            <div className="Landing">
                <header className="Landing-header">
                    <h2>This is my Secret Page</h2>
                </header>
                <div className="Landing-info">
                    <p>You can't see this page unless you are logged in!</p>
                </div>
            </div>
        </div>

    );
};
