import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import Login from "./pages/login/Index";

const RouteHandler = () => {
  return ( 
    <>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>

    </>
   );
}
 
export default RouteHandler;