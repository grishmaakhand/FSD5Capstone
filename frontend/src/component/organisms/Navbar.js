import React from "react";
import Logocom from "../atoms/Logocom";

import { Grid } from "@mui/material";
import Callpayhead from "../molecules/Callpayhead";

function Navbar() {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Logocom />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Callpayhead />
        </Grid>
      </Grid>
    </>
  );
}
export default Navbar;
