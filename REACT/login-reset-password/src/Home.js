import { useHistory } from "react-router-dom";
export function Home() {
  const history = useHistory();
  return (
    <div className="login-main">
      <h2 className="login-success">
        Successfully logged in{" "}
        <button
          className="btn btn-primary"
          onClick={() => history.push("/login")}
        >
          Back to Login Page
        </button>
      </h2>
    </div>
  );
}
