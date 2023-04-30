import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BorderBoard from "./pages/borad/BorderBoard";
import LoadingBoard from "./pages/borad/LoadingBoard";
import Border1 from "./pages/borderAni/Border1";
import Dropdown1 from "./pages/dropdown/Dropdown1";
import Loading1 from "./pages/loading/Loading1";
import Loading2 from "./pages/loading/Loading2";
import Loading3 from "./pages/loading/Loading3";
import Main from "./pages/main/Main";

const Router = () => {
  const ROUTER = createBrowserRouter([
    { path: "/", element: <Main /> },
    {
      path: "/loadingBoard",
      element: <LoadingBoard />,
      children: [
        { path: "", element: <Loading1 /> },
        { path: "2", element: <Loading2 /> },
        { path: "3", element: <Loading3 /> },
      ],
    },
    {
      path: "/borderBoard",
      element: <BorderBoard />,
      children: [
        {
          path: "",
          element: <Border1 />,
        },
      ],
    },
    {
      path:"/dropdown1",
      element:<Dropdown1 />
    }
  ]);
  return <RouterProvider router={ROUTER} />;
};

export default Router;
