import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";
import { context } from "./App";
import { useContext } from "react";

export const userValidationSchema = yup.object({
  name: yup.string().required("It will be good to have your name"),
  email: yup
    .string()
    .required("Why not fill your email ? ")
    .min(4, "Need a longer Poster"),
  phone: yup.number().required("WHy not give your mobile number"),
  profilepic: yup
    .string()
    .required("why not give your profile pic address")
    .min(10, "Need a address"),
  joiningdate: yup.date().required(),
  totalexp: yup.number().required("why not give your total experience"),
  salarymonthly: yup.number().required("why not fill your salary"),
});

export function AddNewUser() {
  const [open, listupdated, setListupdated, setCurrentUser] = [
    useContext(context)[4],
    useContext(context)[6],
    useContext(context)[7],
    useContext(context)[1],
  ];
  const history = useHistory();
  const addUser = (newuser) => {
    // 1. method must be POST
    // 2. body - JSON data
    // 3. headers - JSON data
    newuser.salaryannualy = newuser.salarymonthly * 12;
    newuser.country = "India";
    console.log(newuser);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setCurrentUser(null);
      setListupdated(!listupdated);
      history.push("/dashboard");
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      profilepic: "",
      joiningdate: "",
      totalexp: "",
      salarymonthly: "",
      designation: "",
    },

    validationSchema: userValidationSchema,
    onSubmit: (newuser) => {
      addUser(newuser);
    },
  });

  return (
    <div
      className="edituser-total"
      style={{
        marginLeft: open ? "240px" : "70px",
        marginTop: "40px",
        padding: "10px",
      }}
    >
      <div className="addnew-user">
        <h3 className="addtext">Add User</h3>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="text"
            label="Name"
            id="name"
            name="name"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />
          <TextField
            type="text"
            label="E-mail"
            id="email"
            name="email"
            margin="dense"
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

          <TextField
            type="text"
            label="Phone Number"
            id="phone"
            name="phone"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone}
            helperText={
              formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : ""
            }
          />

          <TextField
            type="text"
            label="Profile Picture"
            id="profilepic"
            name="profilepic"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.profilepic}
            onBlur={formik.handleBlur}
            error={formik.touched.profilepic && formik.errors.profilepic}
            helperText={
              formik.touched.profilepic && formik.errors.profilepic
                ? formik.errors.profilepic
                : ""
            }
          />

          <TextField
            type="date"
            label="Joining Date"
            inputProps={{ style: { paddingLeft: "150px" } }}
            id="joiningdate"
            name="joiningdate"
            margin="dense"
            onChange={formik.handleChange}
            value={undefined}
            onBlur={formik.handleBlur}
            error={formik.touched.joiningdate && formik.errors.joiningdate}
            helperText={
              formik.touched.joiningdate && formik.errors.joiningdate
                ? formik.errors.joiningdate
                : ""
            }
          />

          <TextField
            type="number"
            label="Total Experience"
            id="totalexp"
            name="totalexp"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.totalexp}
            onBlur={formik.handleBlur}
            error={formik.touched.totalexp && formik.errors.totalexp}
            helperText={
              formik.touched.totalexp && formik.errors.totalexp
                ? formik.errors.totalexp
                : ""
            }
          />

          <TextField
            type="number"
            label="Monthly Salary"
            id="salarymonthly"
            name="salarymonthly"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.salarymonthly}
            onBlur={formik.handleBlur}
            error={formik.touched.salarymonthly && formik.errors.salarymonthly}
            helperText={
              formik.touched.salarymonthly && formik.errors.salarymonthly
                ? formik.errors.salarymonthly
                : ""
            }
          />

          <TextField
            type="text"
            label="Designation"
            id="designation"
            name="designation"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.designation}
            onBlur={formik.handleBlur}
            error={formik.touched.designation && formik.errors.designation}
            helperText={
              formik.touched.designation && formik.errors.designation
                ? formik.errors.designation
                : ""
            }
          />

          <Button variant="outlined" type="Submit" color="success">
            Add User to the list
          </Button>
        </form>
      </div>
    </div>
  );
}
