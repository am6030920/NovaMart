import React, { useState } from "react";
import "./Sidebar.css";
import CtegoryColleps from "../CtegoryColleps/CtegoryColleps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside className="Sidebar">
      <div className="Box">

        {/* Header */}
        <div
          className="sidebar-header"
          onClick={() => setOpen(!open)}
        >
          <h3 style={{marginLeft:"-8vh"}}>Shop By Category</h3>
          {open ? (
            <KeyboardArrowUpIcon className="arrow" />
          ) : (
            <KeyboardArrowDownIcon className="arrow" />
          )}
        </div>

        {/* Collapsible Content */}
        {open && (
          <div className="ProductData">
            <CtegoryColleps />
          </div>
        )}

      </div>
    </aside>
  );
};

export default Sidebar;
