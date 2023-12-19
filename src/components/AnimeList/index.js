import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className='cursor-pointer'>
      <Image src={images} alt='image' width={350} height={350} className='object-cover w-full max-h-64' />
      <h3 className='p-4 font-bold text-md md:text-xl'>{title}</h3>
    </Link>
  )
}

export default AnimeList