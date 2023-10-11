import React, { useState } from "react";
// import Popup from "./Popup";
import "./Web.css"; // Import your CSS file
import Phone from "./Phonenum";
import Name from "./Name";
import Pdf from "./Pdf";
import Domain from "./Domain";


const Foot = () => {
  const [ispopupOpenC, setIspopupOpenC] = useState(false);
  const [ispopupOpenP, setIspopupOpenP] = useState(false);
  const [ispopupOpenPd, setIspopupOpenPd] = useState(false);
  const [ispopupOpenD, setIspopupOpenD] = useState(false);

  const openPopupD = () => {
    setIspopupOpenD(true);
  };
  const closepopupD = () => {
    setIspopupOpenD(false);
  };

  const openPopupC = () => {
    setIspopupOpenC(true);
  };
  const closepopupC = () => {
    setIspopupOpenC(false);
  };

  const openPopupP = () => {
    setIspopupOpenP(true);
  };
  const closepopupP = () => {
    setIspopupOpenP(false);
  };

  const openPopupPd = () => {
    setIspopupOpenPd(true);
  };
  const closepopupPd = () => {
    setIspopupOpenPd(false);
  };

  return (
    <div className="web-buttons">
      <button className="web-button" onClick={openPopupC}>
        Username recon
      </button>
      <Name isOpen={ispopupOpenC} onRequestClose={closepopupC} />

      <button className="web-button" onClick={openPopupPd}>
        PDF Metadata
      </button>
      <Pdf isOpen={ispopupOpenPd} onRequestClose={closepopupPd} />

      <button className="web-button" onClick={openPopupD}>
        Domain Search
      </button>
      <Domain isOpen={ispopupOpenD} onRequestClose={closepopupD} />

      <button className="web-button" onClick={openPopupP}>
        Phone numbner
      </button>
      <Phone isOpen={ispopupOpenP} onRequestClose={closepopupP} />
    </div>
  );
};

export default Foot;