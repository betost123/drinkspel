import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const questionsData = [
  "osthyvel",
  "grill",
  "fotbollsmatch",
  "guldmedalj",
  "fjäder",
  "kulspetspenna",
  "spjut",
  "indian",
  "vas",
  "affäresresa",
  "semester",
  "enhörning",
  "ormbuske",
  "helg",
  "påsk",
  "julbord",
  "midsommar",
  "hundbajs",
  "brasa",
  "bastu",
  "anteckningsblock",
  "regnbåge",
  "handsprit",
  "tatueringsnål",
  "tatuering",
  "snusdosa",
  "Falcon",
  "taklampa",
  "sovsäck",
  "podium",
  "telefonnummer",
  "kalasbyxor",
  "datorskärm",
  "vinflaska",
  "gurka",
  "body lotion",
  "kulle",
  "jordnötsringar",
  "kortlek",
  "prins",
  "groda",
  "fruktansvärt",
];

export const Alias = () => {
  const navigate = useNavigate();

  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * questionsData.length + 1)
  );
  const [counter, setCounter] = React.useState(0);

  const onClickNext = () => {
    setQuestionsIdenx(Math.floor(Math.random() * questionsData.length));
  };

  const onClickCorrect = () => {
    onClickNext();
    setCounter(counter + 1);
  };

  const onClickWrong = () => {
    onClickNext();
    setCounter(counter - 1);
  };

  const onClickNewSession = () => {
    onClickNext();
    setCounter(0);
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
        ALIAS
      </Typography>
      <Typography style={{ color: "#E5E5E5", textAlign: "center" }}>
        {counter} poäng
      </Typography>
      <Button
        style={{
          backgroundColor: "#B19FF9",
          padding: 16,
          color: "#E5E5E5",
          borderRadius: 8,
        }}
        onClick={onClickNewSession}
        fullWidth
      >
        NY OMGÅNG
      </Button>
      <Paper
        style={{
          backgroundColor: "#4A8179",
          padding: 24,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 600,
          fontSize: 20,
          borderRadius: 8,
          marginTop: 50,
        }}
        elevation={4}
      >
        {questionsData[questionsIndex]}
      </Paper>
      <div
        style={{
          position: "absolute",
          bottom: 50,
          width: "85%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            backgroundColor: "#C4B5A6",
            padding: 16,
            color: "#E5E5E5",
            width: "49%",
          }}
          onClick={onClickWrong}
        >
          FEL
        </Button>
        <Button
          style={{
            backgroundColor: "#007551",
            padding: 16,
            color: "#E5E5E5",
            width: "49%",
          }}
          onClick={onClickCorrect}
        >
          RÄTT
        </Button>
      </div>
    </div>
  );
};
