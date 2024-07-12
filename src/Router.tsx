import { createHashRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import SerachFilterData from "./component/SerachFilterData";
import About from "./component/About";

const router = createHashRouter([
  {
    path: "/RealState-github",
    element: (
      <>
        <Homepage />
      </>
    ),
  },
  {
    path: "/:userData",
    element: (
      <>
        <SerachFilterData />
      </>
    ),
  },
  {
    path: "/about/:userAbout",
    element: <About />,
  },
]);

export default router;
