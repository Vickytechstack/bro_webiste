import React from "react";
import Vector_Stroke from "../Assets/Vector_Stroke.png";
import salad_bowl from "../Assets/salad_bowl.png";
import { Row, Col } from "reactstrap";

const OfferCardOne = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#62C800",
            width: "50vw",
            height: "33vh",
          }}
        >
          <Row>
            <Col>
              <div style={{ marginTop: "40px", marginLeft: "30px" }}>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: "23px",
                  }}
                >
                  Flat 60% OFF
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: "23px",
                    marginTop: "-17px",
                  }}
                >
                  On Food Orders
                </p>
                <div
                  style={{
                    backgroundColor: "#FFF",
                    width: "130px",
                    height: "48px",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "9px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#62C800",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Order Now
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <img src={salad_bowl} alt="Salad bowl" width="90%" height="90%" />
            </Col>
          </Row>
        </div>
        {/* First div ends */}

        {/* Seconds div starts */}
        <div
          style={{
            backgroundColor: "#FA5769",
            marginLeft: "20px",
            width: "50vw",
            height: "33vh",
          }}
        >
          <Row>
            <Col>
              <div style={{ marginTop: "40px", marginLeft: "23px" }}>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: "23px",
                  }}
                >
                  Donut Worry!
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginTop: "-10px",
                  }}
                >
                  Were are here with the best
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "400",
                    fontSize: "15px",
                    marginTop: "-17px",
                  }}
                >
                  deserts in town
                </p>
                <div
                  style={{
                    // backgroundColor: "#FFF",
                    width: "150px",
                    height: "48px",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "9px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      src={Vector_Stroke}
                      width={14}
                      height={18}
                      alt="vector stroke"
                    />
                    <p
                      style={{
                        color: "#FFF",
                        fontWeight: "500",
                        fontSize: "16px",
                        marginLeft: "5px",
                        marginTop: "-3px",
                      }}
                    >
                      ORDER NOW
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <img src={salad_bowl} alt="Salad bowl" width="90%" height="90%" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OfferCardOne;
