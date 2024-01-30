import app from '@/app/Shared/firebaseConfig';
import React, { useEffect } from 'react';
import PinItem from './PinItem';

function PinList({ listOfPins }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {listOfPins.map((item, index) => (
        <div key={index}>
          <PinItem pin={item} />
        </div>
      ))}
    </div>
  );
}

export default PinList;