import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../libs/firebase";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const login_user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("user", login_user);

      navigate("/");
    } catch (error: any) {
      // console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <h2>Log In</h2>
      <div className="loginInfo">
        <label htmlFor="username" className="email">
          Email
        </label>
        <input
          type="email"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />

        <label htmlFor="password" className="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit">Log In</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Login;
