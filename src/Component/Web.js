import React, { useState } from "react";
import Header from "./Header.js";
import Whois from "./Whois.js";
// import Popup from "./Popup";
import "./Web.css"; // Import your CSS file
import Ssl from "./SSL.js";
import Mail from "./MAILa.js";
import Crawl from "./Crawler.js"

const Web = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ispopupOpen, setIspopupOpen] = useState(false);
  const [ispopupOpenSSL, setIspopupOpenSSL] = useState(false);
  const [ispopupOpenM, setIspopupOpenM] = useState(false);
  const [ispopupOpenC, setIspopupOpenC] = useState(false);

  const openpopup = () => {
    setIspopupOpen(true);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closepopup = () => {
    setIspopupOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopupSSL = () => {
    setIspopupOpenSSL(true);
  };
  const closepopupSSL = () => {
    setIspopupOpenSSL(false);
  };

  const openPopupM = () => {
    setIspopupOpenM(true);
  };
  const closepopupM = () => {
    setIspopupOpenM(false);
  };

  const openPopupC = () => {
    setIspopupOpenC(true);
  };
  const closepopupC = () => {
    setIspopupOpenC(false);
  };

  return (
    <div className="web-buttons">
     
      <button className="web-button" onClick={openpopup}>
        Headers
      </button>
      <Header isOpen={ispopupOpen} onRequestClose={closepopup} />
      <button className="web-button" onClick={openPopupM}>
        Email Finder
      </button>
      <Mail isOpen={ispopupOpenM} onRequestClose={closepopupM} />

      <button className="web-button" onClick={openPopupSSL}>
        SSL Info
      </button>
      <Ssl isOpen={ispopupOpenSSL} onRequestClose={closepopupSSL} />

      <button className="web-button" onClick={openPopupC}>
        Web Crawler
      </button>
      <Crawl isOpen={ispopupOpenC} onRequestClose={closepopupC} />

      
      <button className="web-button" onClick={openPopup}>
        Whois
      </button>
      <Whois isOpen={isPopupOpen} onRequestClose={closePopup} />
    </div>
  );
};

export default Web;

// import React, { useState } from "react";
// import Header from "./Header.js";
// import Whois from "./Whois.js";

// import "./Web.css";
// import Ssl from "./SSL.js";

// const Web = () => {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [activePopup, setActivePopup] = useState(null);

//     const openPopup = (popupName) => {
//         setIsPopupOpen(true);
//         setActivePopup(popupName);
//     };

//     const closePopup = () => {
//         setIsPopupOpen(false);
//         setActivePopup(null);
//     };

//     return (
//         <div className="web-buttons">
//             <button className="web-button" onClick={() => openPopup("Headers")}>Headers</button>
//             {activePopup === "Headers" && (
//                 <Header isOpen={isPopupOpen} onRequestClose={closePopup} />
//             )}
//             <button className="web-button" onClick={() => openPopup("Ssl")}>SSL Information</button>
//             {activePopup === "Ssl" && (
//                 <Ssl isOpen={isPopupOpen} onRequestClose={closePopup} />
//             )}
//             <button className="web-button" onClick={() => openPopup("Whois")}>Whois</button>
//             {activePopup === "Whois" && (
//                 <Whois isOpen={isPopupOpen} onRequestClose={closePopup} />
//             )}
//             {/* Add more buttons and conditionally render pop-ups here */}
//         </div>
//     );
// };

// export default Web;
