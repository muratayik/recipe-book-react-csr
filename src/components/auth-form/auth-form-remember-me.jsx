const AuthFormRememberMe = ({ register }) => {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="rememberMe"
        {...register("rememberMe")}
      />
      <label className="form-check-label" htmlFor="rememberMe">
        Remember Me
      </label>
    </div>
  );
};

export default AuthFormRememberMe;
