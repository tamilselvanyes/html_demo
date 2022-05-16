import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export function AuthenticationPage() {
  const [mailsent, setMailSent] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const InputValidationSchema = yup.object({
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
    },
    validationSchema: InputValidationSchema,
    onSubmit: (input) => {
      submitInput(input);
    },
  });

  function submitInput(input) {
    console.log(input);
    fetch(`${API}/gen-otp`, {
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
    <div className="main-div">
      <h2>Two Step Authentication</h2>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          label="E-mail Address"
          id="email"
          name="email"
          margin="dense"
          sx={{ width: "100%" }}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
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
    </div>
  );
}
