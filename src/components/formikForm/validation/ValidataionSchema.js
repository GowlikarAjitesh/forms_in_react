import * as Yup from "yup";

const ValidatationSchema = Yup.object({
  username: Yup.string()
    .required("Required")
    .min(3, "Min Length of 3 is expected"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),

  age: Yup.number()
    .required("Required")
    .min(5, "Min Age of 5 is expected"),

  gender: Yup.string().required("Required"),

  password: Yup.string()
    .required("Required")
    .min(6, "Min Length of 6 is expected"),

  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export default ValidatationSchema;
