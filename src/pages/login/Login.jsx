import Button from "../../components/Button";

const Login = () => {
  return ( 
    <section className="login-section container flex">
      <div className="login-section-content flex">
        <div className="login-section-titles flex">
          <h1 className="section-title">Login</h1>
          <h3 className="section-subtitle">
            Please use your username and password to login
          </h3>
        </div>

        <div className="login-section-form">
          <form action="submit" className="form flex">
            <label htmlFor="username">Username</label>
            <input 
              className="form-input" 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Username" 
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="form-input" 
            />

            <Button btnText="Login" btnClass="btn"/>
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default Login;