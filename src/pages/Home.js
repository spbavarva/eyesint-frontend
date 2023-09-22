import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="home-title">Eye-Sint Tool</h1>

            <div className="button-container">
                <Link to="/webp">
                    <button className="home-button"> Web Scraping</button>
                </Link>
                <Link to="/webp">
                    <button className="home-button">Foot printing of Person</button>
                </Link>
                <Link to="/webp">
                    <button className="home-button">Port Scanning</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
