import React from 'react'
import UserTag from '../UserTag'

function PinInfo({pinDetail}) {
  const user={
    name:pinDetail.userName,
    email:pinDetail.email,
    image:pinDetail.userImage
  }
  return (
    <div className='space-y-2'>
      <h2 className='text-[30px] font-bold mb-10'>{pinDetail.title}</h2>
      <UserTag user={user} />
      <h2 className='mt-10'>{pinDetail.desc}</h2>
      <button className="px-3 py-2 text-gray-50 bg-blue-300 hover:bg-blue-400 rounded-3xl"
      onClick={()=>window.open(pinDetail.link)}>Visit</button>
    </div>
  )
}

export default PinInfo