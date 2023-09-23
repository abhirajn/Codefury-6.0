import React from 'react'
import SinglePost from "../Components/Posts/SinglePost"
import { useState , useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Post() {
    let { postId } = useParams();
    // console.log("hi" + postId)

    const navigate = useNavigate();
    

    // console.log(courseId)
    const [ques, setQues] = useState();

    const init = async () => {
        const response = await axios.get(`http://localhost:8000/user/questions/${postId}`)
            // headers: {
            //     // Authorization: `Bearer ${localStorage.getItem('token')}`
            // }
        
  console.log("hi")
        setQues(response)
    }
  
    useEffect(() => {
        init();
    }, []);
  return (
    <div className='bg-black'>
        {ques ? <>  <SinglePost props = {ques}/> </>  : <></>}
    </div>
  )
}
