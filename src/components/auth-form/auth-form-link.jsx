import { Link } from "react-router-dom";

const AuthFormLink = ({ operation }) => {
  if (operation === "login") {
    return (
      <span className="text-muted">
        Have no account?{" "}
        <Link aria-current="page" to="/register">
          Register
        </Link>
      </span>
    );
  }

  return (
    <span className="text-muted">
      Already have an account?{" "}
      <Link aria-current="page" to="/login">
        Login
      </Link>
    </span>
  );
};

export default AuthFormLink;
