import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-gray-800 text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-2xl font-blod hidden md:inline'>Coffee With Cafe</div>
      <div className='space-x-6'>
      <a href="#manu" className='hover:text-gray-400'>Menu</a>
      <a href="#bill" className='hover:text-gray-400'>Bill</a>
    </div>
    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Connect Me</button>
    </div>
    </nav>
  )
}

export default Nav
