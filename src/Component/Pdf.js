import React, { useState } from "react";
import Modal from "react-modal";
import "./Popup.css"; // Import your CSS file for styling

Modal.setAppElement("#root");

const Pdf = ({ isOpen, onRequestClose }) => {
    const [file, setFile] = useState(null); // State to store the selected file
    const [outputMessage, setOutputMessage] = useState(""); // State for the output message
    const [data, setData] = useState(null);

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

    const handleFileChange = (e) => {
        // Set the selected file in state
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (file) {
            setOutputMessage(`You selected file: ${file.name}`);

            // Create a FormData object to send the file to the server
            const formData = new FormData();
            formData.append("file", file);

            // Make a POST request to your server with the file data
            const response = await fetch("http://localhost:5000/foot/pdfinfo", {
                method: "post",
                body: formData,
            });

            const data = await response.json();
            setData(data.data);
        } else {
            setOutputMessage("Please select a PDF file.");
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
                <h2>Select PDF to get Metadata info</h2>
                <input
                    type="file"
                    accept=".pdf" // Specify the accepted file types
                    onChange={handleFileChange}
                    className="file-input" // Apply CSS class to the input
                />
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
                <button onClick={onRequestClose} className="close-button">
                    Close
                </button>

                {/* Display the output message */}
                {outputMessage && <p className="output-message">{outputMessage}</p>}
                {data && (
                    <div>
                        {Object.keys(data).map((e) => {
                            return (
                                <div key={e}>
                                    <span>{e}: {data[e]}</span><br />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default Pdf;
