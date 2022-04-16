import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const questionsData = [
  "...fått sparken",
  "...tagit droger",
  "...ghostat någon",
  "...kissat på mig i vuxen ålder",
  "...fuskat på ett prov",
  "...hånglat med en tjockis",
  "...legat med någon i rummet",
  "...bajsat på mig i vuxen ålder",
  "...bokat hotellrum för natt med kärlek",
  "...hånglat med nån i rummet",
  "...legat när fler varit i samma rum",
  "...rökt weed",
  "...varit i fyllecell",
  "...tagit en springnota",
  "...skaffat en tatuering",
  "...tatuerat mig på fyllan",
  "...ångrat ett ligg",
  "...kört bil med alkohol i kroppen",
  "...wingat turbo med 100% garanti",
  "...gråtit på offentlig plats",
  "...somnat i ett möte",
  "...legat på offentlig plats",
  "...blivit utslängd från nattklubb",
  "...hånglat med tre eller fler på samma kväll",
  "...varit på rave",
  "...varit en sugardaddy",
  "...varit sugarbabe",
  "...sagt att jag aldrig kommer dricka igen",
  "...anordnat grillfest",
  "...somnat på en toalett",
  "...somnat under sex",
  "...eldat ett bord",
  "...spelat lökgolf",
  "...legat med mitt ex bästa kompis",
  "...haft en trekant",
  "...legat på en toa",
  "...spytt i någon annans säng",
  "...onanerat på jobbet",
  "...sjukanmält mig för att jag varit bakis",
  "...stalkat mitt ex",
  "...haft en könssjukdom",
  "...kysst någon jag tyckt var ful",
  "...supit varje dag under en vecka",
  "...kysst en väns förälder",
  "...raggat upp nån kvart i tre",
  "...köpt bärs i tyskland",
  "...legat med en bandmedlem",
  "...blivit nekad inträde till en riktigt sunkig pub (andra lång)",
  "...varit på strippklubb",
  "...strippat",
  "...sålt feet pics",
];

export const JagHarAldrig = () => {
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
        JAG HAR ALDRIG...
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
