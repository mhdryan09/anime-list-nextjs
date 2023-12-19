import AnimeList from "./components";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const animeList = await response.json();
  // console.log(animeList.data);

  return (
    <div>
      <h1>PALING POPULER</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {animeList.data.map(anime => {
          return (
            <div key={anime.mal_id} className="shadow-xl">
              <AnimeList title={anime.title} images={anime.images.webp.image_url} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
