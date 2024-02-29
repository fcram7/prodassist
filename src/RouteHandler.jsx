import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Dashboard from "./pages/dashboard/Index";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { auth } from './utils/firebase';


const RouteHandler = () => {
  const user = auth.currentUser;

  return ( 
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>} />
          {user ?? (
            <Route exact path="/dashboard" element={<Dashboard />} />
          )}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default RouteHandler;