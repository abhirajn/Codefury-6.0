import { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
// import {AiOutlineHome} from 'react-icons/ai'
import {GrHomeRounded} from 'react-icons/gr'
import {BsInfoCircle} from 'react-icons/bs'
import {PiLightbulbDuotone} from 'react-icons/pi'
import {BiSolidSelectMultiple} from 'react-icons/bi'
import {IoGameController} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import {MdQuestionAnswer} from "react-icons/md"





export default function Sidebar() {
  const navigate = useNavigate();
 
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            {open ?
                <div style={{ width: "400px" }} className='h-screen bg-white' onClick={handleClick}>
                    <div className='float-right ' onClick={handleClick}><BsFillArrowLeftCircleFill size="2em" style={{ fill: 'black' }}/></div>
                    <div className='flex flex-col w-full'>

                        <div onClick={()=>{ navigate('/')}} className='box-border rounded pl-3 py-3 w-full mt-28 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <GrHomeRounded className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> Home</div>
                        <div onClick={()=>{ navigate('/gaming')}} className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <IoGameController className='h-5 w-5 ml-1 mr-3 '  style={{ fill: 'black' }}  />Games</div>
                        <div onClick={()=>{ navigate('/tips')}} className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BiSolidSelectMultiple className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> Tips </div>
                        <div onClick={()=>{ navigate('/guidance')}} className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <PiLightbulbDuotone className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> Guidance</div>
                        <div onClick={()=>{ navigate('/post')}} className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <MdQuestionAnswer className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> Community</div>
                        <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BsInfoCircle className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> About Us</div>
                    </div>
                </div> :
                 <div>
                    <div style={{ width: "50px" }} className='h-screen bg-white' onClick={handleClick}>
                        <div className='float-right' ><BsFillArrowRightCircleFill size="2em" style={{ fill: 'black' }}/></div>
                        <div className='flex flex-col w-full'>
                       
                       <div className='box-border rounded pl-3 py-3 w-full mt-28 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3 '> <GrHomeRounded className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/></div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <IoGameController className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> </div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BiSolidSelectMultiple className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> </div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <PiLightbulbDuotone className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/></div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <MdQuestionAnswer className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> </div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BsInfoCircle className='h-5 w-5 ml-1 mr-3' style={{ fill: 'black' }}/> </div>
                       
                   </div>
                    </div>
                </div>}
        </div>
    )
}
