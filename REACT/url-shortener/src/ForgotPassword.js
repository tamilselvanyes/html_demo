import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function ForgotPassword() {
  const history = useHistory();

  const [mailsent, Setmailsent] = useState(false);
  const handleSubmit = (email) => {
    fetch(`${API}/reset-password`, {
      method: "POST",
      body: JSON.stringify(email),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "Mail sent") {
          Setmailsent(true);
        }
      });
  };

  const ForgotPasswordValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email")
      .required()
      .min(5, "Need a longer email")
      .test(
        "Unique Email",
        "Not registered or Invalid Email",
        function (value) {
          return new Promise((resolve, reject) => {
            let info = { email: value };
            fetch(`${API}/forgotpassword/email`, {
              method: "POST",
              body: JSON.stringify(info),
              headers: { "Content-type": "application/json" },
            })
              .then((response) => response.json())
              .then((res) => {
                if (res.message === "email exist") {
                  resolve(true);
                } else if (res.message === "email does not exist") {
                  resolve(false);
                } else {
                  resolve(false);
                }
              });
          });
        }
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: ForgotPasswordValidationSchema,
    onSubmit: (newUser) => {
      handleSubmit(newUser);
    },
  });
  return (
    <div>
      <div className="container">
        <h2>Reset Password</h2>
        {mailsent === false ? (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              id="email"
              label="Email Address "
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
            />
            <br></br>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get reset password link to this email
            </Button>
          </form>
        ) : (
          <div>
            <span style={{ color: "green", fontSize: "20px" }}>
              Reset Password link has been to sent to your email successfully
            </span>
            <br></br>
            <Button variant="contained" onClick={() => history.push("/login")}>
              GO BACK TO LOGIN PAGE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
