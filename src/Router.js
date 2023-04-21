import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBoard from "./pages/borad/LoadingBoard";
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
        { path: "1", element: <Loading1 /> },
        { path: "2", element: <Loading2 /> },
        { path: "3", element: <Loading3 /> },
      ],
    },
  ]);
  return <RouterProvider router={ROUTER} />;
};

export default Router;
