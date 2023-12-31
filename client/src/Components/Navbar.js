import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    let c = localStorage.getItem('token');
    const hanldeclick= ()=>{
      localStorage.removeItem('token');
      navigate('/');
    }
  return (
    <div className='h-15 w-screen  px-10 justify-items-end ' style={{backgroundColor : "#eaffe3"}}>
     
   {c ? <div className='flex mx-10'> <h3 className='text-black'>User-231</h3>
    <button onClick={hanldeclick} type="button" style={{marginLeft : "1200px"}} className=" align-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
   </div>  : <div style={{marginLeft : "1200px"}} className='py-2'>    <button onClick={()=>{navigate('/signup')}} type="button" class=" object-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>
        <button onClick={()=>{navigate('/login')}} type="button" class="object-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button></div>}
    </div>
  )
}
