import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as AuthActions from "../store/auth/auth.actions";
import * as AuthSelectors from "../store/auth/auth.selectors";

import AuthForm from "../components/auth-form";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.selectAuthIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/category");
    }
  }, [isLoggedIn, navigate]);

  const onFormSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    dispatch(AuthActions.login({ email, password, rememberMe }));
  };

  return (
    <div>
      <AuthForm operation="login" onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default LoginPage;
