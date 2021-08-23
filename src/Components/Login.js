import React, { useState } from "react";
import { Button, Modal, Row, Col, Input } from "reactstrap";
import Vector from "../Assets/Vector.png";
import Logo_white from "../Assets/Logo_White_1.png";
import { Link } from "react-router-dom";

import Lock_Vector from "../Assets/Lock_Vector.png";
import OptionPage from "./OptionPage";
import OptionList from "./OptionList";
import HomePage from "./HomePage";
import OtpPage from "./OtpPage";
const Login = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  const [otppage, setOtppage] = useState(false);

  const handleClick = () => {
    setOtppage(true);

    toggle();
  };

  return (
    <div>
      <HomePage />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <Row>
          <Col style={{ height: "75vh", backgroundColor: "#6946CD" }}>
            <div
              style={{ color: "#FFF", marginLeft: "20px", marginTop: "10px" }}
            >
              <Link
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#FFF",
                  textDecoration: "none",
                }}
                to="/homepage"
              >
                Skip
              </Link>
            </div>

            <div
              style={{
                width: "190px",
                marginTop: "120px",
                padding: "45px",
                marginLeft: "100px",
              }}
            >
              <img src={Logo_white} height="60px" width="60px" alt="logo" />
            </div>
          </Col>
          <Col>
            <div
              style={{ float: "right", marginRight: "10px", marginTop: "10px" }}
            >
              <img
                src={Vector}
                onClick={toggle}
                width="25.25px"
                height="25.17px"
                alt="close"
              />
            </div>
            <Row style={{ marginTop: "40px", textAlign: "center" }}>
              <Col>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    fontSize: "36",
                  }}
                >
                  Welcome to BRO
                </p>
                <p
                  style={{
                    marginTop: "-17px",
                    fontFamily: "Poppins",
                    color: "#A7A6A6",
                    fontSize: "12px",
                    fontWeight: "300px",
                  }}
                >
                  Register your Account
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: "30px", marginLeft: "10px" }}>
              <Col>
                <p
                  style={{
                    // fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "26px",
                  }}
                >
                  Login
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  Enter Your Mobile Number
                </p>

                <Col md={10}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Mobile Number"
                  />
                </Col>
                <br />
                {/* <Link to="/otppage"> */}
                <button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#6E4CCF",
                    color: "#FFF",
                    textAlign: "center",
                    border: "none",
                    width: "22vw",
                    height: "7vh",
                    borderRadius: "5px",
                  }}
                >
                  Log in
                </button>
                {/* </Link> */}
              </Col>
              <div style={{ marginTop: "80px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "20px",
                    color: "#8B8B8B",
                  }}
                >
                  By Sign in to create an account I accept Badhahi Raajje Online
                  <br />
                  <p style={{ marginLeft: "40px", color: "#6E4CCF" }}>
                    Terms of Use and Privacy Policy
                  </p>
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Modal>
      {otppage == true && <OtpPage />}
    </div>
  );
};

export default Login;
