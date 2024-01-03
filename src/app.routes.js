import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import LayoutPage from "./pages/LayoutPage";
import FavoritePage from "./pages/FavoritePage";
import LoginPage from "./pages/LoginPage";
import MealListPage from "./pages/MealListPage";
import MealDetailPage from "./pages/MealDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";

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
    path: ":categoryPublicId/meals",
    element: (
      <LayoutPage>
        <MealListPage />
      </LayoutPage>
    ),
  },
  {
    path: ":mealPublicId/details",
    element: (
      <LayoutPage>
        <MealDetailPage />
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
  {
    path: "logout",
    element: (
      <LayoutPage>
        <LogoutPage />
      </LayoutPage>
    ),
  },
  {
    path: "register",
    element: (
      <LayoutPage>
        <RegisterPage />
      </LayoutPage>
    ),
  },
]);
