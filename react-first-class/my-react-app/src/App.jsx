import { useState } from 'react'
import { FaGithub, FaEnvelope } from "react-icons/fa";
import './globals.css'

function App() {
   

  return (
  
            <container className='flex flex-col min-h-screen items-center'>
                     <content className='flex-grow flex flex-col mx-[40em] place-items-center bg-[#c5ae9c] '>
                           <img src="/profilePic.jpg" alt="promise-picture" className='w-50 rounded-lg pt-[50px]'/>
                           <h1 className='text-5xl font-bold '>Promise</h1>
                           <p className='my-[.5em] font-medium'>Full-Stack Developer</p>

                        <div className='flex items-center gap-8 mx-[50px]'>
                              <a href="mailto:cpro227@gmail.com" className="flex items-center gap-2 px-8 py-2.5  bg-[#3a3737] text-white  rounded-lg shadow-md hover:bg-[#000000] transition
                              "><FaEnvelope />Email</a>
                              <a href="https://github.com/prochris2277" className="flex items-center gap-2 px-8 py-2.5 bg-[#3a3737] text-white  rounded-lg shadow-md hover:bg-[#000000] transition
                              "><FaGithub />Github</a>
                        </div>

                           <div className='place-items-start mx-[50px] pb-[9em]'>
                              <h2 className='mt-[1em]  text-2xl font-semibold '>About</h2>
                              <p className='pl-[.5em] pr-[1em] py-[.5em] mt-[.5em] font-medium bg-[#aa968a] rounded-md'>Promise is a student frontend developer aspiring to become a full-stack developer and also a badass "Tobi Marshall" </p>
                              <h2 className='mt-[1em]   text-2xl font-semibold'>Interests</h2>
                              <p className='pl-[.5em] mt-[.5em] py-[.5em] font-medium bg-[#aa968a] rounded-md'>I love to travel, try out new dishes, speak spanish, skydive and drive fast cars </p>
                           </div>
                           <footer className='bg-[#000000] text-[white] w-[100%] place-items text-center '>2025 All rights reserved</footer>
                     </content>
            </container>
  )    
}

export default App
