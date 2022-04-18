import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { API } from "./global";
import * as yup from "yup";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export function UrlShortener({ user }) {
  const URLValidationSchema = yup.object({
    url: yup
      .string()
      .url("Invalid URL")
      .required()
      .min(5, "Need a longer email"),
  });

  const [shorturl, setshorturl] = useState(null);

  const formik = useFormik({
    initialValues: {
      url: "",
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: URLValidationSchema,
    onSubmit: (url) => {
      fetch(`${API}/urlshortener`, {
        method: "POST",
        body: JSON.stringify(url),
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => setshorturl(result.message));
    },
  });
  return (
    <div>
      {user !== "Login" ? (
        <div>
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
              <CodeIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Please enter your URL
            </Typography>

            <form style={{ width: "50%" }} onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="url"
                label="Url Address "
                name="url"
                autoComplete="url"
                autoFocus
                type="url"
                onChange={formik.handleChange}
                value={formik.values.url}
                onBlur={formik.handleBlur}
                error={formik.touched.url && !!formik.errors.url}
                helperText={
                  formik.touched.url && formik.errors.url
                    ? formik.errors.url
                    : ""
                }
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "50%" }}
              >
                Get Shortened URL
              </Button>
            </form>
          </Box>
          {shorturl ? (
            <div className="short-url">
              <h3>
                {shorturl}
                <Button
                  onClick={() => navigator.clipboard.writeText(`${shorturl}`)}
                >
                  <ContentCopyIcon />
                </Button>
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="logintext">
          <p>
            <b>Login to use URL shortener</b>
          </p>
        </div>
      )}
    </div>
  );
}
