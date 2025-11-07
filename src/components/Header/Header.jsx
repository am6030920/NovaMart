import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Search from '../Search/Search'; 

const Header = () => {
  return (
    <header>
      <div className="py-2 border-gray-300 border-y">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            
            <p className="text-[12px] font-normal text-gray-700">
              Get Up to 50% off new season styles, limited time offer
            </p>
                        <ul className="flex items-center gap-8 bg-gray-100 " style={{gap:"50px"}}>
              <li className="list-none">
                <Link to="/help-center" className="text-[14px] Link no-underline transition " >
                  Help Center
                </Link>
              </li>
               <li className="list-none">
                <Link to="/order-tracking" className="text-[14px] Link no-underline transition" >
                 Order Tracking
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>


      <div className="header">
       <div className="flex items-center justify-between">
  <div className="col1 w-[25%] h-[80%]">
    <Link to="/">
      <img src={logo} className="w-full h-auto" alt="logo" />
    </Link>
  </div>
          <div className="cal2 w-[40%]">
            <Search/>
          </div>

          
          <div className="cal3 w-[30%]">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
