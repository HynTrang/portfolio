import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] xl:x-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            className="w-28 h-28 rounded-full object-cover object-center"
            src="https://picsum.photos/id/237/200/300"
            alt=""
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        />
        <div className='px-0 md:px-5'>
            <h4 className='text-3xl font-light'>CEO of PAPAFARM</h4>
            <p className='font-bold text-1xl mt-1'>PAPAFARM</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary point Summary point Summary point</li>
                <li>Summary point Summary point Summary point</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard