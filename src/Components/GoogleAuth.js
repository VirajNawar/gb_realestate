import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function GoogleAuth() {
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check user exists
      const ref = doc(db, "users", user.uid);
      const response = await getDoc(ref);

      if (!response.exists()) {
        await setDoc(ref, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <>
      <button
        type="submit"
        className="btn-google
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
    "
        onClick={handleGoogleClick}
      >
        <FcGoogle
          className="bg-white
          rounded-full
          mr-3
            
"
        />{" "}
        Continue with google
      </button>
    </>
  );
}

export default GoogleAuth;
