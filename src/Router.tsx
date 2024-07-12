import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./component/About";
import SerachFilterData from "./component/SerachFilterData";

const AppRouter = () => (
  <HashRouter basename="/RealState-github">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:userData" element={<SerachFilterData />} />
      <Route path="/about/:userAbout" element={<About />} />
    </Routes>
  </HashRouter>
);

export default AppRouter;
