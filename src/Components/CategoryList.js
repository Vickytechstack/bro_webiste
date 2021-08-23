import React from "react";
import coffee from "../Assets/coffee.png";
import salad from "../Assets/salad.png";
import thanksgiving from "../Assets/thanksgiving.png";
import noodles from "../Assets/noodles.png";
import cocunutdrink from "../Assets/coconut-drink.png";
import crab from "../Assets/crab.png";
import fastfood from "../Assets/fast-food.png";

const CategoryList = () => {
  return (
    <div
      style={{
        // backgroundColor: "blue",
        height: "18vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={coffee}
          alt="Coffee"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "27px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Cafe's
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={salad}
          alt="Salad"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Pure Veg
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={thanksgiving}
          alt="thanksgiving"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Non Veg
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={noodles}
          alt="noodles"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Chinese
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={cocunutdrink}
          alt="Coconutdrink"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Drinks
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={crab}
          alt="Crab"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Seafood
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          width: "9vw",
          backgroundColor: "#F8F8F8",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <img
          src={fastfood}
          alt="fastfood"
          width="45px"
          height="45px"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        />
        <p
          style={{
            marginLeft: "22px",
            marginTop: "18px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          Fast Food
        </p>
      </div>
    </div>
  );
};

export default CategoryList;
