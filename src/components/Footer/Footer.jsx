import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div
        className="container"
        style={{ paddingTop: "14vh", paddingBottom: "8vh" }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "14vh" }}>
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "4px", // gap kom
            }}
          >
            <FaShippingFast style={{ fontSize: "6vh" }} className="icone" />

            <h4 style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}>
              Free Shipping
            </h4>
            <p
              style={{
                margin: "0",
                fontWeight: "300",
                fontSize: "14px",
                paddingTop: "6px",
              }}
            >
              For all Orders over $200
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <PiKeyReturnLight style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                7 Days Returns
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                For an Exchange Product
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <RiSecurePaymentLine
                style={{ fontSize: "6vh" }}
                className="icone"
              />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Secured Payment
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Payment Cards Accepted
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <LiaGiftSolid style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Special Gifts
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Our First Product Order
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <BiSupport style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Support 24/7
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Contact us Anytime
              </p>
            </div>
          </div>
        </div>

        <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14vh",
            paddingTop: "12vh",
          }}
        >
          <div className="par-1">
            <h2>Contact Us</h2>
            <p>
              NovaMart - Mega Super Store 700090-Branagar Tobin Road Kolkata
            </p>

            <Link
              className="link"
              to="am600920@gmail.com"
              style={{ color: "black", textDecoration: "none" }}
            >
              sales@novamart.com
            </Link>

            <br />
            <span
              style={{ color: "blue", fontSize: "25px", fontWeight: "400" }}
            >
              +91 9831403680
            </span>
            <br />

            <CiChat1 style={{ fontSize: "6vh" }} />
            <span style={{ fontSize: "20px", margin: "0" }}>
              Online Chat Get Expert Help
            </span>
          </div>

          {/* part2 */}
          <div className="par-2">
            <h2>Products</h2>
            <p>Prices drop</p>
            <p>New products</p>
            <p>Best sales</p>
            <p>Contact us</p>
            <p>Sitemap</p>
            <p>Stores</p>
          </div>

          {/* part3 */}
 <div className="par-3">
            <h2>Our company</h2>
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Terms and conditions of use</p>
            <p>About us</p>
            <p>Secure payment</p>
            <p>kogin</p>
          </div>


          {/* part4 */}
          <div className="part-4"></div>
          <h2>Subscribe to newsletter</h2>
          <p>Subscribe to our latest newsletter to get news about special discounts.</p>
          <input type="email" placeholder="Your Email Address"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
