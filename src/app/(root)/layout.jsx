import React from 'react'
import { createUser } from "@/modules/auth/actions"

const Layout =async ({children}) => {
    await createUser();
  return (
   <main className='flex flex-col min-h-screen relative overflow-x-hidden'>
    {/* navbar */}
    <div className='fixed inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#39334a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] [background-size:16px_16px]' />
    <div className='flex-1 w-full mt-20'>
   
        {children}

    </div>

   </main>
  )
}

export default Layout