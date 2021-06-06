import React from 'react';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                <div className="navbar-collapse d-flex justify-content-center" style={{ fontSize: "2rem" }}>
                    <ul className="navbar-nav">
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/sample">Sample CRUD<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/register">Sample AUTH</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};