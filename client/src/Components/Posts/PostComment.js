import React, { useState } from 'react'
import axios from "axios";

export default function PostComment({props}) {
    // console.log(props)
    var path = "/post/" + props;
    const[newcomment , setNewcomment] = useState();
  return (
    <div>
        <div class="">
    <label for="text" class="block  text-sm font-medium text-gray-900 dark:text-white">Title </label>
    <input onChange={(e)=>{
                     setNewcomment(e.target.value)
             }} type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required/>
             <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async () => {
            //   console.log(email + " " + password)
                        const res = await axios.post(`http://localhost:8000/user/postComment`, {
                            id : {props},
                            comment: newcomment
                        }, {
                            headers: {
                                "Content-type": "application/json",
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            },
                        });
                    
                        // const data = res.data;
                        // console.log(data)
                        // localStorage.setItem("token", data.token);
                       
                        // console.log(path)
                        window.location = path;
                        // setUser({
                        //     userEmail: email,
                        //     isLoading: false
                        // })
                        // navigate("/courses")
                    }}>Submit</button>
  </div>

    </div>
  )
}
