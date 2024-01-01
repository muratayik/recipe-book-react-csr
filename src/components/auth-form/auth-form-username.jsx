const AuthFormUsername = ({ register, errors }) => {
  return (
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        id="username"
        {...register("username", { required: true, minLength: 5 })}
        aria-invalid={errors.username ? "true" : "false"}
      />
      {errors.username?.type === "required" && (
        <span className="text-danger">Username is required</span>
      )}
      {errors.username?.type === "minLength" && (
        <span className="text-danger">
          Username must be at least 5 characters
        </span>
      )}
    </div>
  );
};

export default AuthFormUsername;
