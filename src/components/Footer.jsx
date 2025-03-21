import React from 'react'
import Icons from './Icons'
import { Facebook } from 'lucide-react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-t-[1px] border-gray-300 dark:border-[#30363D] dark:text-[#C9D1D9] mt-12 sm:mb-4 mb-18 flex flex-col gap-12 items-center p-4'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='font-semibold text-2xl text-blue-400'>Pushkar Niraula</h2>
        <p>copyright @2025. All rights reserved.</p>
      </div>
      <div className='flex gap-6 sm:gap-8'>
        <Icons link={'#'} child={<Facebook size={30} />} />
        <Icons link={'#'} child={<Instagram size={30} />} />
        <Icons link={'#'} child={<Github size={30} />} />
        <Icons link={'#'} child={<Linkedin size={30} />} />
      </div>
    </footer>

  )
}
