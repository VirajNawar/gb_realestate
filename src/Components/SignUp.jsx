import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
import GoogleAuth from './GoogleAuth';

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password } = formData
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((values) => ({
      ...values,
      [e.target.id]: e.target.value,
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {

      const auth = getAuth()
      const userDetails = await createUserWithEmailAndPassword(auth, email, password)
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      const user = userDetails.user
      console.log(user)

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("Sign up Success")

      navigate("/")
    }
    catch (error) {
      toast.error("Something went wrong with registration")
    }
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
        Sign Up
      </h1>
      <div className="form 
                    w-full 
                    px-8 
                    my-6
                    ">
        <form action="" onSubmit={handleFormSubmit}>
          <input type="text"
            value={name}
            id='name'
            onChange={handleChange}
            className="w-full 
                    rounded-md
                  border-[#090D2B]
                    transition ease-in-out
                    mt-6
                    bg-[#272C64]
                    text-white
                    
                    "
            placeholder='Enter Full Name'
          />
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
            <p>Have an account ?
              <Link to="/signin"
                className='text-blue-500 
            mx-2
            hover:text-blue-700
            transition duration-200 ease-in-out
            '
              >
                Sign In
              </Link>

            </p>
          </div>
          <button type='submit'
            onSubmit={handleFormSubmit}
            className='btn
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
            Sign Up
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

          <GoogleAuth />
        </form>
      </div>
    </div>
  )
}

export default SignUp