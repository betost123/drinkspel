import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const questionsData = [
  "vem knarkar mest",
  "vem har legat med flest",
  "vem har legat med flest tjockisar",
  "vem är snyggast",
  "vem har störst chans att komma med i PH",
  "vem är roligast",
  "vem är tråkigast",
  "vem kommer skilja sig",
  "vem kommer gifta sig först",
  "vem kommer få barn först",
  "vem har inte duschat på en vecka",
  "vem snarkar högst",
  "vem kommer bli statsminister",
  "vem kommer få sparken först",
  "vem är troligast att bli alkis",
  "vem kommer bli nunna",
  "vem blir miljonär",
  "vem är oskuld",
  "vem super mest",
  "vem har mörkast hemligheter",
  "vem har flest könssjukdomar",
  "vem kommer dö först",
  "vem blir en trophy wife",
  "vem är troligast att dö av en könssjukdom",
  "vem är bäst i sängen",
  "vem behöver gå på ett AA-möte",
  "vem är mest kinky",
  "vem har skickat flest nudes",
  "vem är mest trolig att hamna i fängelse",
  "vem är mest player",
  "vem är mest händig",
  "vem är mest pryd",
  "vem är alltid sen",
  "vem är mest hipster",
  "vem flirtar mest",
  "vem onanerar oftast",
  "vem kommer få ölmage",
  "vem gråter mest",
  "vem tål mest alkohol",
  "vem fiser mest",
  "vem är girigast",
  "vem kommer hitta den snyggaste livspartner",
  "vem har haft flest förhållanden",
  "vem hatar sitt liv mest",
  "vem är mest svenne",
  "vem är mest lösaktig",
  "vem har blivit uppraggad flest gånger",
  "vem ser äldst ut",
  "vem border dricka mer",
  "vem skulle du inte låna ut din bil till",
  "vem kommer bli uppraggad ikväll",
  "vem raggar sämst",
  "vem är mest allmänbildad",
  "vem tål minst alkohol",
  "vem är mest gansgter",
  "vem brukar bli fullast",
  "vem är mest desperat",
  "vem har blivit utkastad flest gånger från krogen",
  "vem har snyggast rumpa",
  "vem är mest bortskämd",
  "vem har bäst självförtroende",
  "vem har haft sex på konstiga ställen",
  "vem är drygast",
  "vem är roligast",
  "vem skulle kunna ta betalt för sex",
  "vem skulle betala för sex",
  "vem har gjort det roligaste på fyllan",
  "vem av oss kommer inte komma ihåg denhär kvällen imorgon",
  "vem skulle kunna delta i en porrfilm",
  "vem kollar mest porr",
  "vem av oss har bästa raggningsrepliken",
  "vem tar flest selfies",
  "vem kissar i duschen",
  "vem är största drinkludret",
  "vem har flest fiender",
  "vem har flest tatueringar",
  "vem är mest wifey material",
  "vem har störst skulder",
  "vem kommer bli snyggast som gammal",
  "vem av oss har klamydia",
  "vem av oss gymmar mest",
  "vem äter ute mest",
  "vem sjunger finast",
  "vem tindrar mest",
  "vem ligger oftast",
  "vem har sämst musiksmak",
  "vem är lättast att få i sängen",
  "vem har sämst karma",
  "vwm skulle du vilja gå på dejt med",
  "vem har bästa partytricket",
  "vem har haft flest trekanter",
  "vem kommer att spy ikväll",
  "vem blev nyligen dumpad",
  "vem dumpade någon nyligen",
  "vem skulle kunna dejta två samtidigt",
];

export const Pekleken = () => {
  const navigate = useNavigate();

  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * questionsData.length + 1)
  );

  const onClickNext = () => {
    setQuestionsIdenx(Math.floor(Math.random() * questionsData.length));
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
        PEKLEKEN
      </Typography>
      <Paper
        style={{
          backgroundColor: "#4A8179",
          padding: 24,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 600,
          fontSize: 20,
          borderRadius: 12,
        }}
        elevation={4}
      >
        {questionsData[questionsIndex]}
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
