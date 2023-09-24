import React from 'react'
import SinglePost from "../Components/Posts/SinglePost"
import { useState , useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import PostComment from '../Components/Posts/PostComment';

export default function Post() {
    let { postId } = useParams();
    // console.log("hi" + postId)

    const navigate = useNavigate();
    

    // console.log(courseId)
    const [ques, setQues] = useState();
    const [check, setCheck] = useState(false);

    const init = async () => {
        const response = await axios.get(`http://localhost:8000/user/questions/${postId}`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
      setQues(response)
    }
        
    
  
    useEffect(() => {
        init();
    }, []);
  return (
    <div className='bg-gray-600'>
      <button onClick={()=>{setCheck(!check)}} type="button" className="m-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Post comment</button>
      {check ? <div>
        <PostComment props = {postId}/>
        </div> : <></>}
        {ques ? <> 
          
         <SinglePost props = {ques}/>
       
         </>  : <></>}

    </div>
  )
}
