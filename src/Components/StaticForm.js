import React from "react";
import { useState, useEffect } from "react";

function StaticForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const error = {};
    // const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "username is required";
    }
    if (!values.email) {
      error.email = "email is required";
    }
    if (!values.password) {
      error.password = "password is required";
    }

    return error;
  };

  const handleChange = (e) => {
    console.log(formValues);
    const { name, value } = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div>
      <pre>{JSON.stringify(formValues, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>HTML STATIC FORM</h1>
        <div className="field">
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            name="username"
            values={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className="field">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            name="email"
            values={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="text"
            name="password"
            values={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StaticForm;
