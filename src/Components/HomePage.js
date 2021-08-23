import React from "react";
import forward from "../Assets/forward.png";
import backward from "../Assets/backward.png";
import eclipse from "../Assets/eclipse.png";
// import banner_image4 from "../Assets/banner_image4.png";
import OptionList from "./OptionList";
import CategoryList from "./CategoryList";
import FoodCard from "./FoodCard";
import OfferCardOne from "./OfferCardOne";
import OfferCardTwo from "./OfferCardTwo";
// import ArrowForwardIosIcon from "@material-ui/icons";
import Footer from "./Footer";
import DownloadApp from "./DownloadApp";
import Banner from "./Banner";
import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          // backgroundColor: "red",
          marginLeft: "35px",
          marginRight: "35px",
          marginBottom: "35px",
          height: "80vh",
        }}
      >
        {/* Navbar start  */}
        <Navbar />
        {/* Navbar End */}

        {/* Offercard starts */}
        <Banner />
        {/* Offercard ends */}

        {/* Option section starts*/}
        <OptionList />
        {/* Option section ends */}

        <div
          className="row"
          style={{ backgroundColor: "#FFF", marginTop: "70px" }}
        >
          <div className="col-11">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Category
            </p>
          </div>
          <div className="col-1" style={{ display: "flex" }}>
            <div>
              <img
                src={backward}
                width="15px"
                height="20px"
                style={{ marginTop: "9px" }}
              />
            </div>
            {/* <ArrowForwardIosIcon /> */}

            <div>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          {/* Categorylist starts */}
          <CategoryList />
          {/* Categorylist ends */}

          {/* Card section starts */}
          <FoodCard />
          <FoodCard />
          {/* Card section ends */}

          <OfferCardOne />
          <FoodCard />
          <FoodCard />
          <OfferCardTwo />
          <FoodCard />
          <DownloadApp />

          {/* <div
          style={{ backgroundColor: "red", height: "25vh", marginTop: "20px" }}
        >
          <p>card section</p>
        </div> */}
        </div>
      </div>
      <div style={{ marginTop: "3000px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
