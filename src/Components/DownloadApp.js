import React from "react";
import Playstores from "../Assets/Playstores.png";
import App_Store from "../Assets/App_Store.png";
import mobile1 from "../Assets/mobile1.png";
import mobile2 from "../Assets/mobile2.png";
import mobile3 from "../Assets/mobile3.png";
const DownloadApp = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#3F80FF",
          marginTop: "125px",
          marginLeft: "11px",
          width: "94vw",
          height: "40vh",
          display: "flex",
        }}
      >
        <div style={{ width: "65%" }}>
          <div style={{ marginTop: "30px", marginLeft: "20px" }}>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "33px",
                fontWeight: "700",
                color: "#FFF",
              }}
            >
              Download the BRO app now
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "23px",
                fontWeight: "400",
                color: "#FFF",
                marginTop: "-17px",
              }}
            >
              Start ordering in minutes!
            </p>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <div
                style={{
                  width: "14vw",
                  height: "8vh",
                }}
              >
                <img src={App_Store} alt="App_store" />
              </div>
              <div
                style={{
                  width: "10vw",
                  height: "8vh",
                }}
              >
                <img
                  src={Playstores}
                  alt="play_store"
                  style={{ marginLeft: "-10px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "35%", display: "flex" }}>
          <img
            src={mobile1}
            alt="mobile"
            style={{
              marginTop: "-60px",
              width: "85%",
              height: "140%",
              marginRight: "50px",
            }}
          />
          <img
            src={mobile2}
            alt="mobile2"
            style={{
              marginTop: "-60px",
              width: "88%",
              height: "140%",
              marginLeft: "-250px",
            }}
          />
          <img
            src={mobile3}
            alt="mobile3"
            style={{
              marginTop: "-70px",
              width: "88%",
              height: "150%",
              marginLeft: "-330px",
              marginRight: "100px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;

{
  /* <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "end",
  }}
>
  
</div>; */
}

{
  /* <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "33px",
              fontWeight: "700",
              color: "#FFF",
            }}
          >
            Download the BRO app now
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "23px",
              fontWeight: "400",
              color: "#FFF",
              marginTop: "-17px",
            }}
          >
            Start ordering in minutes!
          </p>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <div
              style={{
                width: "14vw",
                height: "8vh",
              }}
            >
              <img src={App_Store} />
            </div>
            <div
              style={{
                width: "10vw",
                height: "8vh",
              }}
            >
              <img src={Playstores} style={{ marginLeft: "-10px" }} />
            </div>
          </div>
        </div> */
}
