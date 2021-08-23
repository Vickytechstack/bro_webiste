import React from "react";
import salad_bowl from "../Assets/salad_bowl.png";
import { Row, Col } from "reactstrap";
import covid from "../Assets/covid.png";
const OfferCardTwo = () => {
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
            backgroundColor: "#713592",
            width: "50vw",
            height: "35vh",
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
                  Start your Business
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: "23px",
                    marginTop: "-17px",
                  }}
                >
                  with BRO
                </p>
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
            marginLeft: "20px",
            width: "50vw",
            height: "33vh",
          }}
        >
          <img src={covid} alt="covid" />
        </div>
      </div>
    </div>
  );
};

export default OfferCardTwo;
