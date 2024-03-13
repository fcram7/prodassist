import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import RegisterInput from "./RegisterInput";

const Register = () => {
  return ( 
    <>
      <Helmet>
        <title>Register | Prodassist</title>
        <meta name="description" content="Prodassist Register Page" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <Header />
      <main>
        <RegisterInput />
      </main>
    </>
   );
}
 
export default Register;