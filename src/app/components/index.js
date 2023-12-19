import Image from 'next/image'
import React from 'react'

const AnimeList = () => {
  return (
    <div className='grid h-32 grid-cols-3 gap-2'>
      <div className='bg-indigo-500'>
        <Image src="https://placehold.co/600x400/png" alt='image' width={600} height={400} />
        <h3>Judul Anime Disini</h3>
      </div>
      <div className='bg-indigo-500'>Kotak 2</div>
      <div className='bg-indigo-500'>Kotak 3</div>
      <div className='bg-indigo-500'>Kotak 4</div>
      <div className='bg-indigo-500'>Kotak 5</div>
      <div className='bg-indigo-500'>Kotak 6</div>
    </div>

  )
}

export default AnimeList