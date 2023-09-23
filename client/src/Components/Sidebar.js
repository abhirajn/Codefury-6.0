import { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
// import {AiOutlineHome} from 'react-icons/ai'
import {GrHomeRounded} from 'react-icons/gr'
import {BsInfoCircle} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import {SlSettings} from 'react-icons/sl'
import {CgProfile} from 'react-icons/cg'




export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            {open ?
                <div style={{ width: "200px" }} className='h-screen bg-white'>
                    <div className='float-right ' onClick={handleClick}><BsFillArrowLeftCircleFill size="2em" /></div>
                    <div className='flex flex-col w-full'>
                       
                        <div className='box-border rounded pl-3 py-3 w-full mt-28 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <GrHomeRounded className='h-5 w-5 ml-1 mr-3'/> Home</div>
                        <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <CgProfile className='h-5 w-5 ml-1 mr-3 text-black ' color='black'/> Profile</div>
                        <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <SlSettings className='h-5 w-5 ml-1 mr-3' color='black'/> Settings</div>
                        <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <RiContactsLine className='h-5 w-5 ml-1 mr-3' color='black'/> Contact us</div>
                        <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer text-black hover:p-1  hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BsInfoCircle className='h-5 w-5 ml-1 mr-3' color='black'/> About Us</div>
                        
                    </div>
                </div> :
                 <div>
                    <div style={{ width: "50px" }} className='h-screen bg-white' onClick={handleClick}>
                        <div className='float-right' ><BsFillArrowRightCircleFill size="2em" /></div>
                        <div className='flex flex-col w-full'>
                       
                       <div className='box-border rounded pl-3 py-3 w-full mt-28 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3 '> <GrHomeRounded className='h-5 w-5 ml-1 mr-3'/></div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <CgProfile className='h-5 w-5 ml-1 mr-3'/> </div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <SlSettings className='h-5 w-5 ml-1 mr-3'/> </div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <RiContactsLine className='h-5 w-5 ml-1 mr-3'/></div>
                       <div className='box-border rounded pl-3 py-3 w-full mt-2 flex flex-row text-lg font-medium rounded-md font-mono cursor-pointer hover:pr-1 hover:rounded-lg hover:text-white hover:bg-blue-500 hover:py-3'> <BsInfoCircle className='h-5 w-5 ml-1 mr-3'/> </div>
                       
                   </div>
                    </div>
                </div>}

        </div>
    )
}
