import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export default function Login() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");




  return (
    <div className="login_nav">
      <h1 className="account_create">Create Account</h1>
      <form action="" onSubmit={() =>handleSubmit (e)}>

      <div className="login_all">
  
        <input
          className="login_user"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserame(e.target.value)}
        />{" "}
        <br />
        <input
          className="login_code"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
          className="login_cc"
          type="text"
          placeholder="password confirm"
          value={passwordconfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />{" "}
        <br />
        <button className="login_btn">Submit</button>
      </div>
      </form>

      <button></button>
    </div>
  );
}
