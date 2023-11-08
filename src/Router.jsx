import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main/MainPage";
import MentoringPage from "./pages/mentoring/MentoringPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/mentors", element: <MentoringPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
