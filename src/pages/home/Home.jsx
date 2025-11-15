import React from "react";
import HomeSlider from "../../components/HomesSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import { SiFreenet } from "react-icons/si";


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

      <section style={{ padding: "5", background: "#fff", marginTop: "5" }}>
        <div className="container" style={{paddingTop:"25px",paddingBottom:"25px"}}>
          <div
            className="freeShipping"
            style={{ width: "full", padding: "4", border:"2px solid #ff5252",display:"flex",justifyItems:"center",justifyContent: "space-between",borderRadius:"5px"}}
          >
            <div className="col1" style={{display:"flex",justifyItems:"center",gap:"4",}}>
            <TbTruckDelivery style={{fontSize:"80px",marginLeft:"45px"}}/>
            <span style={{fontSize:"30px",marginLeft:"55px",display:"flex",justifyItems:"center",justifyContent:"center",paddingTop:"17px",fontWeight:"400"}}>FREE SHIPPING <SiFreenet style={{marginTop:"5px",marginLeft:"3px"}}/>
</span>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
