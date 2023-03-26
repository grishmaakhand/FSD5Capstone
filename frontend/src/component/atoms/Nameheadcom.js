import React from "react";
import { Typography } from "@mui/material";

function NameHeadCom({ name, programname, desc }) {
  return (
    <>
      <Typography variant="h5">Hi {name}</Typography>
      <Typography variant="body1">{programname}</Typography>
      <Typography variant="body1">{desc}</Typography>
    </>
  );
}
export default NameHeadCom;
