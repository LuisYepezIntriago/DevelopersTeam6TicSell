import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home/Table.css"
import infoIcon from "../../assets/infoIcon.png";

function TableOptions() {
  const btn = {
    background: "white",
    border: 0,
    borderRadius: 3,
    boxShadow: "o 3px 5px 2px rbga(255, 105, 135, .3)",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    height: 48,
    "&:hover": {
      color: 'white',
    },
  };

  return (
      <Box>
        <Link
          to="/client-info"
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "12px",
            textDecoration: "none",
          }}
        >
          <Button className="infoClient">
            <img src={infoIcon} to={`client-info`} alt="boton con imagen" />
          </Button>

        </Link>
      </Box>
  );
}

export default TableOptions;