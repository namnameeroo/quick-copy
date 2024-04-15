import BoardPage from "../pages/BoardPage";
import MainPage from "../pages/MainPage";
import ThemesPage from "../pages/ThemesPage";

export const paths = [
  {path: "/", element: <MainPage />},
  {path: "/theme-page", element: <ThemesPage />},
  {path: "/board/:boardId", element: <BoardPage />},
];
