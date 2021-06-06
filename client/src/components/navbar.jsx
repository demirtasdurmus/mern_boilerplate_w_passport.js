import React from 'react';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav" style={{ fontSize: "2rem" }}>
                    <ul className="navbar-nav">
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/sample">Sample CRUD<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="#">Sample AUTH</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};