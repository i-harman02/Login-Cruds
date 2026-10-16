import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [data, setData] = useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id , value : inputValue } = e.target;
    setData((prev)=> ({
      ...prev , [id] : inputValue 
    }));
  };


  const login = async (e) => {
    e.preventDefault();
    try {
    const response =  await axios.post("http://localhost:9090/user/login",{
        email : data.email,
        password : data.password
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      alert("user Login");
      navigate("/");
    } catch (error) {
      alert("User not login get error" + error);
    }    
  }

  return (
    <div>
      Hi this is login form !


       <div className=" flex items-center justify-center px-4">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-[#ff2938] px-8 py-7 text-center">
                    <h2 className="text-2xl font-bold text-white">
                      Login Account
                    </h2>
                    <p className="mt-2 text-sm text-red-100">
                      Login to get started with us
                    </p>
                  </div>
      
                  <form onSubmit={login} className="p-8 space-y-5">
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
      
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#ff2938] focus:ring-2 focus:ring-red-100"/>
                    </div>
      
                    <div>
                      <label
                        for="password"
                        className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        value={data.password}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#ff2938] focus:ring-2 focus:ring-red-100"/>
                    </div>
      
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#ff2938] py-3.5 font-semibold text-white shadow-md shadow-red-200 transition duration-200 hover:bg-[#e91f2d] hover:shadow-lg active:scale-[0.98] cursor-pointer">
                      Login
                    </button>
      
                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?
                      <Link
                        to="/register"
                        className="font-semibold text-[#ff2938] hover:underline">
                        Sign Up
                      </Link>
                    </p>
      
                  </form>
                </div>
      
              </div>
            </div>
    </div>
  )
}

export default Login;
