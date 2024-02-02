import Image from 'next/image';
import React from 'react'
import { signOut,useSession } from "next-auth/react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function UserInfo({userInfo}) {
    console.log(userInfo);
    const pathname=usePathname();
    console.log(pathname);
    // const modal = searchParams.get();
    // console.log(modal);
    const router=useRouter();
    const {data:session}=useSession()
    const onLogoutClick=()=>{
      signOut();
      router.push("/")
    }
    
    
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
        alt='userImage'
        width={100}
        height={100}
        className='rounded-full'/>

        <h2 className='text-[30px]
        font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <div className='flex gap-4 mb-4'>

        {session?.user.email== userInfo.email? <button className='bg-blue-300 hover:bg-blue-400
         p-2 px-3 font-semibold mt-5 rounded-full'
         onClick={()=>onLogoutClick()}>Logout</button>:null}
      </div>
    </div>
  )
}

export default UserInfo