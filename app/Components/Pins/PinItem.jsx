
import React from 'react';
import Image from 'next/image';
import UserTag from '../UserTag';
import { useRouter } from 'next/navigation';

function PinItem({ pin }) {
  const router = useRouter();
  const user = {
    name: pin?.userName,
    image: pin?.userImage,
  };

  return (
    <div className='max-w-md mx-auto bg-white dark:bg-gray-950 shadow-lg rounded-lg overflow-hidden'>
      <div onClick={() => router.push("/pin/" + pin.id)}>
        <Image
          src={pin.image}
          alt={pin.title}
          width={500}
          height={500}
          layout="responsive"
          className=' max-h-96 rounded-t-lg bg-gray-50 dark:bg-gray-900 cursor-pointer'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-semibold dark:text-white text-gray-800'>{pin.title}</h2>
        <UserTag user={user} />
      </div>
    </div>
  );
}

export default PinItem;
