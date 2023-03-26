import React from "react";
import { Typography } from "@mui/material";

function Infocom({ infoheading, infosubheading }) {
  return (
    <>
      <Typography variant="h6">{infoheading}</Typography>
      <Typography variant="body1">{infosubheading}</Typography>
    </>
  );
}
export default Infocom;
