import React from 'react'
import Image from 'next/image'
import LiveStock from "../../../assets/livestock.png"
import { FcGoogle } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";
export const SignUp = () => {
  return (
    
    <div>
        <div className='flex flex-row w-[500px] h-[500px] lg:w-[700px] border-1 shadow-2xl lg:h-[700px]  rounded-2xl mt-20'>
            <div style={{width: '50%' , backgroundColor : "white"}} className='rounded-2xl'>
                <div className='p-5 flex flex-col '>
                    <h1 className='font-extrabold text-3xl'>Log in or sign up in seconds</h1>
                    <p className='mt-4 font-semibold'>
                        Use your email or another service to continue with Meatruck (it’s free)!
                    </p>

                    <div className='w-[90%] h-[40px] border-1 rounded-xl flex p-2 items-center space-x-6 mt-6 cursor-pointer '>
                        <FcGoogle  size={26} className=''/>
                        <p className=' font-bold'>Continue with Google</p>

                    </div>
                 
                     <div className='w-[90%] h-[40px] border-1 rounded-xl mt-6 flex p-2 items-center space-x-6 cursor-pointer'>
                         <FaRegMessage  size={24} className=''/>
                        <p className=' font-bold'>Continue with Email</p>

                    </div>

                    <div>
                        <p>By continuing, you agree to Canva’s Terms of Use. Read our Privacy Policy.</p>
                    </div>


            </div>

            </div>
            <div style={{width: '50%' , height:"100%"}} >

                <Image src={LiveStock} alt='livestock' className='object-fill h-full rounded-2xl'/>
            </div>
            
        </div>

    </div>
  )
}
