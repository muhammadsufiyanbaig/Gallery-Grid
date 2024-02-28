
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function PinItem({ pin }) {
  const router = useRouter();
  const user = {
    name: pin?.userName,
    image: pin?.userImage,
  };

  return (
    <div className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'>
      <div onClick={() => router.push("/pin/" + pin.id)}>
        <Image
          src={pin.image}
          alt={pin.title}
          width={500}
          height={500}
          layout="responsive"
          className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white hover:text-gray-500'>{pin.title}</span>
      </div>
    </div>
  );
}

export default PinItem;
