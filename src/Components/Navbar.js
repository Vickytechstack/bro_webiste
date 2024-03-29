import React from "react";
import navbar_logo from "../Assets/nav_logo.png";
import heart from "../Assets/heart.png";
import bell from "../Assets/bell.png";
import cart from "../Assets/cart.png";
import profile from "../Assets/profile.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Poppins",
        width: "100%",
        position: "relative",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div>
        <Link to="/login">
          <img src={navbar_logo} alt="logo" />
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          width: "30vw",
          height: "8vh",
          borderRadius: "30px",
          fontFamily: "Poppins",
          display: "flex",
          marginLeft: "80px",
          marginTop: "5px",
        }}
      >
        <input
          type="search"
          placeholder="Search Restaurant,Cafe"
          style={{
            border: "none",
            outline: "none",
            background: "#F8F8F8",
            height: "100%",
            padding: "0 10px",
            fontSize: "15px",
            width: "350px",
            borderRadius: "30px",
          }}
        />
        <input
          type="search"
          placeholder="Boduhuraa"
          style={{
            border: "none",
            outline: "none",
            background: "#F8F8F8",
            height: "100%",
            padding: "0 10px",
            fontSize: "15px",
            width: "350px",
            borderRadius: "30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffcccb",
            borderRadius: "60%",
            width: "4vw",
            height: "7vh",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        >
          <img src={heart} alt="heart" style={{ padding: "12px" }} />
        </div>
        <div
          style={{
            backgroundColor: "#87CEEB",
            borderRadius: "60%",
            width: "4vw",
            height: "7vh",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        >
          <img
            src={bell}
            alt="bell"
            style={{ padding: "12px", marginBottom: "10px", marginLeft: "2px" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#ADFF2F",
            borderRadius: "60%",
            width: "4vw",
            height: "7vh",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        >
          <img
            src={cart}
            alt="cart"
            style={{ padding: "12px", marginBottom: "10px", marginLeft: "4px" }}
          />
        </div>
      </div>
      <div
        style={{
          marginLeft: "40px",
          fontWeight: "600",
          fontSize: "14px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          <li>Hello</li>
          <li>Jimmy Sulivan</li>
        </ul>
      </div>
      <div style={{ padding: "10px", marginLeft: "10px" }}>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;
