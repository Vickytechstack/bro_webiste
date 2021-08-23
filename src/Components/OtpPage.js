import React, { useState } from "react";
import { Button, Modal, Row, Col, Input } from "reactstrap";
import Vector from "../Assets/Vector.png";
import Logo_white from "../Assets/Logo_White_1.png";
import Lock_Vector from "../Assets/Lock_Vector.png";
import OptionPage from "./OptionPage";
const OtpPage = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);
  const [option, setOption] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    setOption(true);

    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <Row>
          <Col style={{ height: "75vh", backgroundColor: "#6946CD" }}>
            <div
              style={{
                width: "190px",
                margin: "auto",
                padding: "10px",
                marginTop: "150px",
              }}
            >
              <img src={Logo_white} alt="logo" height="63px" width="75px" />
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
                    fontWeight: "500px",
                  }}
                >
                  Register your Account
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", marginLeft: "25px" }}>
              <Col>
                <div style={{ display: "flex" }}>
                  <img
                    src={Lock_Vector}
                    alt="lock_vector"
                    width="20px"
                    height="20px"
                    alt="vector_image"
                    style={{ marginTop: "5px" }}
                  />
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "23px",
                      marginLeft: "5px",
                    }}
                  >
                    Enter OTP
                  </p>
                </div>

                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#313131",
                  }}
                >
                  Your OTP send to +91 8045265144
                </p>
                <div>
                  <Row>
                    <Col md={2}>
                      <Input type="email" name="email" />
                    </Col>
                    <Col md={2}>
                      <Input type="email" name="email" />
                    </Col>
                    <Col md={2}>
                      <Input type="email" name="email" />
                    </Col>
                    <Col md={2}>
                      <Input type="email" name="email" />
                    </Col>
                  </Row>
                </div>

                <br />
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    marginTop: "-10px",
                  }}
                >
                  <p>Don't receive OTP?</p>
                  <span>
                    <p style={{ color: "#6E4CCF" }}>Resend OTP</p>
                  </span>
                </div>
                <button
                  style={{
                    backgroundColor: "#6E4CCF",
                    color: "#FFF",
                    textAlign: "center",
                    border: "none",
                    width: "22vw",
                    height: "7vh",
                    borderRadius: "5px",
                  }}
                  onClick={handleClick}
                >
                  Continue
                </button>
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
      {option == true && <OptionPage />}
    </div>
  );
};

export default OtpPage;
