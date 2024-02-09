import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Dashboard from "./pages/dashboard/Index";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./network/auth";
import toast from "react-hot-toast";

const RouteHandler = () => {
  const navigate = useNavigate()
  
  const onLogOut = async (e) => {
    e.preventDefault()
    
    try {
      await Auth.logout()
      navigate("/")
      return toast.success("Logout Successful")
      
    } catch (error) {
      console.error(error)
      return toast.error(error)
    }
  }

  return ( 
    <>
      <Header loginText="Login" logoutText="Logout" onLogout={onLogOut}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
   );
}
 
export default RouteHandler;