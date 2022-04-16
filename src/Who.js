import { Button, IconButton, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import tubis from "./tubis.png";
import betty from "./betty.png";
import bob from "./bob.png";
import gauss from "./gauss.png";
import betty2 from "./bettys2.png";
import vilma from "./vilma.png";
import annutt from "./annutt.png";
import bea from "./bea.png";
import turbo2 from "./turbo2.png";
import diddi from "./diddi.png";
import neo from "./neo.png";
import sab from "./sab.png";
import turbo3 from "./turbo3.png";
import axxe from "./axxe.png";
import keso from "./keso.png";
import papi from "./papi.png";
import reekan from "./reekan.png";
import reekan2 from "./reekan2.png";
import fanny from "./fanny.png";
import elma from "./elma.png";
import pelvis from "./pelvis.png";
import bea2 from "./bea2.png";
import axxe2 from "./axxe2.png";
import turbo4 from "./turbo4.png";
import betty3 from "./betty3.png";
import elma2 from "./elma2.png";
import keso2 from "./keso2.png";
import elma3 from "./elma3.png";
import betty4 from "./betty4.png";
import get from "./get.png";
import olala from "./olala.png";
import lajv from "./lajv.png";
import hemsan from "./hemsan.png";
import hemsan2 from "./hemsan2.png";
import charlie from "./charlie.png";
import eminem from "./eminem.png";
import eminem2 from "./eminem2.png";
import papi3 from "./papi3.png";
import flame3 from "./flame3.png";
import axxe3 from "./axxe3.png";
import flame4 from "./flame4.png";
import björis from "./björis.png";
import elma4 from "./elma4.png";
import vilmis from "./vilmis.png";
import rolf from "./rolf.png";
import tubis2 from "./tubis2.png";
import milko from "./milko.png";
import gn from "./gn.png";
import tubis3 from "./tubis3.png";
import echoff from "./echoff.png";
import iv from "./iv.png";
import gp from "./gp.png";
import limpan from "./limpan.png";
import challe from "./challe.png";
import tvaland from "./tvaland.png";
import tubro5 from "./turbo5.png";
import elma5 from "./elma5.png";
import elma6 from "./elma6.png";
import jolt from "./jolt.png";
import hedda from "./hedda.png";
import hedda2 from "./hedda2.png";
import balle from "./balle.png";
import gauss2 from "./gauss2.png";
import denice from "./denice.png";
import steffo from "./steffo.png";
import quila from "./quila.png";
import random from "./random.png";

const imgData = [
  tubro5,
  random,
  quila,
  steffo,
  denice,
  balle,
  gauss2,
  elma5,
  elma6,
  jolt,
  hedda,
  hedda2,
  tubis,
  tvaland,
  challe,
  echoff,
  gp,
  iv,
  tubis2,
  tubis3,
  gn,
  rolf,
  milko,
  vilmis,
  elma4,
  björis,
  flame4,
  axxe3,
  flame3,
  papi3,
  eminem,
  eminem2,

  hemsan2,
  charlie,
  hemsan,
  lajv,
  olala,
  get,
  betty,
  bob,
  gauss,
  betty2,
  vilma,
  annutt,
  bea,
  turbo2,
  diddi,
  neo,
  sab,
  turbo3,
  axxe,
  keso,
  papi,
  reekan,
  reekan2,
  fanny,
  elma,
  pelvis,
  bea2,
  axxe2,
  turbo4,
  betty3,
  elma2,
  keso2,
  elma3,
  betty4,
  limpan,
];

export const Who = () => {
  const navigate = useNavigate();

  const [imgIndex, setImgIndex] = React.useState(
    Math.floor(Math.random() * imgData.length + 1)
  );
  const onClickNext = () => {
    setImgIndex(Math.floor(Math.random() * imgData.length));
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
        VEM DÄR
      </Typography>
      <img src={imgData[imgIndex]} alt='img' style={{ width: "95%" }} />
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
