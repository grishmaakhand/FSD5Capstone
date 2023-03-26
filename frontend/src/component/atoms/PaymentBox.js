import React from "react";
import { Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PaymentsIcon from "@mui/icons-material/Payments";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const PaymentBox = ({ amount, date, heading }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: 15 }} color="text.secondary">
            <PaymentsIcon /> {heading}
          </Typography>
          <Typography sx={{ fontSize: 35, fontWeight: "bold" }}>
            <CurrencyRupeeIcon />
            {amount}
          </Typography>
          <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
            Due Date : {date}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Button
            sx={{
              color: "black",
              borderRadius: "15px",
              borderColor: "red",
            }}
            variant="outlined"
          >
            Pay Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PaymentBox;
