import React from 'react'
import Sidebar from '../Sidebar'
import {useNavigate} from "react-router-dom";

export default function Postcard({props}) {
    const navigate = useNavigate();
    return (
        <div className='flex' onClick={()=>{
            // console.log(props._id)
            navigate('/post/' + props._id)
        }}>
          
          <div className='my-10 mx-10 w-96 '  >
                <div class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
