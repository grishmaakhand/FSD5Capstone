import React from "react";
import { Typography } from "@mui/material";

function Payheadcom({ heading, subheading }) {
  return (
    <>
      <Typography
        variant="h5"
        mt={2}
        mr={2}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        mr={2}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        {subheading}
      </Typography>
    </>
  );
}
export default Payheadcom;
