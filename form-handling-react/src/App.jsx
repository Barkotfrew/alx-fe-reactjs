import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "50px" }}>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
};

export default App;
