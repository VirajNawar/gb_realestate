import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
function SigIn() {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })

  const {email, password} = formData

 const handleChange = (e) => {
    setFormData((values)=>({
      ...values,
      [e.target.id]: e.target.value,
    }))
 }
  return (
    <div className='sign-in
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    flex-wrap
                    max-w-md
                    mx-auto
                    bg-[#060822]
                    mt-9
                    rounded-xl
                    
      '>
    
    <h1 className='text-3xl text-center mt-6 font-bold'>
    Sign In
      </h1>  
    <div className="form 
                    w-full 
                    px-8 
                    my-6
                    ">
      <form action="" >
        <input type="email" 
        value={email}
        id='email'
        onChange={handleChange}
        className="w-full 
                    rounded-md
                  border-[#090D2B]
                    transition ease-in-out
                    mt-6
                    bg-[#272C64]
                    text-white
                    "
        placeholder='Enter Email address'
        />
        <input type="password" 
        value={password}
        id='password'
        onChange={handleChange}
        className="w-full 
                  rounded-md
                border-[#090D2B]
                  transition ease-in-out
                  my-6
                bg-[#272C64]
                text-white
                    "
        placeholder='Enter Password'
        />

        <div className="register">
          <p>Don't have an account ? 
            <Link to="/signup" 
            className='text-blue-500 
            mx-2
            hover:text-blue-700
            transition duration-200 ease-in-out
            '
            >
              Sign Up
            </Link>

          </p> 
        </div>
      <button type='submit' className='btn
                        w-full
                      bg-blue-700
                        rounded-md
                        p-2
                        mt-4
                        transition duration-150 ease-in-out
                        uppercase
                        active:bg-blue-900
                        '     
        >
        Sign In
      </button>

      <div className="or
                      my-4
                      flex
                      items-center
                      before:border-t
                      before:flex-1
                    before:border-white
                      after:border-t
                      after:flex-1
                    after:border-white
                      ">
        <p className='text-center
                      font-semibold
                      mx-5
                    ' >
          OR
          </p>
      </div>

      <button type='submit' className='btn-google
                        flex
                        items-center
                        justify-center
                        bg-red-600
                        text-white
                        w-full
                        rounded-md
                        p-2
                        mt-4
                        transition duration-150 ease-in-out
                        uppercase
                        
                        active:bg-red-800
                        '     
        >
        <FcGoogle className='bg-white
                              rounded-full
                              mr-3
                                
                  '  /> Continue with google
      </button>
      </form>
    </div>
    </div>
  )
}

export default SigIn