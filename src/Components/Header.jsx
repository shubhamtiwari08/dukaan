import { faBars, faComment, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import Search from './Search'

function Header({handleToggle}) {

    

    const {pathname} = useLocation()

 

    const title = pathname.split("/")[1]
  

  return (
    <header >
        <div className="grid grid-rows-1 grid-cols-3 px-[32px] py-[12px] gap-[16px] border-2 bg-custom-white-800 justify-between ">
        <div onClick={handleToggle} className='block lg:hidden'><FontAwesomeIcon icon={faBars} className='text-3xl mt-[5px]'/></div>
      <div className="flex items-center gap-x-[16px] ">
        <p className="text-[20px] font-galano font-semibold leading-6 pb-2 capitalize">{title || " Home"}</p>
        <div className="flex w-40 items-center gap-x-[6px] text-[12px] leading-[16px] text-[#4d4d4d] font-normal lg:block hidden ">
          <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704782319/blackquestion_h0oxbs.svg" alt="question-mark" className='inline-block mr-2'  />
          <span>How It Works</span>
        </div>
      </div>

      <div className=" rounded-[6px] flex items-center justify-start bg-[#f2f2f2] lg:block hidden ">
        <Search/>
      </div>

      <div className="flex justify-end items-center ">
        <div className="flex gap-x-[12px]  ">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e6e6e6] ">
            <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704741468/Group-1_cnfudo.svg" alt="announce" />
          </div>
          <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704741468/Menu_xvaxka.svg" alt="dropdown" />
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header