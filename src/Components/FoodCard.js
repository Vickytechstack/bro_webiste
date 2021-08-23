import React from "react";
import star_vector from "../Assets/star_vector.png";
import line_vector from "../Assets/Line_vector.png";
import { Card, Row, Col } from "reactstrap";
import food1 from "../Assets/food1.png";
import food2 from "../Assets/food2.png";
import food3 from "../Assets/food3.png";
import food4 from "../Assets/food4.png";

const FoodCard = () => {
  return (
    <div>
      <div
        style={{
          height: "52vh",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div>
          <Card style={{ width: "22vw", height: "50vh", marginTop: "10px" }}>
            <div style={{ height: "55%" }}>
              <img src={food1} alt="food" width="100%" height="100%" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                Tellicherry Kitchen
              </p>
              <p
                style={{
                  color: "#707070",
                  marginTop: "-20px",
                  marginLeft: "15px",
                }}
              >
                Indian Chinese,Continental
              </p>
              <div>
                <Row>
                  <Col>
                    <p
                      style={{
                        marginLeft: "8px",
                        color: "#1CCA00",
                        marginLeft: "15px",
                      }}
                    >
                      Opened
                    </p>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <p>4.5</p>
                    <img
                      src={star_vector}
                      alt="star_vector"
                      width="20px"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <img
                      src={line_vector}
                      alt="line_vector"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <p
                      style={{
                        color: "#969EB4",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      256 Reviews
                    </p>
                  </Col>
                  <p
                    style={{
                      marginTop: "-13px",
                      fontWeight: "300",
                      marginLeft: "15px",
                    }}
                  >
                    MVR 20 for one
                  </p>
                </Row>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card style={{ width: "22vw", height: "50vh", marginTop: "10px" }}>
            <div style={{ height: "55%" }}>
              <img src={food2} alt="food" width="100%" height="100%" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                Tellicherry Kitchen
              </p>
              <p
                style={{
                  color: "#707070",
                  marginTop: "-20px",
                  marginLeft: "15px",
                }}
              >
                Indian Chinese,Continental
              </p>
              <div>
                <Row>
                  <Col>
                    <p style={{ color: "#1CCA00", marginLeft: "15px" }}>
                      Opened
                    </p>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <p>4.5</p>
                    <img
                      src={star_vector}
                      alt="star_vector"
                      width="20px"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <img
                      src={line_vector}
                      alt="line_vector"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <p
                      style={{
                        color: "#969EB4",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      256 Reviews
                    </p>
                  </Col>
                  <p
                    style={{
                      marginTop: "-13px",
                      fontWeight: "300",
                      marginLeft: "15px",
                    }}
                  >
                    MVR 20 for one
                  </p>
                </Row>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card style={{ width: "22vw", height: "50vh", marginTop: "10px" }}>
            <div style={{ height: "55%" }}>
              <img src={food3} alt="food" width="100%" height="100%" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                Tellicherry Kitchen
              </p>
              <p
                style={{
                  color: "#707070",
                  marginTop: "-20px",
                  marginLeft: "15px",
                }}
              >
                Indian Chinese,Continental
              </p>
              <div>
                <Row>
                  <Col>
                    <p style={{ marginLeft: "15px", color: "#1CCA00" }}>
                      Opened
                    </p>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <p>4.5</p>
                    <img
                      src={star_vector}
                      width="20px"
                      alt="star_vector"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <img
                      src={line_vector}
                      alt="line_vector"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <p
                      style={{
                        color: "#969EB4",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      256 Reviews
                    </p>
                  </Col>
                  <p
                    style={{
                      marginTop: "-13px",
                      fontWeight: "300",
                      marginLeft: "15px",
                    }}
                  >
                    MVR 20 for one
                  </p>
                </Row>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card style={{ width: "22vw", height: "50vh", marginTop: "10px" }}>
            <div style={{ height: "55%" }}>
              <img src={food4} alt="food" width="100%" height="100%" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                Tellicherry Kitchen
              </p>
              <p
                style={{
                  color: "#707070",
                  marginTop: "-20px",
                  marginLeft: "15px",
                }}
              >
                Indian Chinese,Continental
              </p>
              <div>
                <Row>
                  <Col>
                    <p style={{ marginLeft: "15px", color: "#1CCA00" }}>
                      Opened
                    </p>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <p>4.5</p>
                    <img
                      src={star_vector}
                      alt="star_vector"
                      width="20px"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <img
                      src={line_vector}
                      alt="line_vector"
                      height="20px"
                      style={{ marginLeft: "5px" }}
                    />
                    <p
                      style={{
                        color: "#969EB4",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      256 Reviews
                    </p>
                  </Col>
                  <p
                    style={{
                      marginTop: "-13px",
                      fontWeight: "300",
                      marginLeft: "15px",
                    }}
                  >
                    MVR 20 for one
                  </p>
                </Row>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
