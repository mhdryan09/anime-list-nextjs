import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <header className='bg-indigo-500'>
      <div className='flex flex-col justify-between gap-2 p-4 md:flex-row'>
        <Link href="/" className='text-2xl font-bold text-white'>Jikan Movie</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar