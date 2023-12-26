"use client";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useEffect, useState } from "react";
import { getAnimeResponse, getNestedAnimeResponse } from "@/lib/api-lib";

const Home = () => {
  const [limit, setLimit] = useState(8);
  const [topAnime, setTopAnime] = useState([]);
  const [recommendedAnime, setRecommendedAnime] = useState([]);

  const fetchData = async (limit) => {
    const topAnime = await getAnimeResponse("top/anime", `limit=${limit}`);
    setTopAnime(topAnime);

    let recommendedAnime = await getNestedAnimeResponse(
      "recommendations/anime",
      "entry"
    );
    recommendedAnime = {
      data: recommendedAnime.slice(0, 8),
    };
    setRecommendedAnime(recommendedAnime);
  };

  useEffect(() => {
    if (limit <= 25) {
      fetchData(limit);
    }
  }, [limit]);

  const handleLoadmore = () => {
    if (limit === 24) {
      setLimit(limit + 1);
      return;
    }
    setLimit(limit + 8);
  };

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          LinkTitle="Lihat Semua"
          LinkHref="/populer"
        />
        <AnimeList api={topAnime} />
        {topAnime?.data?.length > 0 && limit < 25 && (
          <div className="flex justify-center py-5">
            <button
              onClick={handleLoadmore}
              className="px-4 py-2 rounded bg-accent text-primary"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* anime Recommendations */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Home;
