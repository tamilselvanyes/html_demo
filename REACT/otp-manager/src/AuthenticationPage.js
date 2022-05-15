import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";

export function AuthenticationPage() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const InputValidationSchema = yup.object({
    email: yup.email().required(),
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
  return (
    <div className="main-div">
      <h2>Please enter your email address</h2>
    </div>
  );
}
