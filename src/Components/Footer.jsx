import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
  FaPhone,
  FaInstagram,
  FaVoicemail,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <h4 className="h_footer">
          Contact Info <hr className="hr_footer" />
        </h4>
        <ul className="footer-unordered-list-left">
          <li>
            <FaPhone />
            +251....
          </li>
          <li>
            <FaVoicemail />
            Info@garumantrading.com
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <h4 className="h_footer">
          Social Media <hr className="hr_footer" />
        </h4>
        <ul className="footer-unordered-list-right">
          <li style={{ marginLeft: "10px" }}>
            <FaFacebook color="white" />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <FaLinkedin />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <FaXTwitter />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <FaWhatsapp />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <FaTelegram />
          </li>
          <li style={{ marginLeft: "10px" }}>
            {" "}
            <FaInstagram />
          </li>
        </ul>
        {/* <FaTiktok />
        <FaBars /> */}
      </div>
    </div>
  );
}
