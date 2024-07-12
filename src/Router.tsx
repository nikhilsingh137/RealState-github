import { createHashRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import SerachFilterData from "./component/SerachFilterData";
import About from "./component/About";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Homepage />
      </>
    ),
  },
  {
    path: "/RealState-github/:userData",
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
