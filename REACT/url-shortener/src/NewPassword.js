import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export function NewPassword() {
  const history = useHistory();
  const { userid, token } = useParams();

  const [passwordmatch, setPasswordmatch] = useState(null);
  const [passwordupdated, setPasswordUpdated] = useState(false);
  const [tokenexpired, setTokenExpired] = useState(false);

  const handleSubmit = (newpassword) => {
    // eslint-disable-next-line no-console
    if (newpassword.password_1 !== newpassword.password_2) {
      setPasswordmatch(false);
      return;
    }
    setPasswordmatch(true);

    const info = newpassword;
    fetch(`${API}/reset-password-confirmation/${userid}/${token}`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "Password updated successfully") {
          setPasswordUpdated(true);
        }
        if (
          res.message === "Token expired" ||
          res.message === "Invalid reset password request from user" ||
          res.message === "Invalid reset password Token does not match"
        ) {
          setTokenExpired(true);
        }
      });
  };

  const SignupValidationSchema = yup.object({
    password_1: yup
      .string()
      .required("Required")
      .min(8, "Atlease 8 characters needed"),

    password_2: yup
      .string()
      .required("Required")
      .min(8, "Atlease 8 characters needed"),
  });

  const formik = useFormik({
    initialValues: {
      password_1: "",
      password_2: "",
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: SignupValidationSchema,
    onSubmit: (newpassword) => {
      handleSubmit(newpassword);
    },
  });
  return (
    <div className="container">
      {passwordupdated === false && tokenexpired === false ? (
        <div>
          <h2>Please set your new Password</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              name="password_1"
              label="New Password"
              type="password"
              id="password_1"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password_1}
              onBlur={formik.handleBlur}
              error={formik.touched.password_1 && !!formik.errors.password_1}
              helperText={
                formik.touched.password_1 && formik.errors.password_1
                  ? formik.errors.password_1
                  : ""
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password_2"
              label="Confirm Password"
              type="password"
              id="password_2"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password_2}
              onBlur={formik.handleBlur}
              error={formik.touched.password_2 && !!formik.errors.password_2}
              helperText={
                formik.touched.password_2 && formik.errors.password_2
                  ? formik.errors.password_2
                  : ""
              }
            />

            {passwordmatch === false ? (
              <span style={{ color: "red" }}>Passwords do not match</span>
            ) : (
              ""
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Set New Password
            </Button>
          </form>
        </div>
      ) : passwordupdated === true ? (
        <div>
          <span style={{ color: "green", fontSize: "20px" }}>
            Password updated successfully
          </span>
          <br></br>
          <Button
            variant="contained"
            style={{ margin: "10px" }}
            onClick={() => history.push("/login")}
          >
            GO BACK TO LOGIN PAGE
          </Button>
        </div>
      ) : (
        <div>
          <span style={{ color: "green", fontSize: "20px" }}>
            Link Expired, please try to create a new password reset link
          </span>
          <br></br>
          <Button
            variant="contained"
            style={{ margin: "10px" }}
            onClick={() => history.push("/forgotpassword")}
          >
            GO BACK TO FORGOT PASSWORD PAGE
          </Button>
        </div>
      )}
    </div>
  );
}
