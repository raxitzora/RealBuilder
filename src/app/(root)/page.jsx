"use client"
import React from 'react'
import Image from 'next/image'
import ProjectForm from '@/modules/home/components/ProjectForm'

const Page = () => {
  
  return (
    <div className='flex items-center justify-center w-full px-4 py-8'>
      <div className='max-w-5xl w-full'>
        <section className='space-y-8 flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <Image 
            src={"/logo.svg"}
            width={100}
            height={100}
            alt='logo'
            className='hidden md:block invert dark:invert-0'/>
          </div>
          <h1 className='text-2xl md:text-5xl font-bold text-center'>Build something with RealBuilder</h1>
          <p className='text-lg md:text-xl text-muted-foreground text-center'>
            Create Apps and websites.
          </p>
          <div className='max-w-3xl w-full'>
            {/*Project form*/}
            <ProjectForm />

          </div>
        </section>

      </div>
      
    </div>
  )
}

export default Page

