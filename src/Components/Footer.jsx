import React from 'react'
// import { footer } from "./styleComponents/footer";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <img src="public\images\DH.png" alt="" />
          <div>
            <img src="public\images\ico-facebook.png" alt="" />
            <img src="public\images\ico-instagram.png" alt="" />
            <img src="public\images\ico-whatsapp.png" alt="" />
            <img src="public\images\ico-tiktok.png" alt="" />
          </div>

        <div style={{ background: "red", with: "100%" }}>
          <p
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            BACK TO TOP
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
