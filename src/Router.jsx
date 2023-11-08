import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main/MainPage";
import CodeReviewPage from "./pages/codeReview/CodeReviewPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/codereview", element: <CodeReviewPage /> },
    ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
