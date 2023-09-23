import React from 'react'
import Postcard from '../Components/Posts/Postcard'
import Sidebar from '../Components/Sidebar'
import { useState , useEffect} from 'react';
import axios from "axios";
import {BsPlusCircle} from 'react-icons/bs'
// import { Question } from '../../../server/modals/Questions';
export default function PostQuestions() {
  const [question, setQuestion] = useState([]);

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
       
      </div>
    </div>
  )
}
