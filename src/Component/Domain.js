import React, { useState } from "react";
import Modal from "react-modal";
import "./Popup.css"; // Import your CSS file for styling
import "./Mycomponent.css"; // Import your CSS file for styling

Modal.setAppElement("#root");

const Domain = ({ isOpen, onRequestClose }) => {
  const [url, setUrl] = useState(""); // State to store the entered URL
  const [outputMessage, setOutputMessage] = useState(""); // State for the output message
  const [data, setdata] = useState(null);
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

  const handleSubmit = async e => {
    console.log("Submitted URL:", url);

    if (url) {
      setOutputMessage(`Your submitted domain: ${url}`);

      const response = await fetch("http://localhost:5000/foot/domainS", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ url: url })
      });
      const data = await response.json();
      setdata(data.data);
      console.log(data);
      //   console.log(data.data.organization);
      //   console.log("Output")
    } else {
      setOutputMessage("Please enter domain.");
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
        <h2>Enter Domain</h2>
        <input
          type="text"
          placeholder="bvmengineering.ac.in or https://bvmengineering.ac/in/"
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

        {/* Display the output message */}
        {outputMessage &&
          <p className="output-message">
            {outputMessage}
          </p>}

        {data &&
           <div className="container1">
           <h1>Organization Name: {data.data.organization}</h1>
           <ul className="email-list">
             {data.data.emails.map((email, index) => (
               <li key={index} className="email-item">
                 <div className="email-details">
                   <h2>Email: {email.value}</h2>
                   <div className="info">
                     <p>Confidence: {email.confidence}</p>
                     <p>Department: {email.department || "N/A"}</p>
                     <p>Position: {email.position || "N/A"}</p>
                     <p>Verification Date: {email.verification.date || "N/A"}</p>
                     <p>Verification Status: {email.verification.status || "N/A"}</p>
                   </div>
                 </div>
                 <div className="sources">
                   <h3>Sources:</h3>
                   <ul className="source-list">
                     {email.sources.map((source, sourceIndex) => (
                       <li key={sourceIndex} className="source-item">
                         <p>Domain: {source.domain}</p>
                         <p>Extracted On: {source.extracted_on}</p>
                         <p>Last Seen On: {source.last_seen_on}</p>
                       </li>
                     ))}
                   </ul>
                 </div>
               </li>
             ))}
           </ul>
         </div>}
      </div>
    </Modal>
  );
};

export default Domain;
