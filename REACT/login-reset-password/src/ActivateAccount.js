import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";
import { useState } from "react";

export function ActivateAccount() {
  const user_id = useParams();
  const [accountActivated, setAccountActivated] = useState(false);
  const history = useHistory();
  const sentActivationRequest = (user_id) => {
    fetch(`${API}/activate-account/${user_id.user_id}`, {
      method: "POST",
      body: JSON.stringify(user_id),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          setAccountActivated(true);
        }
      });
  };

  return (
    <div className="login-main">
      {!accountActivated ? (
        <div>
          <h2>Please click the below link to activate your account</h2>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => sentActivationRequest(user_id)}
          >
            Activate Account
          </Button>
        </div>
      ) : (
        <div>
          <h1>Account Activated successfully please login</h1>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => history.push("/login")}
          >
            Go to Login Screen
          </Button>
        </div>
      )}
    </div>
  );
}
