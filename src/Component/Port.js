import React, { useState } from "react";
import Modal from "react-modal";
import "./Popup.css"; // Import your CSS file for styling
import Bvmport from "./Bvm";
import Googleport from "./Google"
import Notavailable from "./showNotavailable";

Modal.setAppElement("#root");

const Ports = ({ isOpen, onRequestClose }) => {
  const [openPorts, setOpenPorts] = useState([]);
  const [url, setUrl] = useState([]);

  const [outputMessage, setOutputMessage] = useState(""); // State for the output message
  const [data, setData] = useState(null);
  const [fileContent, setFileContent] = useState(""); // State to store the file content
  const [showBvmport, setShowBvmport] = useState(false);
const [showGoogleport, setShowGoogleport] = useState(false);
const [showNotavailable, setShowNotavailable] = useState(false);



  const customStyles = {
    content: {
      width: "1000px", // Set the width of the popup
      margin: "auto", // Center the popup horizontally
      borderRadius: "10px", // Add rounded corners
      padding: "20px", // Add some padding
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Add a shadow
      border: "none", // Remove the border
      background: "#fff" // White background
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)" // Add a semi-transparent overlay
    }
  };

  const handleUrlChange = e => {
    setUrl(e.target.value);
  };

  const handleSubmit = async () => {
    if (url === "https://www.bvmengineering.ac.in/") {
    setShowBvmport(true);
    setShowGoogleport(false);
    setShowNotavailable(false);
  } else if (url === "https://www.google.com/") {
    setShowBvmport(false);
    setShowGoogleport(true);
    setShowNotavailable(false);
  } else {
    setShowBvmport(false);
    setShowGoogleport(false);
    setShowNotavailable(true);
  }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Modal"
      style={customStyles}
    >
      <div className="popup-content">
        <h2>Enter domain or IP address</h2>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={handleUrlChange}
          className="url-input" // Apply CSS class to the input
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        <button onClick={onRequestClose} className="close-button">
          Close
        </button>
        {showBvmport && <Bvmport />}
      {showGoogleport && <Googleport />}
      {showNotavailable && <Notavailable />}
      </div>
    </Modal>
  );
};

export default Ports;
