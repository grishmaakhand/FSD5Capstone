import { Divider } from "@mui/material";
import React from "react";
import PaymentBox from "../component/atoms/PaymentBox";
import Info from "../component/organisms/Info";
import Navbar from "../component/organisms/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <Divider />
      <Info />

      <PaymentBox
        amount={10000}
        date={"25 December 2023"}
        heading={"Remaining Amount"}
      />
      <PaymentBox
        amount={20000}
        date={"25 December 2023"}
        heading={"Remaining Amount"}
      />
    </>
  );
}
export default Page;
