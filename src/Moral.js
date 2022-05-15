import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const questionsData = [
  "får man kissa på sig hos nån annan",
  "får man snatta från en butik om man stått i kö i 20 min och ingen kommit till kassan",
  "får man sälja sex för pengar",
  "får man bjuda en vagan på ickeceganska mat om det inte märks om man slipper omstädligheter",
  "får man ha kvar tinder om man har flickvän men inte använder det",
  "får man sova över hos en kompis av motsatt kön om man har förhållande",
  "får man sova hos sin gamla kk för att man är arg på sin partner",
  "får man flirta för att få gratis drinkar om man har en partner",
  "får man ligga med sitt ex bästa kompis",
  "får man ligga med sin kompis ex",
  "får man kräva en vän på pengar om den förstört något hemma hos en",
  "får man lämna sin kompis om hon är jättefull och man vet att det kommer gå fel men kompisen går alltid fel så egentligen kan man inte rädda det",
  "får man lead någon on till att tro att det kan bli ett förhålklande när man vet att man inte vill ha nåt seriöst",
  "får man ligga med nån annan när man har en uttalad kk",
  "får man låtsas gilla en musiksmak för att få ligga",
  "får man knarkna och ljuga om det för sin partner",
  "får man säga att ens kompis kk är ful",
  "får man dejta flera samtidigt",
  "får man köra på en människa och flya om ingen ser men man vet att om man stannar och anmäler kommer man få minst 20 års fängelse",
  "får man sno från en rik om man vet att de har försäkring",
  "får man ha kompisar av m0otsatt kön om man har en partner",
  "får man umgås med folk man legat med om har en ny partner",
  "måste man berätta för sin partner att man legat med folk man umgås med",
  "får man kyssa någon om man har herpesutbrott",
  "får man snegla i nåns telefon när de smsar om man sitter bredvid",
  "får man gå igenom någon telefon om man kan koden och misstänker något",
  "får man dejta sin bästis syter/bror",
  "får man avbryta någons förhållande om det är ens släkting och man inser att det är fel partner",
  "får man skicka tillbaka maten tre gånger om man är missnöjd",
  ".får man skcika tillbaka maten för att den är äcklig",
  "får man säga att vinet är dålig om man inte gillar det vid ett provsmak",
  "får man returneraz kläder man bara använt en gång",
  "får man planka på en spårvagn",
  "får man neka om ens kompis åker dit för droger man också tagit",
  "får man ligga i ens kompis lägenhet när kompisen är däR",
  "får man ligga i ens kompis lägenhet",
  "får man ta någons oskuld om de är fulla och man själv är n ykter",
  "får man ligga med någon random när man ör nykter men de ör fulla",
  "Om du har fucking stånd, men asså aa",
  "Hur många örnar får plats på DIN krabba???",
  "får man stalka sitt ex",
  "får man ragga upp sitt ex kompisar",
  "får man säga att man är gravid trotsd att man inte är det men killen behöver skräpa sig",
];

export const Moral = () => {
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
        Moralfråga
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
