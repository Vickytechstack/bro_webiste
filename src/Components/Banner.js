import React from "react";
import banner_image1 from "../Assets/banner_image1.png";
import banner_image2 from "../Assets/banner_image2.png";
import banner_image4 from "../Assets/banner_image4.png";
import banner_image3 from "../Assets/banner_image3.png";
import banner_image5 from "../Assets/banner_image5.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D5F0DB",
          height: "52vh",
          borderRadius: "32px",
          display: "flex",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            width: "50%",
            fontFamily: "Roboto",
          }}
        >
          <img src={banner_image1} alt="banner_image1" />
          <p
            style={{
              marginTop: "-450px",
              fontWeight: "700",
              fontSize: "35px",
              marginLeft: "20px",
            }}
          >
            Order Your
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "35px",
              marginTop: "-15px",
              marginLeft: "20px",
            }}
          >
            Daily Groceries
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "22px",
              marginTop: "-15px",
              marginLeft: "20px",
              color: "#18892D",
            }}
          >
            Any where... Any time!!
          </p>
          <img
            src={banner_image2}
            alt="banner_image2"
            width={120}
            height={120}
            style={{ marginTop: "-40px" }}
          />
        </div>
        <div
          style={{
            width: "10%",
          }}
        >
          <img
            src={banner_image5}
            alt="banana"
            style={{ marginTop: "170px" }}
          />
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <div style={{ width: "13%" }}>
            <img src={banner_image3} alt="tomato" />
          </div>
          <div style={{ width: "87%" }}>
            <img src={banner_image4} alt="tomato" width={524} height={330} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
