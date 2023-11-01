import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main/MainPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <MainPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
