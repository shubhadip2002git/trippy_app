import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Login from "../component/Login";
import Register from "../component/Register";

export default function SingUp() {
  const [currForm, setCurrFrom] = useState("login");

  const toggleForm = (formName) => {
    setCurrFrom(formName);
  };
  return (
    <>
      <Navbar />

      {currForm === "login" ? (
        <Login formSwicth={toggleForm} />
      ) : (
        <Register formSwicth={toggleForm} />
      )}
    </>
  );
}
