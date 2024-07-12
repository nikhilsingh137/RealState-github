import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./component/About";
import SerachFilterData from "./component/SerachFilterData";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:userData" element={<SerachFilterData />} />
      <Route path="/about/:userAbout" element={<About />} />
    </Routes>
  </Router>
);

export default AppRouter;
