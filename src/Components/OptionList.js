import React from "react";
import card_image1 from "../Assets/card_image1.png";
import card_image4 from "../Assets/card_image4.png";
const OptionList = () => {
  return (
    <div>
      {/* Option section */}
      <div
        style={{
          background: "#FFF",
          height: "25vh",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            backgroundColor: "#BE0D97",
            borderRadius: "50%",
            width: "158px",
            height: "158px",
            marginLeft: "20px",
          }}
        >
          <img
            src={card_image1}
            alt="card_image1"
            width="135px"
            height="135px"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />

          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              marginTop: "22px",
            }}
          >
            Online Shopping
          </p>
          <p
            style={{
              marginTop: "-15px",
              fontSize: "16px",
              marginLeft: "8px",
              fontWeight: "600",
            }}
          >
            Order & Delivery
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#C03030",
            borderRadius: "50%",
            borderRadius: "50%",
            width: "158px",
            height: "158px",
            marginLeft: "20px",
          }}
        >
          <img
            src={card_image1}
            alt="card_image2"
            width="135px"
            height="135px"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />

          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "8",
              marginTop: "27px",
              marginLeft: "10px",
            }}
          >
            Cafe & Restaurant
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#8FFFF9",
            borderRadius: "50%",
            width: "158px",
            height: "158px",
            marginLeft: "20px",
          }}
        >
          <img
            src={card_image1}
            alt="card_image3"
            width="135px"
            height="135px"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />

          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "18px",
              marginTop: "20px",
              marginLeft: "13px",
            }}
          >
            Online Booking
          </p>
          <p
            style={{
              marginTop: "-15px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Speed Boat & Ferry Service
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#008FA3",
            borderRadius: "50%",
            width: "158px",
            height: "158px",
            marginLeft: "20px",
          }}
        >
          <img
            src={card_image4}
            alt="card_image4"
            width="100px"
            height="100px"
            style={{ marginLeft: "28px", marginTop: "25px" }}
          />

          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "10",
              marginTop: "38px",
              marginLeft: "30px",
            }}
          >
            On Demand Services
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#BE0D97",
            borderRadius: "50%",
            width: "158px",
            height: "158px",
            marginLeft: "20px",
          }}
        >
          <img
            src={card_image1}
            alt="card_image1"
            width="135px"
            height="135px"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />

          <p
            style={{
              fontWeight: "600",
              fontSize: "18px",
              marginTop: "13px",
              fontWeight: "600",
              marginLeft: "20px",
            }}
          >
            Door to Door Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionList;
