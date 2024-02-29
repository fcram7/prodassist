import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useInput from "../../hooks/useInput";
import Auth from "../../network/auth";
import toast from "react-hot-toast";
// import { useAuth } from '../../contexts/authContext';

const RegisterInput = () => {
  const [name, onNameChangeHandler] = useInput("")
  const [email, onEmailChangeHandler] = useInput("")
  const [password, onPasswordChangeHandler] = useInput("")
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("")
  // const { register } = useAuth();
  const navigate = useNavigate();

  // const newSubmitHandler = (e) => {
  //   e.preventDefault()
  //   if(password !== confirmPassword) {
  //     return toast.error("Password didn't match")
  //   }

  //   try {
  //     register(email, password)

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    if(password !== confirmPassword) {
      return toast.error("Password didn't match")
    }

    try {
      const response = await Auth.register({
        email: email,
        password: password
      })

      await Auth.updateProfile(response.user, {
        displayName: name
      })

      navigate("/login")
      return toast.success("New user registered")

    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <section className="register-section container flex">
      <div className="register-section-content flex">
        <div className="register-section-titles flex">
          <h1 className="section-title">Register</h1>
          <h3 className="section-subtitle">
            Please enter your email and password to register
          </h3>
        </div>

        <div className="register-section-form">
          <form onSubmit={onSubmitHandler} className="form flex">
            <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="Name"
                value={name}
                onChange={onNameChangeHandler}
              />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-input"
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              className="form-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onConfirmPasswordChangeHandler}
            />
            <Button btnText="Register" btnClass="btn"/>
          </form>
        </div>

        <div className="login-text">
          <span>
            Already have an account? <Link to="/login">Login</Link> here
          </span>
        </div>
      </div>
    </section>
   );
}
 
export default RegisterInput;