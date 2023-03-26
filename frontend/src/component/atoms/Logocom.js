import { Box } from "@mui/system";
import React from "react";
import logo from "../img/logo.png";

function Logocom() {
  return (
    <>
      <Box ml={2}>
        <img src={logo} height={"80px"} width={"220px"} alt="logo.png" />
      </Box>
    </>
  );
}
export default Logocom;
