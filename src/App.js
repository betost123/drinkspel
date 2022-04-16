import logo from "./logo.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BodyTwister } from "./BodyTwister";
import { JagHarAldrig } from "./JagHarAldrig";
import { Alias } from "./Alias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bodytwister' element={<BodyTwister />} />
        <Route path='/jagharaldrig' element={<JagHarAldrig />} />
        <Route path='/alias' element={<Alias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;