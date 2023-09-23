import React from 'react'
import Postcard from '../Components/Posts/Postcard'
import Sidebar from '../Components/Sidebar'
import { useState , useEffect} from 'react';
import axios from "axios";
import {BsPlusCircle} from 'react-icons/bs'
import PostForm from '../Components/PostForm';
// import { Question } from '../../../server/modals/Questions';
export default function PostQuestions() {
  const [question, setQuestion] = useState([]);
  const[newpost , setNewpost] = useState(false);

  const init = async () => {
      const response = await axios.get(`http://localhost:8000/user/questions`)
          // headers: {
          //     // Authorization: `Bearer ${localStorage.getItem('token')}`
          // }
      
// console.log(response.data)
      setQuestion(response.data)
  }

  useEffect(() => {
      init();
  }, []);

  const handlesubmit=  ()=>{
    setNewpost(!newpost);
  }

  return (
    <div className='flex overscroll-none'>
      <Sidebar />

     <div className=''>
     <h1 className='text-black'> Community Questions </h1>
     {question.map((data =>{
       return <Postcard props = {data}/>}
       ))}
     </div>
     <div>
     <button onClick={handlesubmit} type="button" class="m-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">POST</button>
     </div>
     {newpost ? <div><PostForm/>{setNewpost(!newpost)}</div> : <div></div>}
    </div>
  )
}
