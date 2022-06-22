import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const data = ["1", "2", "3", "4", "5", "6"];

export const Treman = () => {
  const navigate = useNavigate();

  const [firstIndex, setFirstIndex] = React.useState(
    Math.floor(Math.random() * data.length + 1)
  );
  const [secondIndex, setSecondIndex] = React.useState(
    Math.floor(Math.random() * data.length + 1)
  );

  const onClickNext = () => {
    setFirstIndex(Math.floor(Math.random() * data.length));
    setSecondIndex(Math.floor(Math.random() * data.length));
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
        TREMAN
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
        {data[firstIndex]}
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
        {data[secondIndex]}
      </Paper>
      <Typography
        style={{
          fontSize: 14,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 500,
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        Regler
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>Lika: </b>Dela ut antal klunkar som tärningsögon.
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>Summan 7: </b>"7 ahead", spelaren framför dricker
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>Summan 9: </b>"9 behind", spelaren bakom dricker
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>Summan 11: </b>Alla sätter ett finger på näsan, sisten får dricka
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>3 nånstans: </b>Tremannen får dricka
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>3+3: </b>Tremannen får dricka och utse ny treman
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        <b>1+2: </b>Utmana nån, den som slår högst får dricka mellanskillnaden
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#E5E5E5",
          fontWeight: 500,
        }}
      >
        Allt annat så skicka vidare tärningen
      </Typography>
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
