import React from "react";
import { useFormik } from "formik";
import "./FormikForms.css";
import ValidatationSchema from "./validation/ValidataionSchema.js";
export default function FormikForms() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ValidatationSchema,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        console.log("User Data sent successfully...", values);
        actions.setSubmitting(false);
        actions.resetForm();
      }, 3000);
    },
  });
  return (
    <div className="FormikForm-container">
      <h1>Formik and Yup Form Demo</h1>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <p className="error">{formik.errors.username}</p>
        )}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-Mail ID"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="error">{formik.errors.email}</p>
        )}
        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your Age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.touched.age && formik.errors.age && (
          <p className="error">{formik.errors.age}</p>
        )}
        <label>Gender</label>
        <div className="gender-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formik.values.gender === "male"}
              onChange={formik.handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formik.values.gender === "female"}
              onChange={formik.handleChange}
            />
            Female
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <p className="error">{formik.errors.gender}</p>
        )}

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="error">{formik.errors.password}</p>
        )}
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Re-enter your password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="error">{formik.errors.confirmPassword}</p>
        )}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
