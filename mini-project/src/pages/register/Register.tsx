import { useState } from "react";
import "./register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../libs/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // ทำสิ่งที่ต้องการกับ email และ password
    // console.log("register", { email, password });

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user);

      //redirect to Home page by useNavigate hook
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <h2>Register</h2>
      <div className="registerInfo">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Register;
