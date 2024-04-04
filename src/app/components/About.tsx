import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    >
        <h3 className='absolute top-24 xl:translate-x-10 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            src="https://picsum.photos/id/237/200/300"
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{
                duration: 1.2
            }}
            className='md:mb-0 mt-20 md:mt-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
            md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos nisi quisquam repudiandae incidunt distinctio, quasi cupiditate ex, aperiam ut aliquid! Ipsum excepturi, quidem at aliquam qui iusto sequi? Est?
            </p>
        </div>
    </motion.div>
  )
}