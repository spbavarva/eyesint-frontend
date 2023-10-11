import React, { useState } from "react";
import Modal from "react-modal";
import "./Popup.css"; // Import your CSS file for styling

Modal.setAppElement("#root");

const Phone = ({ isOpen, onRequestClose }) => {
    const [url, setUrl] = useState(""); // State to store the entered URL
    const [outputMessage, setOutputMessage] = useState(""); // State for the output message
    const [data,setdata]=useState(null)
    const customStyles = {
        content: {
            width: "1000px", // Set the width of the popup
            margin: "auto", // Center the popup horizontally
            borderRadius: "10px", // Add rounded corners
            padding: "20px", // Add some padding
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Add a shadow
            border: "none", // Remove the border
            background: "#fff", // White background
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent overlay
        },
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value); 
    };

    const handleSubmit = async (e) => {
        
        console.log("Submitted URL:", url);

        
        if (url) {
            setOutputMessage(`You submitted number: ${url}`);
           
            const response = await fetch("http://localhost:5000/foot/nameinfo", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ url: url })
            })
            const data = await response.json()
            setdata(data.data)
            console.log(data)
        } else {
            setOutputMessage("Please enter number.");
        }

        // Close the popup after submission
        // onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Popup Modal"
            style={customStyles}
        >
            <div className="popup-content">
                <h2>Enter username to find</h2>
                <input
                    type="text"
                    placeholder="919999999999"
                    value={url}
                    onChange={handleUrlChange}
                    className="url-input" // Apply CSS class to the input
                />
                <button onClick={handleSubmit} className="submit-button">Submit</button>
                <button onClick={onRequestClose} className="close-button">Close</button>

                {/* Display the output message */}
                {outputMessage && <p className="output-message">{outputMessage}</p>}
                {data && <div> 
                    {Object.keys(data).map((e)=>{
                        return <div><span>{e}:{data[e]}</span><br/></div>
                    })}
                </div>}
            </div>
        </Modal>
    );
};

export default Phone;
