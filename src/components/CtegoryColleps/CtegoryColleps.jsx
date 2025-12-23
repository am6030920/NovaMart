import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiSubtractFill, RiMenuAddFill } from "react-icons/ri";

const CtegoryColleps = () => {
  const [openFashion, setOpenFashion] = useState(false);

  return (
    <div style={{ width: "100%", padding: "0px" }}>
      <ul className="w-full">
        <li className="list-none">

          {/* ===== Main Category Button ===== */}
          <Button
            onClick={() => setOpenFashion(!openFashion)}
            sx={{
              color: "#000",
              fontSize: "14px",
              textTransform: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "50%",
              padding: "1px 2px",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.05)",
              },
            }}
          >
            Fashion
            {openFashion ? (
              <RiSubtractFill size={20} />
            ) : (
              <RiMenuAddFill size={20} />
            )}
          </Button>

          {/* ===== Sub Category ===== */}
          {openFashion && (
            <ul
              className="ml-4 mt-1 space-y-1"
              style={{ transition: "all 0.3s ease" }}
            >
              {["Men", "Women", "Kids"].map((item) => (
                <li key={item} className="list-none">
                  <Button
                    sx={{
                      color: "#000",
                      fontSize: "13px",
                      textTransform: "none",
                      justifyContent: "flex-start",
                      width: "50%",
                      padding: "4px 8px",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          )}

        </li>
      </ul>
    </div>
  );
};

export default CtegoryColleps;
