import React, { useState } from "react";
import { auth } from "../../FirebaseConfig";
import image from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegisterWithEmailPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div
      className="h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex bg-white gap-5 rounded-lg shadow-lg">
        <img
          src={image}
          alt="Registration"
          className="max-w-md border rounded-lg border-blue-700 m-4"
        />

        <div className="max-w-md mx-auto p-20 flex flex-col justify-around ">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <p className="text-end text-sm text-blue-500 cursor-pointer hover:text-blue-700">
              Forget Password
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleRegisterWithEmailPassword}
              className="bg-blue-500 text-white  px-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              style={{ fontSize: "10px" }}
            >
              Register with Email/Password
            </button>
            <button
              onClick={handleRegisterWithGoogle}
              className="bg-red-500 text-white  px-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
              style={{ fontSize: "10px" }}
            >
              Register with Google
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
