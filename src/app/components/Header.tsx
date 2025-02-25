import React from 'react'

export default function Header() {

  function allCaps(text: string){
    return text.toUpperCase();
  }

  return (
    <header className='fixed top-0 z-20 text-white font-extrabold px-5 lg:px-10 h-20 w-screen flex justify-between items-center text-xs'>
      <h1>
        {allCaps('MyBlog')}
      </h1>
      {/* <ul className='flex gap-3'>
        <li>{allCaps('Shop')}</li>
        <li>{allCaps('Gallery')}</li>
        <li>{allCaps('Login')}</li>
      </ul> */}
      <div className='font-semibold'>
        Menu
      </div>
    </header>
  )
}
