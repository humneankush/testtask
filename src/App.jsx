// Redux Hooks allow us to retrieve data from the store and dispatch actions to update the store with useDispatch() and useSelector()

import axios, { Axios } from "axios";
import { useState } from "react";
import "./index.css";
import { Redirect } from "react-router-dom";
const App = () => {
  const [emailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });
  console.log(emailPassword)

  const checkData = (email, password, emailPassword) => {
    console.log(emailPassword);
    if (email === emailPassword.email && password === emailPassword.password) {
      window.location.replace("/list");
    } else {
      window.location.replace("/");

      console.log("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.get("http://localhost:8000/users");
    console.log(user)
    const { email, password } = user.data[0];
    console.log(email,password)
    if (email === emailPassword.email && password === emailPassword.password) {
        window.location.replace("/list");
      } else {
        window.location.replace("/");
  
        console.log("error");
      }

    console.log(emailPassword);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmailPassword({
      ...emailPassword,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={emailPassword.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={emailPassword.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
