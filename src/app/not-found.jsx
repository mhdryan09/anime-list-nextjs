'use client'

import { FileSearch } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
const notFound = () => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
      <div className='flex justify-center items-center gap-4 flex-col'>
        <FileSearch size={44} className='text-accent' />
        <h3 className='text-4xl text-accent font-bold'>NOT FOUND</h3>
        <Link className='text-primary hover:text-accent underline' href='/'>Kembali</Link>
      </div>
    </div>
  )
}

export default notFound;