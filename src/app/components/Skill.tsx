import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial = {{
                x: directionLeft ? -200: 200,
                opacity: 0
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            src='https://picsum.photos/id/237/200/300'
            className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 filter group-even:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100 text-center'>
                    100%
                </p>
            </div>
        </div>
    </div>
  )
}