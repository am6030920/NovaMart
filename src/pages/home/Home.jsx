import React from "react";
import HomeSlider from "../../components/HomesSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import { SiFreenet } from "react-icons/si";
// import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import AdsBanner from "../../components/AdsBannerSlider/AdsBanner";


const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#e0e0e0",

        overflow: "hidden",
      }}
    >
      <HomeSlider />
      <CatSlider />
      
      
      
   <section style={{ background: "#fff", marginTop: "5px" }}>

  <style>
    {`
      @keyframes pop {
        0% { transform: scale(1); color:#000; }
        100% { transform: scale(1.15); color:blue; }
      }

      @keyframes moveTruck {
        0% { transform: translateX(0) scale(1); }
        100% { transform: translateX(12px) scale(1.1); }
      }
    `}
  </style>

  <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px" }}>
    <div
      style={{
        border: "2px solid #bfbfbf",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        alignItems: "center",
        width: "100%",
        transition: "0.4s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        e.currentTarget.querySelector(".truck").style.animation = "moveTruck .6s forwards";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.querySelector(".truck").style.animation = "none";
      }}
    >
      {/* Truck Icon + Free Shipping */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <TbTruckDelivery className="truck" style={{ fontSize: "70px", transition: "0.4s" }} />

        <span style={{ fontSize: "28px", fontWeight: "600", display: "flex", gap: "5px" }}>
          FREE SHIPPING <SiFreenet style={{ marginTop: "5px" }} />
        </span>
      </div>

      <div style={{ height: "55px", width: "2px", background: "#8C8C8C" }}></div>

      {/* Middle Text */}
      <span style={{ fontSize: "20px", fontWeight: "400" }}>
        Free Delivery Now on Your First Order And Over $200
      </span>

      <div style={{ height: "55px", width: "2px", background: "#8C8C8C" }}></div>

      {/* Price Highlight */}
      <span
        style={{
          fontSize: "30px",
          fontWeight: "700",
          animation: "pop 1.5s infinite alternate",
        }}
      >
        - ONLY $200
      </span>
    </div>




      <AdsBanner items={4} />
  </div>
</section>



      




      


    </div>
  );
};

export default Home;
