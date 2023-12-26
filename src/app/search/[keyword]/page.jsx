import { getAnimeResponse } from "@/lib/api-lib";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword); // apabila ada keyword yg mengandung tanda khusus kita singkirkan
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default SearchPage;
