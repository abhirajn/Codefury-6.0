import React from 'react'
import Sidebar from '../Sidebar'
import {useNavigate} from "react-router-dom";

export default function Postcard(props) {
    const navigate = useNavigate();
    return (
        <div className='flex' onClick={()=>{
            navigate('/post/' + Postcard._id)
        }}>
          
          <div className='my-10 mx-10 w-max '  >
                <div class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    )
}
