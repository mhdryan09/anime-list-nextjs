"use client";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [limit, setLimit] = useState(8);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async (limit) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=${limit}`
    );
    const topAnime = await response.json();
    setTopAnime(topAnime);
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
              className="px-4 py-2 bg-accent text-primary rounded"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
