import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import LayoutPage from "./pages/LayoutPage";
import FavoritePage from "./pages/FavoritePage";
import LoginPage from "./pages/LoginPage";
import MealListPage from "./pages/MealListPage";

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
    path: ":categoryPublidId/meals",
    element: (
      <LayoutPage>
        <MealListPage />
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
