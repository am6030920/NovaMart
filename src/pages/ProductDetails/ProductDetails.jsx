import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link as RouterLink } from "react-router-dom";

const ProductDetails = () => {
  return (
    <section style={{ padding: "10px", background: "#fafafa" }}>
      
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <HomeIcon fontSize="small" />
          Home
        </Link>

        <Link
          underline="hover"
          color="text.primary"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <WhatshotIcon fontSize="small" />
          Fashion
        </Link>

      </Breadcrumbs>

    </section>
  );
};

export default ProductDetails;
