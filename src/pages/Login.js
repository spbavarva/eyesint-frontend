import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/login", formData);
            if (response.status === 200) {
                console.log("Login successful");
                window.alert("User Login successfully...");
                window.location.href = "/"
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="login-page">
            <h2 className="login-title">Login Page</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="login-input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="dont-have-account">
                Don't have an account? <Link to="/register" className="register-link">Register-Page</Link>
            </p>
        </div>
    );
};

export default Login;
