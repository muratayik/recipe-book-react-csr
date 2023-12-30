import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import LayoutPage from "./pages/LayoutPage";
import FavoritePage from "./pages/FavoritePage";
import LoginPage from "./pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/category" />,
  },
  {
    path: "category",
    element: (
      <LayoutPage>
        <CategoryListPage />
      </LayoutPage>
    ),
  },
  {
    path: "favorite",
    element: (
      <LayoutPage>
        <FavoritePage />
      </LayoutPage>
    ),
  },
  {
    path: "login",
    element: (
      <LayoutPage>
        <LoginPage />
      </LayoutPage>
    ),
  },
]);
