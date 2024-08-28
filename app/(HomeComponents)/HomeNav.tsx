"use client"

import React, { useState } from 'react'
import Login from './Login';
import { createPortal } from 'react-dom';

const HomeNav = () => {
  const [loginModal, setLoginModal] = useState<null|"Login"|"Register">(null);

  console.log(loginModal);



  return (
    
    <nav id='parent-nav' className='h-16 bg-red-300 w-full'>
      <div className="w-full h-full flex items-center justify-end">
        <div id="login-buttons" className='flex gap-6 mr-5'>
            <button className='w-20 h-12 bg-green-300 flex justify-center items-center cursor-pointer' onClick={(e) => setLoginModal("Login")}>
                {loginModal === "Login" && createPortal(<Login type="Login" /> , document.body)}
                Login
            </button>
            <button className='w-20 h-12 bg-yellow-300 flex justify-center items-center cursor-pointer' onClick={(e) => setLoginModal("Register")}>
            {loginModal === "Register" && createPortal(<Login type="Register" /> , document.body )}
              Register
            </button>

        </div>


      </div>



    </nav>
  )
}

export default HomeNav