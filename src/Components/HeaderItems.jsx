import React from 'react'

function HeaderItems({name, Icon}) {
  return (
    <div className="text-white flex items-center gap-3 cursor-pointer
    text-[18px] font-semibold hover:underline underline-offset-8">
        <Icon/>
        <h2 className='md:flex'>{name}</h2>
    </div>
  )
}

export default HeaderItems