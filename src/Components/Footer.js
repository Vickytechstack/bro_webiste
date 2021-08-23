import React from "react";
import Logo_White_1 from "../Assets/Logo_White_1.png";
import call from "../Assets/call.png";
import mail from "../Assets/mail.png";
import App_Store from "../Assets/App_Store.png";
import Playstores from "../Assets/Playstores.png";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#8668DC",
        height: "60vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          marginTop: "120px",
          padding: "50px",
        }}
      >
        <img src={Logo_White_1} width={80} alt="logo " height={80} />
      </div>
      <div
        style={{
          width: "20%",
          color: "#FFF",
          fontFamily: "Poppins",
          marginTop: "100px",
          padding: "25px",
        }}
      >
        <p style={{ fontWeight: "700", fontSize: "16px" }}>Our Services</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>
          Cafe and Restaurant
        </p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Online Shopping</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Online Booking</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>
          On Demand Services
        </p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>
          Door to door Delivery
        </p>
      </div>
      <div
        style={{
          width: "20%",
          color: "#FFF",
          fontFamily: "Poppins",
          marginTop: "100px",
          padding: "25px",
        }}
      >
        <p style={{ fontWeight: "700", fontSize: "16px" }}>For You</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Privacy</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Terms</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Security</p>
        <p style={{ fontWeight: "300", fontSize: "14px" }}>Sitemap</p>
      </div>
      <div
        style={{
          width: "20%",
          color: "#FFF",
          fontFamily: "Poppins",
          marginTop: "100px",
          padding: "25px",
        }}
      >
        <p style={{ fontWeight: "700", fontSize: "16px" }}>Help</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={call} width={20} height={20} alt="mobile" />
          <p
            style={{
              fontWeight: "300",
              fontSize: "14px",
              marginRight: "90px",
            }}
          >
            +960 747 5751
          </p>
        </div>
        <div>
          <p
            style={{ fontWeight: "300", fontSize: "14px", marginLeft: "40px" }}
          >
            +960 779 4114
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <img src={mail} width={20} height={20} alt="mail" />
          <p
            style={{ fontWeight: "300", fontSize: "14px", marginLeft: "15px" }}
          >
            info@mindnotix.com.mv
          </p>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          color: "#FFF",
          fontFamily: "Poppins",
          marginTop: "100px",
          padding: "25px",
        }}
      >
        <p style={{ fontWeight: "700", fontSize: "18px" }}>Download BRO App</p>
        <img src={App_Store} alt="app_store" />
        <img src={Playstores} alt="play_store" style={{ marginTop: "15px" }} />
      </div>
    </div>
  );
};

export default Footer;
