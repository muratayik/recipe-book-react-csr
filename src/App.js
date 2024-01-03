import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";

import * as AuthActions from "./store/auth/auth.actions";
import * as AuthSelectors from "./store/auth/auth.selectors";
import * as FavoriteActions from "./store/favorite/favorite.actions";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(AuthSelectors.selectAuthIsLoggedIn);

  useEffect(() => {
    dispatch(AuthActions.autoLogin());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(FavoriteActions.fetchFavorites());
    } else {
      dispatch(FavoriteActions.resetFavorites());
    }
  }, [dispatch, isLoggedIn]);

  return <RouterProvider router={router} />;
}

export default App;
