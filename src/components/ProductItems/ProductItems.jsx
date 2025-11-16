import React from 'react'
import Product1 from "../../assets/Product1.png";
import { Link } from 'react-router-dom';
import "./Products.css"




const ProductItems = () => {
  return (
    <>
  <div className="productCard" style={{
  width: "220px",
  background: "#fff",
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.08)",
  cursor: "pointer",
  transition: "0.3s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
}}
onMouseEnter={(e)=> e.currentTarget.style.transform = "scale(1.03)"}
onMouseLeave={(e)=> e.currentTarget.style.transform = "scale(1)"}
>
     <Link 
    to="/" 
    style={{
      textDecoration: "none",
      color: "#777"
    }}
  >

  {/* Product Image */}

  <div style={{
    width: "100%",
    height: "200px",
    overflow: "hidden",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
  
    <img 
      src={Product1} 
      alt="product"
      style={{
        width: "70%",
        height: "100%",
        objectFit: "cover",
        transition: "0.4s",
      }}
      className="productImg"
      onMouseOver={(e)=> e.currentTarget.style.transform = "scale(1.1)"}
      onMouseOut={(e)=> e.currentTarget.style.transform = "scale(1)"}
    />
  </div>
  

  {/* Product Details */}
  <div style={{ marginTop: "10px", lineHeight: "19px" }}>

    <h4  style={{
      fontSize: "15px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "4px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%"
    }}>
      Bodycon lavender dress
    </h4>

    <p style={{
  fontSize: "13px",
  color: "#777",
  height: "38px",
  overflow: "hidden",
  margin: "0"
}}>
 
    New stylish party wear bodycon dress for women's || knee length || birthday special
  
</p>


    {/* Price Section */}
    <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
      <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
        ₹599
      </span>
      <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
        ₹1199
      </span>
      <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
        50% OFF
      </span>
    </div>


    <div className="action">
        
    </div>

    {/*  Rating */}
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      gap: "4px",
      marginTop: "6px"
    }}>
      ⭐⭐⭐⭐☆
      <span style={{ fontSize:"13px", color:"#555" }}>(2092)</span>
    </div>

    {/* Free Delivery */}
    <p style={{
      marginTop: "6px",
      fontSize: "13px",
      fontWeight: "600",
      color: "blue"
    }}>
      🚚 Free Delivery
    </p>

  </div>
</Link>
</div>



</>

  )
}

export default ProductItems