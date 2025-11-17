import React, { useState } from 'react';
import Product1 from "../../assets/Product1.png";
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductItems = () => {

  const [wishlist, setWishlist] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="productCard"
        style={{
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
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        {/* ❤️ Wishlist Button - appears on hover */}
        {hover && (
          <button
            onClick={() => setWishlist(!wishlist)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: wishlist ? "#FFE7E7" : "white",
              border: "1px solid #dcdcdc",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              transition: "all 0.3s ease",
              color: wishlist ? "red" : "#555",
              zIndex: 999,
            }}
            onMouseEnter={(e) => {
              if (!wishlist) {
                e.target.style.backgroundColor = "#B3E5FC";
                e.target.style.color = "#1976D2";
              }
              e.target.style.transform = "scale(1.12)";
            }}
            onMouseLeave={(e) => {
              if (!wishlist) {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#555";
              } else {
                e.target.style.backgroundColor = "#FFE7E7";
                e.target.style.color = "red";
              }
              e.target.style.transform = "scale(1)";
            }}
          >
            {wishlist ? <FaHeart /> : <CiHeart />}
          </button>
        )}

        <Link to="/" style={{ textDecoration: "none", color: "#777" }}>

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
                transform: hover ? "scale(1.1)" : "scale(1)",
              }}
            />
          </div>

          {/* Product Name */}
          <h4 style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#333",
            marginTop: "10px"
          }}>
            Bodycon lavender dress
          </h4>

          {/* Description */}
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
            <span style={{ fontWeight: "700", fontSize: "16px", color: "#ff4b4b" }}>
              ₹599
            </span>
            <span style={{ textDecoration: "line-through", color: "#999", fontSize: "13px" }}>
              ₹1199
            </span>
            <span style={{ color: "blue", fontSize: "14px", fontWeight: "600" }}>
              50% OFF
            </span>
          </div>

          {/* Rating */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            marginTop: "6px"
          }}>
            ⭐⭐⭐⭐☆
            <span style={{ fontSize: "13px", color: "#555" }}>(2092)</span>
          </div>

          {/* Delivery */}
          <p style={{
            marginTop: "6px",
            fontSize: "13px",
            fontWeight: "600",
            color: "blue"
          }}>
            🚚 Free Delivery
          </p>

        </Link>
      </div>
    </>
  );
};

export default ProductItems;
