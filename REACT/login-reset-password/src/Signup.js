import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export function Signup() {
  const history = useHistory();

  const handleSubmit = (newUser) => {
    // eslint-disable-next-line no-console
    const info = newUser;
    fetch(`${API}/signupcheck`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.acknowledged === true) {
          history.push("./login");
        }
      });
  };

  const SignupValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email")
      .required()
      .min(5, "Need a longer email")
      .test(
        "Unique Email",
        "email already in use try logging in", // <- key, message
        function (value) {
          return new Promise((resolve, reject) => {
            let info = { email: value };
            fetch(`${API}/email`, {
              method: "POST",
              body: JSON.stringify(info),
              headers: { "Content-type": "application/json" },
            })
              .then((response) => response.json())
              .then((res) => {
                if (res.message === "User already exists") {
                  resolve(false);
                } else if (res.message === "email available") {
                  resolve(true);
                } else {
                  resolve(false);
                }
              });
          });
        }
      ),
    password: yup.string().required().min(8, "Atlease 8 characters needed"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: SignupValidationSchema,
    onSubmit: (newUser) => {
      handleSubmit(newUser);
    },
  });

  return (
    <div className="login-main">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
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
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && !!formik.errors.password}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
        </form>
      </Box>
      <Link to="./login" variant="body2">
        {"Have an account?Login"}
      </Link>
    </div>
  );
}
