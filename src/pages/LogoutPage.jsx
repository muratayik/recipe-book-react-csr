import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as AuthSelectors from "../store/auth/auth.selectors";
import { logoutUser } from "../store/auth/auth.actions";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.selectAuthIsLoggedIn);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/category");
    }
  }, [isLoggedIn, navigate]);

  return <></>;
};

export default LogoutPage;
