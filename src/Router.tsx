import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./component/About";
import SerachFilterData from "./component/SerachFilterData";

const router = (
  <Router>
    <Routes>
      <Route path="/RealState-github" element={<Homepage />} />
      <Route
        path="/RealState-github/:userData"
        element={<SerachFilterData />}
      />
      <Route path="/RealState-github/about/:userAbout" element={<About />} />
    </Routes>
  </Router>
);

export default router;
