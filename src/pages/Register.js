import React, { useState, } from "react";
import { Link } from "react-router-dom";

// import RegistrationService from "./RegistrationService";
import axios from 'axios';
import "./Register.css"; 

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    // const history = useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault();


        try {
            const response = await axios.post("http://localhost:5000/register", formData);
            console.log("Registration successful:", response.data.message);
            // history.push("/login");
            window.alert("User Registerd successfully...");
            window.location.href = "/login"
            // You can redirect to the login page or show a success message here
        } catch (error) {
            console.error("Registration error:", error);
            // Handle registration errors (e.g., display an error message)
        }
    };

    return (
        <div className="register-page">
            <h2 className="register-title">Register Page</h2> 
            <form onSubmit={handleSubmit} className="rform">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">Register</button>
            </form>
            <p className="already-have-account">
                Already have an account? <Link to="/login">Login-Page</Link>
            </p>
        </div>
    );
};

export default Register;
