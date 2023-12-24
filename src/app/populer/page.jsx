"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utils/HeaderMenu";
import Pagination from "@/components/Utils/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../lib/api-lib";

const PopulerPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
   const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
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
