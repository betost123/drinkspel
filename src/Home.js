import { Button, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#2F4858", height: "100vh", padding: 24 }}>
      <Typography
        style={{
          fontSize: 36,
          textAlign: "center",
          color: "#E5E5E5",
          fontWeight: 700,
          marginTop: 50,
        }}
      >
        DRINKSPEL
      </Typography>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/bodytwister")}
        fullWidth
      >
        BODY TWISTER
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/jagharaldrig")}
        fullWidth
      >
        JAG HAR ALDRIG
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("./treman")}
        fullWidth
      >
        TREMAN
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/alias")}
        fullWidth
      >
        ALIAS
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("./pekleken")}
        fullWidth
      >
        PEKLEKEN
      </Button>
      <Button
        style={{
          backgroundColor: "#5C6678",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/who")}
        disabled
        fullWidth
      >
        VEM DÄR (RUSTET)
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/konka")}
        fullWidth
      >
        Konka
      </Button>
      <Button
        style={{
          backgroundColor: "#C4B5A6",
          color: "#000",
          marginTop: 24,
          padding: 16,
        }}
        onClick={() => navigate("/moral")}
        fullWidth
      >
        Moral
      </Button>
    </div>
  );
};
