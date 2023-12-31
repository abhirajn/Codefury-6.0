import React from 'react'
import {useNavigate} from "react-router-dom";
import { useState , useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import PostComment from './PostComment';

export default function SinglePost({props}) {
    const navigate = useNavigate();
    
    const[check , setCheck] = useState();

  return (
   
    <div>
         <div className='my-10 mx-10 w-max '  >
            <button className='h=10 w-10 rounded bg-green' onClick={()=>{
                navigate('/post')
            }}>back</button>
                 <div className='my-5 mx-10 ' style={{width : "1000px"}} >
                <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.data.title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{props.data.description}</p>
                </div>
            </div>
          
            
            <div>  Comments</div>
                {props.data.comments.map((data)=>{
                    return (
                        <div className='block my-5  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          {data}
                </div>
                    )
                })}
            </div>
    </div>
  )
}
