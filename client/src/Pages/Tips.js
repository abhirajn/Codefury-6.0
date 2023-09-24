import React from 'react'
import Tipscard from '../Components/Tipscard'
import Sidebar from '../Components/Sidebar'

export default function Tips() {
  return (
    <div>
      <div className = 'fixed'>
     <Sidebar/>
     </div>
     
        <Tipscard/>
      
    </div>
  )
}
