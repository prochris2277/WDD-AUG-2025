import { useState } from 'react'
import { FaGithub, FaEnvelope } from "react-icons/fa";
import './globals.css'

function App() {
   

  return (
  
     
         <>
             
            <div className='bg-[#c5ae9c] text-[] justify-center place-items-center mx-[680px]  min-h-screen'>
                     <div className='p-[50px] justify-center place-items-center bg-[#c5ae9c] '>
                           <img src="/profilePic.jpg" alt="promise-picture" className='w-50 rounded-lg'/>
                           <h1 className='text-5xl font-bold '>Promise</h1>
                           <p className='my-[.5em] font-medium'>Full-Stack Developer</p>

                        <div className='flex items-center gap-8 '>
                              <a href="mailto:cpro227@gmail.com" className="flex items-center gap-2 px-8 py-2.5  bg-[#3a3737] text-white  rounded-lg shadow-md hover:bg-[#000000] transition
                              "><FaEnvelope />Email</a>
                              <a href="https://github.com/prochris2277" className="flex items-center gap-2 px-8 py-2.5 bg-[#3a3737] text-white  rounded-lg shadow-md hover:bg-[#000000] transition
                              "><FaGithub />Github</a>
                        </div>

                           <div className='place-items-start '>
                              <h2 className='mt-[1em]  text-2xl font-semibold '>About</h2>
                              <p className='pl-[.5em] pr-[1em] py-[.5em] mt-[.5em] font-medium bg-[#aa968a]'>Promise is a student frontend developer aspiring to become a full-stack developer and also a badass "Tobi Marshall" </p>
                              <h2 className='mt-[1em]   text-2xl font-semibold'>Interests</h2>
                              <p className='pl-[.5em] mt-[.5em] py-[.5em] font-medium bg-[#aa968a]'>I love to travel, try out new dishes, speak spanish, skydive and drive fast cars </p>
                           </div>
                     </div>
                  <footer className='bg-[#000000] text-[white] w-[100%] mt-[27%] pl-[35%]'>2025 All rights reserved</footer>
            </div>
            
         
        </>
  )    
}

export default App
