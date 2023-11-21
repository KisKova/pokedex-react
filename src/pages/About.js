import React from 'react'
import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <h1>About Page Pokemon</h1>
            <div className="about-container">
                <h2>This is a WEB2 Assignment.</h2>
                <h2>Creator:</h2>
                <p>Ákos Marcell Kovács</p>
                <h2>VIA Mail:</h2>
                <p>309773@viauc.dk</p>
            </div>
        </>
    );
}

export default About