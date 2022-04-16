import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const bodyData = [
  "KIND",
  "SMALBEN",
  "KNÄ",
  "HUVUD",
  "MIDJA",
  "FOT",
  "ÖVERARM",
  "LÅR",
  "ÖRA",
  "NÄSA",
  "HÅR",
  "FINGER",
  "HAND",
  "RUMPA",
  "HANDLED",
  "NAVEL",
  "MAGE",
  "BEN",
  "HAND",
  "ARMBÅGE",
  "HÖFT",
  "ARM",
  "UNDERARM",
  "BRÖST",
  "HALS",
  "PANNA",
  "SKREV",
];

export const BodyTwister = () => {
  const navigate = useNavigate();

  const [firstBodyIndex, setFirstBodyIndex] = React.useState(
    Math.floor(Math.random() * bodyData.length + 1)
  );
  const [secondBodyIndex, setSecondBodyIndex] = React.useState(
    Math.floor(Math.random() * bodyData.length + 1)
  );

  const onClickNext = () => {
    setFirstBodyIndex(Math.floor(Math.random() * bodyData.length));
    setSecondBodyIndex(Math.floor(Math.random() * bodyData.length));
  };

  return (
    <div style={{ backgroundColor: "#2F4858", height: "100vh", padding: 24 }}>
      <IconButton onClick={() => navigate("/")}>
        <ArrowBackIcon style={{ color: "#ffffff" }} />
      </IconButton>
      <Typography
        style={{
          fontSize: 36,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 700,
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        BODY TWISTER
      </Typography>
      <Paper
        style={{
          backgroundColor: "#4A8179",
          padding: 24,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 600,
          fontSize: 30,
          borderRadius: 12,
        }}
        elevation={4}
      >
        {bodyData[firstBodyIndex]}
      </Paper>
      <Paper
        style={{
          backgroundColor: "#4A8179",
          padding: 24,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 600,
          fontSize: 30,
          borderRadius: 12,
          marginTop: 34,
        }}
        elevation={4}
      >
        {bodyData[secondBodyIndex]}
      </Paper>
      <div style={{ position: "absolute", bottom: 50, width: "85%" }}>
        <Button
          style={{ backgroundColor: "#007551", padding: 16, color: "#E5E5E5" }}
          onClick={onClickNext}
          fullWidth
        >
          NÄSTA
        </Button>
      </div>
    </div>
  );
};
