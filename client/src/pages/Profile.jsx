import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {

const [data,setData] = useState({});

useEffect(() => {
fetchdata();
},[]);

const fetchdata = async () => {
   
   try {

    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:9090/user/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // console.log(response?.data?.user);
    setData((prev)=>({...prev}, response?.data?.user))

  } catch (error) {

    console.log(error.response?.data);

  }
}


  return (
    <div>
      Hi This is Profile !
      <h1 className="">
    Hello world!
    {data.email}
  </h1>
    </div>
  )
}

export default Profile
