import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword); // apabila ada keyword yg mengandung tanda khusus kita singkirkan
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  const searchAnime = await response.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default SearchPage;
