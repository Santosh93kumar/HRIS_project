import React from 'react'
import Sidebar from '../Component/Sidebar'
import Shift from '../Component/Shiftsetup/Shift'

function Shiftpage() {
  return (
    <>
        <div className='flex flex-row bg-sky-100 w-full'>
            <div className='w-3/12'>
                {<Sidebar />}
            </div>
            <div className='w-9/12'>
                <Shift/>
            </div>
        </div>
    
    </>
  )
}

export default Shiftpage








