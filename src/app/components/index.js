import Image from 'next/image'
import React from 'react'

const AnimeList = ({ title, images }) => {
  return (
    <div className='bg-indigo-500'>
      <Image src={images} alt='image' width={600} height={400} />
      <h3>{title}</h3>
    </div>

  )
}

export default AnimeList