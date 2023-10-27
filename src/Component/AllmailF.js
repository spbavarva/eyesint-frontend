import React, { useState } from "react";
import Modal from "react-modal";
// import "./Popup.css"; // Import your CSS file for styling

Modal.setAppElement("#root");

const Maila = ({ isOpen, onRequestClose }) => {
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

  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Modal"
      style={customStyles}
    >
      <div className="popup-content">
        <h2>All mails from BVM :</h2>


        <p>
          0:info@gtu.ac.in
          <br />
          1:principal@bvmengineering.ac.in
          <br />
          2:researchcell@bvmengineering.ac.in
          <br />
          3:geeksforgeeksbvm@bvmengineering.ac.in
          <br />
          4:bvmcsi@bvmengineering.ac.in
          <br />
          5:trs@bvmengineering.ac.in
          <br />
          6:contact@almashines.com
          <br />
          7:placement@bvmengineering.ac.in
          <br />
          8:registrar@gtu.ac.in
          <br />
          9:bvmaa@bvmengineering.ac.in
          <br />
          10:teamnssbvm@gmail.com
          <br />
          11:jeetpandya11124@gmail.com
          <br />
          12:trs@bvmengineering.ac.in
          <br />
          13:ieeebvm16@gmail.com
          <br />
          14:test@almashines.com
          <br />
          15:gdsc@bvmengineering.ac.in
          <br />
          16:researchcell@bvmengineering.ac.in
          <br />
          17:registrar@gtu.ac.in
          <br />
          18:bvmcsi@bvmengineering.ac.in
          <br />
          19:contact@almashines.com
          <br />
          20:test@almashines.com
          <br />
          21:ieeebvm16@gmail.com
          <br />
          22:anbhavsar@bvmengineering.ac.in
          <br />
          23:teamnssbvm@gmail.com
          <br />
          24:placement@bvmengineering.ac.in
          <br />
          25:jeetpandya11124@gmail.com
          <br />
          26:bvmaa@bvmengineering.ac.in
          <br />
          27:principal@bvmengineering.ac.in
          <br />
          28:gdsc@bvmengineering.ac.in
          <br />
          29:info@gtu.ac.in
        </p>
        <button onClick={onRequestClose} className="close-button">
          Close
        </button>

       
        
      </div>
    </Modal>
  );
};

export default Maila;
