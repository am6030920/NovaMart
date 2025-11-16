import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProductItems from "../ProductItems/ProductItems";
import Product2 from "../../assets/Product2.png";
import Product3 from "../../assets/Product3.png";
import Product4 from "../../assets/Product4.png";
import Product5 from "../../assets/Product5.png";
import Product6 from "../../assets/Product6.png";
import Product7 from "../../assets/Product7.png";
import { Link } from 'react-router-dom';




const Poducts = (props) => {
  return (
    <div className="Products">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>


        <SwiperSlide>
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
      src={Product2} 
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
      Fancy Retro Women Dresses
    </h4>

    <p style={{
  fontSize: "13px",
  color: "#777",
  height: "38px",
  overflow: "hidden",
  margin: "0"
}}>
 
    New stylish party wear bodycon dress for women's ||Fancy Retro Women Dresses || birthday special
  
</p>


    {/* Price Section */}
    <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
      <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
        ₹297
      </span>
      <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
        ₹328
      </span>
      <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
        9% OFF
      </span>
    </div>

    {/*  Rating */}
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      gap: "4px",
      marginTop: "6px"
    }}>
      ⭐⭐⭐⭐⭐
      <span style={{ fontSize:"13px", color:"#555" }}>(1010)</span>
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
        </SwiperSlide>


        <SwiperSlide>
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
                src={Product3} 
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
                Maroon Pure Silk Saree
              </h4>
          
              <p style={{
            fontSize: "13px",
            color: "#777",
            height: "38px",
            overflow: "hidden",
            margin: "0"
          }}>
           
              Women's Printed Maroon Pure Silk Saree With Heavy Embroidered Work Border
            
          </p>
          
          
              {/* Price Section */}
              <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
                <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
                  ₹490
                </span>
                <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
                  ₹493
                </span>
                <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
                  1% OFF
                </span>
              </div>
          
              {/*  Rating */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "4px",
                marginTop: "6px"
              }}>
                ⭐⭐⭐☆☆
                <span style={{ fontSize:"13px", color:"#555" }}>(1240)</span>
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
          
        </SwiperSlide>


        <SwiperSlide>
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
               src={Product4} 
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
              Trendy Modern Men Shirts
             </h4>
         
             <p style={{
           fontSize: "13px",
           color: "#777",
           height: "38px",
           overflow: "hidden",
           margin: "0"
         }}>
          
             NCOMFY & STYLISH MEN SHIRTS
           
         </p>
         
         
             {/* Price Section */}
             <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
               <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
                 ₹263
               </span>
               <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
                 ₹291
               </span>
               <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
                 10% OFF
               </span>
             </div>
         
             {/*  Rating */}
             <div style={{ 
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center",
               gap: "4px",
               marginTop: "6px"
             }}>
               ⭐⭐⭐⭐⭐
               <span style={{ fontSize:"13px", color:"#555" }}>(120)</span>
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
        </SwiperSlide>

        
        <SwiperSlide>
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
               src={Product5} 
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
               Cotton Blend Women Kurti
             </h4>
         
             <p style={{
           fontSize: "13px",
           color: "#777",
           height: "38px",
           overflow: "hidden",
           margin: "0"
         }}>
          
        new woman anarkalikurtis |new trending anarkali kurtis || Cotton Blend Women Kurti
           
         </p>
         
         
             {/* Price Section */}
             <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
               <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
                 ₹461
               </span>
               <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
                 ₹505
               </span>
               <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
                 9% OFF
               </span>
             </div>
         
             {/*  Rating */}
             <div style={{ 
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center",
               gap: "4px",
               marginTop: "6px"
             }}>
               ⭐⭐⭐☆☆
               <span style={{ fontSize:"13px", color:"#555" }}>(968)</span>
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
        </SwiperSlide>

          <SwiperSlide>
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
               src={Product6} 
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
              Fashionable Saree
             </h4>
         
             <p style={{
           fontSize: "13px",
           color: "#777",
           height: "38px",
           overflow: "hidden",
           margin: "0"
         }}>
          
       jimmy chu organza sarees designer organja sarees party wear stone saree new collection stone work sarees stone wala saree jimmy chu fabric saree sarees new collection 2024 party wear new model
           
         </p>
         
         
             {/* Price Section */}
             <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
               <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
                 ₹639
               </span>
               <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
                 ₹799
               </span>
               <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
                 20% OFF
               </span>
             </div>
         
             {/*  Rating */}
             <div style={{ 
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center",
               gap: "4px",
               marginTop: "6px"
             }}>
               ⭐⭐⭐⭐⭐
               <span style={{ fontSize:"13px", color:"#555" }}>(8960)</span>
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
        </SwiperSlide>

         <SwiperSlide>
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
               src={Product7} 
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
              Black Daimond Saree 
             </h4>
         
             <p style={{
           fontSize: "13px",
           color: "#777",
           height: "38px",
           overflow: "hidden",
           margin: "0"
         }}>
          
 Trending Premium collection Hotfix Daimond Saree With Blouse
           
         </p>
         
         
             {/* Price Section */}
             <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "7px" }}>
               <span style={{ fontWeight: "700", fontSize: "16px", color:"#ff4b4b" }}>
                 ₹499
               </span>
               <span style={{ textDecoration: "line-through", color:"#999", fontSize:"13px" }}>
                 ₹999
               </span>
               <span style={{ color:"blue", fontSize:"14px", fontWeight:"600" }}>
                 50% OFF
               </span>
             </div>
         
             {/*  Rating */}
             <div style={{ 
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center",
               gap: "4px",
               marginTop: "6px"
             }}>
               ⭐⭐⭐⭐⭐
               <span style={{ fontSize:"13px", color:"#555" }}>(6958)</span>
             </div>
         
             {/* Free Delivery */}
             <p style={{
               marginTop: "6px",
               fontSize: "13px",
               fontWeight: "600",
               color: "blue"
             }}>
               🚚Free Delivery
             </p>
         
           </div>
         </Link>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Poducts;
