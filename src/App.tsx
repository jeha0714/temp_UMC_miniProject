import "./assets/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import HomePage from "./Page/HomePage";
import ClubListPage from "./Page/ClubListPage";
import IntroPage from "./Page/IntroPage";
import InfoPage from "./Page/InfoPage";
import ClubSearchPage from "./Page/ClubSearchPage";
import ClubMathcing from "./Page/ClubMatching";
import ClubIntroDetailPage from "./Page/ClubIntroDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/introweb",
        element: <IntroPage />,
      },
      {
        path: "/introweb/:tab",
        element: <IntroPage />,
      },
      {
        path: "/clubintro",
        element: <ClubListPage />,
      },
      {
        path: "/clubintrodetail/:clubId",
        element: <ClubIntroDetailPage />,
      },
      {
        path: "/clubintro/:tab",
        element: <ClubListPage />,
      },
      {
        path: "/clubmatching",
        element: <ClubMathcing />,
      },
      {
        path: "/clubmatching/:step",
        element: <ClubMathcing />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/infoweb",
        element: <InfoPage />,
      },
      {
        path: "/infoweb/:tab",
        element: <InfoPage />,
      },
      {
        path: "/clubsearch",
        element: <ClubSearchPage />,
      },
      {
        path: "/clubsearch/:keyword",
        element: <ClubSearchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
