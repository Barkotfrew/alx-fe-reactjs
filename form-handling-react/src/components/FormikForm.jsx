import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Form Data:", values);

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })
          .then((res) => res.json())
          .then((data) => console.log("API Response:", data))
          .catch((err) => console.error(err));

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2>User Registration (Formik)</h2>

          <div>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
