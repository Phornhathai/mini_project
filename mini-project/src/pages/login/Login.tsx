import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h2>Log In</h2>
      <div className="loginInfo">
        <form>
          <label htmlFor="username">Email</label>
          <input type="text" className="username" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input type="password" className="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
