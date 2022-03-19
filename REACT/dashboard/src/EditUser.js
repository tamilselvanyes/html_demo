import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { userValidationSchema } from "./AddNewUser";
import { useFormik } from "formik";
import { API } from "./global.js";
import { context } from "./App";
import { useContext } from "react";

export function EditUser() {
  const [open] = [useContext(context)[4]];
  return (
    <div
      className="edituser-total"
      style={{
        marginLeft: open ? "240px" : "70px",
        marginTop: "40px",
        padding: "10px",
      }}
    >
      <EditUserForm />
    </div>
  );
}

function EditUserForm() {
  const [currentuser] = [useContext(context)[0]];

  const editUser = (updatedUser) => {
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /movies
    fetch(`${API}/${currentuser.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/dashboard"));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: currentuser.name,
      email: currentuser.email,
      phone: currentuser.phone,
      profilepic: currentuser.profilepic,
      joiningdate: currentuser.joiningdate,
      totalexp: currentuser.totalexp,
      salarymonthly: currentuser.salarymonthly,
      designation: currentuser.designation,
    },
    validationSchema: userValidationSchema,
    onSubmit: (updatedUser) => {
      editUser(updatedUser);
    },
  });
  console.log(formik);

  const history = useHistory();

  return (
    <div className="addnew-user">
      <h3 className="addtext">Edit User</h3>

      <form onSubmit={formik.handleSubmit}>
        {console.log(formik.values.name)}
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
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
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
          Update user
        </Button>
      </form>
    </div>
  );
}
