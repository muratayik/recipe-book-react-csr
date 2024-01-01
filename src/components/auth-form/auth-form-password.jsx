const AuthFormPassword = ({ register, errors }) => {
  return (
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        {...register("password", { required: true, minLength: 6 })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password?.type === "required" && (
        <span className="text-danger">Password is required</span>
      )}
      {errors.password?.type === "minLength" && (
        <span className="text-danger">
          Password must be at least 6 characters
        </span>
      )}
    </div>
  );
};

export default AuthFormPassword;
