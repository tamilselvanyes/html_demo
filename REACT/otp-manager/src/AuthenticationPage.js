import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { context } from "./App";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export function AuthenticationPage() {
  const [user] = [useContext(context)[0]];
  const history = useHistory();

  const [otpsent, setOTPSent] = useState(false);
  const [enterTOTP, setEnterTOPT] = useState(false);
  const disabledClassNameProps = { className: "Mui-disabled" };
  const [authenticator, setAuthenticator] = useState(null);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const InputValidationSchema = yup.object({
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
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

  //TOTP verification
  const TOTPValidationSchema = yup.object({
    totp: yup
      .string()
      .required()
      .max(6, "TOTP should only be six digit")
      .min(6, "TOTP should be 6 digit"),
  });
  const formik_totp = useFormik({
    initialValues: {
      totp: "",
    },
    validationSchema: TOTPValidationSchema,
    onSubmit: (input) => {
      console.log(input);
    },
  });

  //OTP verification
  const OTPValidationSchema = yup.object({
    email_otp: yup
      .string()
      .required()
      .max(6, "TOTP should only be six digit")
      .min(6, "TOTP should be 6 digit"),
    phone_otp: yup
      .string()
      .required()
      .max(6, "TOTP should only be six digit")
      .min(6, "TOTP should be 6 digit"),
  });
  const formik_otp = useFormik({
    initialValues: {
      email_otp: "",
      phone_otp: "",
    },
    validationSchema: OTPValidationSchema,
    onSubmit: (input) => {
      submitOTP(input);
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
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "OTP sent successfully") {
          setOTPSent(true);
        } else {
          setOTPSent(false);
        }
      });
  }

  function submitOTP(input) {
    input.email = user;
    console.log(input);
    fetch(`${API}/otp/verify-otp`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  }

  return (
    <div className="login-main">
      <h2>
        <span style={{ color: "orange" }}>Two Step</span>{" "}
        <span style={{ color: "red" }}>Authentication</span>
      </h2>
      {otpsent === false ? (
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
      ) : (
        <form onSubmit={formik_otp.handleSubmit}>
          <TextField
            type="text"
            label="Enter Email OTP"
            id="email_otp"
            name="email_otp"
            margin="dense"
            sx={{ width: "100%" }}
            onChange={formik_otp.handleChange}
            value={formik_otp.values.email_otp}
            onBlur={formik_otp.handleBlur}
            error={formik_otp.touched.email_otp && formik_otp.errors.email_otp}
            helperText={
              formik_otp.touched.email_otp && formik_otp.errors.email_otp
                ? formik_otp.errors.email_otp
                : ""
            }
          />
          <TextField
            type="text"
            label="Enter Mobile OTP"
            id="phone_otp"
            name="phone_otp"
            margin="dense"
            sx={{ width: "100%" }}
            onChange={formik_otp.handleChange}
            value={formik_otp.values.phone_otp}
            onBlur={formik_otp.handleBlur}
            error={formik_otp.touched.phone_otp && formik_otp.errors.phone_otp}
            helperText={
              formik_otp.touched.phone_otp && formik_otp.errors.phone_otp
                ? formik_otp.errors.phone_otp
                : ""
            }
          />
          <Button
            variant="outlined"
            type="Submit"
            color="success"
            sx={{ margin: "20px" }}
          >
            Verify OTP
          </Button>
        </form>
      )}
      {authenticator !== null ? (
        <div className="main-division">
          {enterTOTP === false ? (
            <div>
              <h4>
                TOTP verfication, Please install Google Authenticator and Scan
                the QR code or enter the below code
              </h4>
              <img src={authenticator.data_url} alt="authentication" />
              <p>Google Authenticator code: {authenticator.secret}</p>
              <Button
                variant="outlined"
                color="success"
                sx={{ margin: "20px" }}
                onClick={() => setEnterTOPT(true)}
              >
                Enter TOTP
              </Button>
            </div>
          ) : (
            <div>
              {" "}
              <form onSubmit={formik_otp.handleSubmit}>
                <TextField
                  type="text"
                  label="Enter TOTP"
                  id="totp"
                  name="totp"
                  margin="dense"
                  sx={{ width: "100%" }}
                  onChange={formik_totp.handleChange}
                  value={formik_totp.values.totp}
                  onBlur={formik_totp.handleBlur}
                  error={formik_totp.touched.totp && formik_totp.errors.totp}
                  helperText={
                    formik_totp.touched.totp && formik_totp.errors.totp
                      ? formik_totp.errors.totp
                      : ""
                  }
                />
                <Button
                  variant="outlined"
                  type="Submit"
                  color="success"
                  sx={{ margin: "20px" }}
                >
                  Verify TOTP
                </Button>
              </form>{" "}
            </div>
          )}
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
