import { useForm } from "react-hook-form";

import AuthFormEmail from "./auth-form.email";

import "./index.css";
import AuthFormPassword from "./auth-form-password";
import AuthFormRememberMe from "./auth-form-remember-me";
import AuthFormLink from "./auth-form-link";
import AuthFormUsername from "./auth-form-username";

const AuthForm = ({ operation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  const showUsernameField = operation === "register";
  const showRememberMe = operation !== "register";
  const submitButtonText = operation === "register" ? "Register" : "Login";

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-xs-12 col-md-6 col-lg-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <AuthFormEmail register={register} errors={errors} />

              {showUsernameField && (
                <AuthFormUsername register={register} errors={errors} />
              )}

              <AuthFormPassword register={register} errors={errors} />

              {showRememberMe && <AuthFormRememberMe register={register} />}

              <AuthFormLink operation={operation} />

              <div className="row justify-content-center p-2">
                <button
                  type="submit"
                  className="btn btn-primary submit-button submit-button"
                >
                  {submitButtonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
