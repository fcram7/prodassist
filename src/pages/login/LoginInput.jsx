import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import useInput from "../../hooks/useInput";
import Auth from "../../network/auth";

const LoginInput = () => {
  const [email, onEmailChangeHandler] = useInput("")
  const [password, onPasswordChangeHandler] = useInput("")

  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      await Auth.login({
        email: email,
        password: password
      })

      navigate("/dashboard")
      return toast.success("Login successful")
    } catch (error) {
      console.log(error)
      return toast.error(error)
    }
  };

  return ( 
    <section className="login-section container flex">
      <div className="login-section-content flex">
        <div className="login-section-titles flex">
          <h1 className="section-title">Login</h1>
          <h3 className="section-subtitle">
            Please use your email and password to login
          </h3>
        </div>

        <div className="login-section-form">
          <form onSubmit={onSubmitHandler} className="form flex">
            <label htmlFor="email">Email</label>
            <input 
              className="form-input" 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={onEmailChangeHandler}
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Password"
              value={password}
              onChange={onPasswordChangeHandler}
            />

            <Button btnText="Login" btnClass="btn"/>
          </form>
          
        </div>
        <div className="register-text">
          <span>
            Don&apos;t have an account? <Link to="/register">Register</Link> here
          </span>
        </div>
      </div>
    </section>
   );
}
 
export default LoginInput;