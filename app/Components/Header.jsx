'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '../../public/logo.png';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from 'next-auth/react'; 
import app from '../Shared/firebaseConfig';
import { useRouter } from '@/node_modules/next/navigation';

const Header = () => {
  const { data: session } = useSession();
  // console.log(session);
  const db = getFirestore(app);
const router = useRouter();
  useEffect(()=>{
    saveUserInfo();
  },[session])
  const saveUserInfo = async () => {
    if (session?.user) {
      try {
        await setDoc(doc(db, "user", session.user.email), {
          userName: session.user.name,
          email: session.user.email,
          userImage: session.user.image,
        });
      } catch (error) {
        console.error("Error saving user info:", error);
      }
    }
  }; 
  const onCreateClick = ()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn()
    }

  }
  return (
    <div className='flex gap-2 md:gap-3 items-center'>
      <Image onClick={() => router.push('/')} src={logo} alt={"logo"} width={50} height={50} className='hover:bg-gray-200 cursor-pointer p-2 rounded-full'/>
      <div className='flex'>
        <button 
        onClick={() => router.push('/')}
        className='px-3 py-2 text-black hover:bg-black rounded-3xl hover:text-gray-50 hidden md:block'>Home</button>
        <button className='px-3 py-2 text-black hover:bg-black rounded-3xl hover:text-gray-50'
        onClick={()=>onCreateClick()}
        >Create</button>
      </div>
      <div className='flex gap-3 p-2 items-center w-full bg-[#e9e9e9] rounded-3xl '>
        <HiSearch className='text-gray-500 text-xl'/>
        <input type="text" placeholder='Search' className='hidden md:flex text-gray-700 bg-transparent outline-none '/>
      </div>
      <HiBell className='text-gray-500 text-[60px] md:text-[40px]'/>
      <HiChat className='text-gray-500 text-[60px] md:text-[40px]'/>
      
      {session?.user ? (
        <Image src={session?.user?.image} 
        alt={"logo"} width={50} height={50} 
        onClick={() => router.push('/'+ session.user.email)}
        className='hover:bg-gray-200 cursor-pointer p-2 rounded-full'
        />
      
      ) : (
        <button 
          className='px-3 py-2 text-black hover:bg-black rounded-3xl hover:text-gray-50'
          onClick={() => signIn()}
        >
          Login
        </button>
        
      )}
      <button 
          className='px-3 py-2 text-black hover:bg-black rounded-3xl hover:text-gray-50'
          onClick={() => signOut()}
        >
          LogOut
        </button>
    </div>
  );
}

export default Header;
