import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./component/About";
import SerachFilterData from "./component/SerachFilterData";

const AppRouter = () => (
  <BrowserRouter basename="/RealState-github">
    <Routes>
      <Route path="/RealState-github" element={<Homepage />} />
      <Route path="/:userData" element={<SerachFilterData />} />
      <Route path="/about/:userAbout" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
