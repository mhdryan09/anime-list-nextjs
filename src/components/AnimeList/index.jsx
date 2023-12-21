import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
      {api.data?.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} className='cursor-pointer text-primary hover:text-accent' key={anime.mal_id}>
            <Image src={anime.images.webp.image_url} alt='image' width={350} height={350} className='object-cover w-full max-h-64' />
            <h3 className='p-4 font-bold text-md md:text-xl'>{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList