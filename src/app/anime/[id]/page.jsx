import { getAnimeResponse } from "@/lib/api-lib";
import VideoPlayer from "@/components/Utils/VideoPlayer";
import Image from "next/image";

const DetailAnimePage = async ({ params: { id } }) => {
  // param yang ingin diambil harus sesuai dengan nama folder yang kita buat,
  // karena kita buat nama foldernya [id] maka kita harus menangkap params nya dengan nama id

  const detailAnime = await getAnimeResponse(`anime/${id}`);
  // console.log(detailAnime.data);
  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl text-primary">
          {detailAnime.data.title} - {detailAnime.data.year}
        </h3>
      </div>

      <div className="p-4 flex gap-2 text-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3>Peringkat</h3>
          <p>{detailAnime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3>Score</h3>
          <p>{detailAnime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3>Anggota</h3>
          <p>{detailAnime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3>Episode</h3>
          <p>{detailAnime.data.episodes}</p>
        </div>
      </div>

      <div className="p-4 flex gap-2 text-primary sm:flex-nowrap flex-wrap">
        <Image
          src={detailAnime.data.images.webp.image_url}
          alt={detailAnime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full object-cover rounded"
        />
        <p className="text-justify text-base">{detailAnime.data.synopsis}</p>
      </div>

      <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default DetailAnimePage;
