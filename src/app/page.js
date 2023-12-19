import Link from "next/link";
import AnimeList from "./components/AnimeList/page";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const animeList = await response.json();
  // console.log(animeList.data);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">PALING POPULER</h1>
        <Link href="/populer" className="text-sm underline transition-all md:text-xl hover:text-indigo-500">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
        {animeList.data.map(anime => {
          return (
            <div key={anime.mal_id} className="shadow-xl">
              <AnimeList title={anime.title} images={anime.images.webp.image_url} id={anime.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
