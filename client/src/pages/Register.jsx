import { useState } from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'

const Register = () => {

    const [value,setValue] = useState({
      name :"",
      email:"",
      password:""
    })

    const handleChange = (e) => {
      const {id , value : inputValue} = e.target;
      setValue((prev) => ({
        ...prev , [ id ]  : inputValue      
      }))
    }

    const register = async (e) => {
      e.preventDefault();

      try {
        await axios.post("http://localhost:9090/register", {
          name : value.name,
          email: value.email,
          password : value.password
        })        
        alert("user create");
      } catch (error) {
        alert("Register failed" + error)  
        console.log(error);      
      }            
    }


  return (
    <div>
      <h1>
        Hi This is register !
      </h1>

      <div className=" flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#ff2938] px-8 py-7 text-center">
              <h2 className="text-2xl font-bold text-white">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-red-100">
                Register to get started with us
              </p>
            </div>

            <form onSubmit={register} className="p-8 space-y-5">
              <div>
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={value.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition
                   focus:border-[#ff2938] focus:ring-2 focus:ring-red-100"
                />
              </div>

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
                  value={value.email}
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
                  value={value.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#ff2938] focus:ring-2 focus:ring-red-100"/>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#ff2938] py-3.5 font-semibold text-white shadow-md shadow-red-200 transition duration-200 hover:bg-[#e91f2d] hover:shadow-lg active:scale-[0.98] cursor-pointer">
                Register
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?
                <Link
                  to="/login"
                  className="font-semibold text-[#ff2938] hover:underline">
                  Login
                </Link>
              </p>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register
