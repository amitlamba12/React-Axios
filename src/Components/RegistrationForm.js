import React from "react";
import { useFormik } from "formik";
import { registerRequest } from "../http/requests";
import {useNavigate} from 'react-router-dom'
function RegistrationForm() {
  const navigate=useNavigate()
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 5) {
      errors.name = "Must be 5 characters or less";
    }

    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length > 6) {
      errors.address = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNumber: "",
    },

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      registerRequest(values)
      navigate('/login')
      resetForm()
    },
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ marginTop: "50px" }}
    >
      <form onSubmit={formik.handleSubmit}>
        {/* <h1>Please Registeration Here</h1> */}
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <div className="form-group">
            <label htmlFor="adddess">Address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pno">Phone Number :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter PhoneNo"
              id="PNo"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <br />

        <button type="submit" className="btn btn-primary" >
          Submit
        </button >
      </form>
    </div>
  );
}

export default RegistrationForm;
