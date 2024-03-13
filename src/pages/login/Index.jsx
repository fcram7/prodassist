import { Helmet } from 'react-helmet';
import LoginInput from "./LoginInput";

const Login = () => {
  
  return ( 
    <>
      <Helmet>
        <title>Login | Prodassist</title>
        <meta name="description" content="Prodassist Login Page" />
        <link rel="canocical" href="/login" />
      </Helmet>
      <LoginInput />
    </>
   );
}
 
export default Login;