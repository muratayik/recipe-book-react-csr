const AuthFormEmail = ({ register, errors }) => {
  return (
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        {...register("email", {
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === "required" && (
        <span className="text-danger">Email is required</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className="text-danger">Please enter a valid email</span>
      )}
    </div>
  );
};

export default AuthFormEmail;
