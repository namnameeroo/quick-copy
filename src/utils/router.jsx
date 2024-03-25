import BoardPage from "../pages/BoardPage";
import ThemesPage from "../pages/ThemesPage";

export const paths = [
  {path: "/", element: <></>},
  {path: "/theme-page", element: <ThemesPage />},
  {path: "/board/:boardId", element: <BoardPage />},
];
