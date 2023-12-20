import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="loginInfo">
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" className="username" placeholder="Username" />
          <label htmlFor="password">Password</label>
          <input type="password" className="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
