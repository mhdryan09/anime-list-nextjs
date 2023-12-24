"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utils/HeaderMenu";
import Pagination from "@/components/Utils/Pagination";
import { useEffect, useState } from "react";

const PopulerPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      {topAnime?.data?.length > 1 && (
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default PopulerPage;
