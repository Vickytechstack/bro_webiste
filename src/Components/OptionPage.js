import React, { useState } from "react";
import { Button, Modal, Card } from "reactstrap";
import card_image1 from "../Assets/card_image1.png";
import card_image4 from "../Assets/card_image4.png";
import { Link } from "react-router-dom";
import "./OptionPage.css";
const OptionPage = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <div className="first-div">
          <div
            style={{
              margin: "40px",
            }}
          >
            <p className="main-heading">What are you looking for today?</p>
            <p className="sub-heading">Select any option to continue.</p>
          </div>
          <div style={{ display: "flex" }} className="row">
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card className="card">
                <div className="card-image-background1">
                  <img src={card_image1} width="100px" height="100px" />

                  <p className="card-heading">Online Shopping</p>
                  <p
                    style={{
                      marginTop: "-15px",
                      fontSize: "10px",
                      marginLeft: "8px",
                    }}
                  >
                    {/* Order & Delivery */}
                  </p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card className="card">
                <div className="card-image-background2">
                  <img src={card_image1} width="100px" height="100px" />

                  <p className="card-heading">Cafe & Restaurant</p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card className="card">
                <div className="card-image-background3">
                  <img src={card_image1} width="100px" height="100px" />

                  <p className="card-heading">Online Booking</p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card className="card">
                <div className="card-image-background4">
                  <img
                    src={card_image4}
                    width="70px"
                    height="70px"
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                  />

                  <p className="card-heading1">On Demand Services</p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card className="card">
                <div className="card-image-background5">
                  <img src={card_image1} width="100px" height="100px" />

                  <p className="card-heading">Door to Door Delivery</p>
                </div>
              </Card>
            </div>
          </div>
          <Link to="/homepage">
            <button onClick={toggle} className="button">
              Continue
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default OptionPage;
