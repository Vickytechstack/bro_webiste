import React, { useState } from "react";
import { Button, Modal, Card } from "reactstrap";
import card_image1 from "../Assets/card_image1.png";
import card_image4 from "../Assets/card_image4.png";
import { Link } from "react-router-dom";

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
        <div style={{ height: "85vh" }}>
          <div
            style={{
              margin: "40px",
            }}
          >
            <p
              style={{ fontSize: "20px", textAlign: "center", fontWeight: 700 }}
            >
              What are you looking for today?
            </p>
            <p
              style={{
                marginTop: "-15px",
                textAlign: "center",
                color: "#7F8AA5",
                fontWeight: "300",
              }}
            >
              Select any option to continue.
            </p>
          </div>
          <div style={{ display: "flex" }} className="row">
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card
                style={{
                  width: "11vw",
                  height: "28vh",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#BE0D97",
                    borderRadius: "60%",
                    width: "75%",
                    height: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <img src={card_image1} width="100px" height="100px" />

                  <p
                    style={{
                      // fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "6",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    Online Shopping
                  </p>
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
              <Card
                style={{
                  width: "11vw",
                  height: "28vh",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#C03030",
                    borderRadius: "60%",
                    width: "75%",
                    height: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <img src={card_image1} width="100px" height="100px" />

                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "10",
                      textAlign: "center",
                      marginTop: "10px",
                      // marginLeft: "10px",
                    }}
                  >
                    Cafe & Restaurant
                  </p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card
                style={{
                  width: "11vw",
                  height: "28vh",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "60%",
                    width: "75%",
                    height: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <img src={card_image1} width="100px" height="100px" />

                  <p
                    style={{
                      fontWeight: "600",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    Online Booking
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      fontSize: "9px",
                      // marginLeft: "8px",
                    }}
                  >
                    {/* Speed Boat & Ferry Service */}
                  </p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card
                style={{
                  width: "11vw",
                  height: "28vh",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#03DFDF",
                    borderRadius: "60%",
                    width: "75%",
                    height: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <img
                    src={card_image4}
                    width="70px"
                    height="70px"
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                  />

                  <p
                    style={{
                      // fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "10",
                      marginTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    On Demand Services
                  </p>
                </div>
              </Card>
            </div>
            <div
              className="col-sm-6 col-12 col-md-6 col-lg-2"
              style={{ marginRight: "20px" }}
            >
              <Card
                style={{
                  width: "11vw",
                  height: "28vh",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#045D71",
                    borderRadius: "60%",
                    width: "75%",
                    height: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <img src={card_image1} width="100px" height="100px" />

                  <p
                    style={{
                      // fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "10",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    Door to Door Delivery
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <Link to="/homepage">
            <button
              onClick={toggle}
              style={{
                backgroundColor: "#6E4CCF",
                color: "#FFF",
                textAlign: "center",
                border: "none",
                width: "22vw",
                height: "7vh",
                borderRadius: "5px",
                marginLeft: "200px",
                marginTop: "50px",
              }}
            >
              Continue
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default OptionPage;
