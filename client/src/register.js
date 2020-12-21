import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("localhost:3300/api/auth/register", user)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="customForm" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
