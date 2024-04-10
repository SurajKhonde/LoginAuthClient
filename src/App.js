import React from 'react';
import { Routes,Route } from "react-router-dom";
import { useAuth } from './Hooks/index';
import LandingPage from './Components/Commonpages/LandingPage';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import EmailVerification from './Components/Auth/EmailVerification';
import ForgetPassword from './Components/Auth/ForgotPassword';
import ConfirmPassword from './Components/Auth/ConfirmPassword';
import NotFound from './CommonComponents/NotFound';
import Navbar from './Components/Commonpages/NavBar';
import Cursor from './Components/Commonpages/DynamicCursor';


const App = () => {
    // // const { authInfo } = useAuth()
    // const isAdmin = authInfo.profile?.role === "admin";

  return (
    <>
      <Cursor/>
         <Navbar/>
          <Routes>
              <Route path="/" element={<LandingPage />} />
             
              <Route path="/auth/signin" element={<Signin />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/auth/verification" element={<EmailVerification/>} />
              <Route path="/auth/forget-password" element={<ForgetPassword />} />
              <Route path="/auth/reset-password" element={<ConfirmPassword />} />
              <Route path="*" element={<NotFound/>} />          
        </Routes>
       </>

  )
}

export default App;