import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import { useFormik } from "formik";
import { loginRequest } from "../http/requests";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  const formik = useFormik({
    initialValues: { 
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm })  => {
      console.log("values",values)
      alert(JSON.stringify(values, null, 2));
     loginRequest(values);
     navigate('/profile')
      resetForm()
    },
    
  });

  return (
    <div className="d-flex align-items-center justify-content-center" style={{marginTop:'50px'}}>
      <form onSubmit={formik.handleSubmit}>
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
        </div><br/>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button  type='button' style = {{ marginLeft:'20px' }} className="btn btn-primary" onClick={()=>{navigate('/registration')}}>
          Registeration
        </button>
      </form>
    </div>
  );
};
