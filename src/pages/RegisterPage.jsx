import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as AuthActions from "../store/auth/auth.actions";
import * as AuthSelectors from "../store/auth/auth.selectors";

import AuthForm from "../components/auth-form";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.selectAuthIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/category");
    }
  }, [isLoggedIn, navigate]);

  const onFormSubmit = (formData) => {
    const { email, password, username } = formData;
    dispatch(AuthActions.register({ email, username, password }));
  };

  return (
    <div>
      <AuthForm operation="register" onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default RegisterPage;
