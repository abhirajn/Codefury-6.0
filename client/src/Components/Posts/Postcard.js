import React from 'react'
import Sidebar from '../Sidebar'
import {useNavigate} from "react-router-dom";

export default function Postcard({props}) {
    const navigate = useNavigate();
    return (
        <div className='' onClick={()=>{
            // console.log(props._id)
            navigate('/post/' + props._id)
        }}>
         
          <div className='my-5 mx-10 ' style={{width : "1000px"}}  >
                <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
