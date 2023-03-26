import { Grid } from "@mui/material";
import React from "react";
import Fullinfo from "../molecules/Fullinfo";

function Info() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Fullinfo />
        </Grid>
      </Grid>
    </>
  );
}
export default Info;
