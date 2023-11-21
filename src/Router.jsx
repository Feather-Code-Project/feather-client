import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main/MainPage";
import CodeReviewPage from "./pages/codeReview/CodeReviewPage";
import MentoringPage from "./pages/mentoring/MentoringPage";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/codereview", element: <CodeReviewPage /> },
        { path: "/mentors", element: <MentoringPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
