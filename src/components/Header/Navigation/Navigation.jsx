import React from "react";
import "./Nigation.css";
import Button from "@mui/material/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";

const Navigation = () => {
  return (
    <nav className="py-4" style={{ marginTop: "5px" ,}}>
      <div className="container flex items-center justify-end gap-5">
        <div className="col1 w-[20%]">
          <Button
            className="!text-black !normal-case w-full"
            style={{ color: "black", gap: "4px", fontWeight: "25px" }}
          >
            <AiOutlineMenu className="text-[18px]" />
            Shop by Categories
            <FaAngleDown
              style={{ text: "13px", font: "bold" }}
              className="ml-auto"
            />
          </Button>
        </div>
        <div className="col2 w-[60%]">
          <ul
            className="flex items-center gap-2 bg-gray-100 "
            style={{ gap: "1px" }}
          >
            <li className="list-none">
              <Link
                to="/"
                className="text-[16px] Link no-underline transition "
              >
            <Button style={{color:"black"}}>
                Home
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition ">
              <Button style={{color:"black"}}>

                Fahion
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Electronics
                </Button>
                
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Bags
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Footwear
              </Button>
              </Link>

            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Groceries
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Beauty
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>
                Wellness
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="text-[16px] Link no-underline transition">
              <Button style={{color:"black"}}>

                Jewellery
                </Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col3 w-[20%]">
          <p style={{ fontWeight: "350", fontSize: "16px" ,display:"flex",justifyItems:"center",gap:"5px",marginLeft:"52px",color:"#0f0f0f"}} className="mb-0 mt-0">
            <GoRocket className="text-[19px]"/>
            Free International Delivery
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
