import "./App.css";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BodyTwister } from "./BodyTwister";
import { JagHarAldrig } from "./JagHarAldrig";
import { Alias } from "./Alias";
import { Who } from "./Who";
import { Treman } from "./Treman";
import { Pekleken } from "./Pekleken";
import { Konka } from "./Konka";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bodytwister' element={<BodyTwister />} />
        <Route path='/jagharaldrig' element={<JagHarAldrig />} />
        <Route path='/alias' element={<Alias />} />
        <Route path='/who' element={<Who />} />
        <Route path='/treman' element={<Treman />} />
        <Route path='/pekleken' element={<Pekleken />} />
        <Route path='/konka' element={<Konka />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
