import React from "react";
import Infocom from "../atoms/Infocom";
import NameHeadCom from "../atoms/Nameheadcom";

function Fullinfo() {
  return (
    <>
      <NameHeadCom
        name={"Abhishek"}
        programname={"Program Name"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit."
        }
      />
      <Infocom infoheading={"Batch ID"} infosubheading={"FSD3ER"} />
      <Infocom
        infoheading={"Start Date"}
        infosubheading={"2nd December 2022"}
      />
      <Infocom infoheading={"Discount"} infosubheading={"₹ 10,000"} />
      <Infocom infoheading={"Booking Amount"} infosubheading={"₹ 10,000"} />
      <Infocom infoheading={"Program Fees"} infosubheading={"₹ 4,00,000"} />
    </>
  );
}
export default Fullinfo;
