'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '../../public/logo.png';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch } from "react-icons/hi";
import { useSession, signIn, signOut } from 'next-auth/react'; 
import app from '../Shared/firebaseConfig';
import { useRouter } from '@/node_modules/next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const router = useRouter();

  useEffect(() => {
    saveUserInfo();
  }, [session]);

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

  const onCreateClick = () => {
    if (session) {
      router.push('/pin-builder')
    } else {
      signIn()
    }
  }

  return (
    <div className='flex gap-4 md:gap-3 items-center dark:bg-gray-950 bg-gray-100 dark:text-white'>
      <Image onClick={() => router.push('/')} src={logo} alt={"logo"} width={50} height={50} className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-full'/>
      <div className='flex'>
        <button 
          onClick={() => router.push('/')}
          className='px-3 py-2 text-black dark:text-white dark:hover:bg-blue-400  hover:bg-blue-400  rounded-3xl hover:text-gray-50 hidden md:block'>Home</button>
        <button className='px-3 py-2 text-black dark:text-white  dark:hover:bg-blue-400  hover:bg-blue-400 rounded-3xl hover:text-gray-50'
          onClick={onCreateClick}
        >Create</button>
      </div>

      {/* Search Bar */}
      <div className='hidden md:flex gap-3 p-2 w-full rounded-md m-2 items-center dark:bg-gray-700 bg-[#e9e9e9] '>
        <HiSearch className='text-gray-500 text-xl'/>
        <input
          id="search"
          name="search"
          type="search"
          autoComplete="off"
          placeholder="Search"
          className="h-9 lg:w-[300px] bg-transparent outline-none"
        />
      </div>

      <ThemeSwitcher/>
      
      {/* User Authentication */}
      {session?.user ? (
        <Image 
          src={session?.user?.image} 
          alt={"logo"} 
          width={50} 
          height={50} 
          onClick={() => router.push('/'+ session.user.email)}
          className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-full'
        />
      ) : (
        <button 
          className='px-3 py-2 text-black  dark:text-white dark:hover:bg-blue-400  hover:bg-blue-400 rounded-3xl hover:text-gray-50'
          onClick={() => signIn()}
        >
          Login
        </button>
      )}

      {/* Logout Button */}
      {session?.user && (
        <button 
          className='px-3 py-2 text-black dark:text-white dark:hover:bg-blue-400  hover:bg-blue-400 rounded-3xl hover:text-gray-50'
          onClick={() => signOut()}
        >
          LogOut
        </button>
      )}
    </div>
  );
}

export default Header;
