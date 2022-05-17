import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export function AuthenticationPage({ user }) {
  const [mailsent, setMailSent] = useState(false);
  const disabledClassNameProps = { className: "Mui-disabled" };
  const [authenticator, setAuthenticator] = useState(null);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const InputValidationSchema = yup.object({
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });
  const formik = useFormik({
    initialValues: {
      email: user,
      phoneNumber: "",
    },
    validationSchema: InputValidationSchema,
    onSubmit: (input) => {
      submitInput(input);
    },
  });

  function getAuthenticator() {
    const data = { email: user };
    console.log(data);
    fetch(`${API}/otp/totp-secret`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((final_data) => {
        console.log(final_data);
        setAuthenticator(final_data);
      });
  }

  useEffect(() => {
    getAuthenticator();
  }, []);

  function submitInput(input) {
    console.log(input);
    fetch(`${API}/otp/gen-otp`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.message === "Success") {
        setMailSent(true);
      } else {
        setMailSent(false);
      }
    });
  }

  return (
    <div className="login-main">
      <h2>Two Step Authentication</h2>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          {...disabledClassNameProps}
          type="text"
          label="E-mail Address"
          id="email"
          name="email"
          margin="dense"
          sx={{ width: "100%" }}
          value={user}
          inputProps={{ readOnly: true }}
          InputProps={{ ...disabledClassNameProps }}
        />
        <br></br>

        <TextField
          type="text"
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          margin="dense"
          sx={{ width: "100%" }}
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          helperText={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : ""
          }
        />
        <br></br>
        <Button
          variant="outlined"
          type="Submit"
          color="success"
          sx={{ margin: "20px" }}
        >
          Get OTP
        </Button>
      </form>
      {authenticator !== null ? (
        <img src={authenticator.data_url} alt="authentication" />
      ) : (
        " "
      )}
    </div>
  );
}
