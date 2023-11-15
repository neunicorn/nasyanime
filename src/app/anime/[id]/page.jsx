import React from "react";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  getRandomAnime,
} from "@/libs/api";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`/anime/${id}`);
  let recomendation = await getAnimeResponse(`/anime/${id}/recommendations`);

  recomendation = { data: getRandomAnime(recomendation.data, 10) };

  const RecomendationRender = () => {
    return (
      <section className="mt-12">
        <p className="px-4 pt-2 text-xl font-bold text-slate-800">
          You May Like This
        </p>
        <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-6">
          {recomendation.data?.map((data) => {
            return (
              <div
                key={data.entry.mal_id}
                className="bg-white rounded overflow-hidden shadow-lg pb-2 group"
              >
                <Link
                  href={`/anime/${data.entry.mal_id}`}
                  className="cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={data.entry.images.webp.image_url}
                      width={300}
                      height={200}
                      alt="anime"
                      className="img-container group-hover:scale-110 transition duration-500 ease-in-out"
                    />
                  </div>
                  <h3 className="truncate px-2 mt-2 text-xs md:text-sm text-slate-600">
                    {data.entry.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto py-6 min-h-[90vh]">
      {/* detail anime */}
      <section>
        <div className="px-4">
          <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-slate-800 mb-4">
            {anime.data?.title}
          </h3>
        </div>
        <div className="px-4 py-2 flex gap-2 overflow-x-auto">
          <div className="tag-anime-detail">
            <h3>RANK</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="tag-anime-detail">
            <h3>SCORE</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="tag-anime-detail">
            <h3>GENRES</h3>
            <p className="text-[10px] sm:text-xs text-center">
              {anime.data.genres.map((data, index) => {
                if (index === 0) {
                  return `${data.name}`;
                } else if (index <= 2) {
                  return `, ${data.name}`;
                }
              })}
            </p>
          </div>
          <div className="tag-anime-detail">
            <h3>EPISODES</h3>
            <p>{anime.data.episodes}</p>
          </div>
        </div>
        <div className="px-4 flex flex-wrap md:flex-nowrap gap-4 text-slate-700">
          <div className="group w-full md:w-1/3 overflow-hidden hover:scale-95 rounded object-cover transition duration-500 ease-in-out">
            <Image
              src={anime.data.images.webp.image_url}
              alt="anime"
              width={350}
              height={350}
              className="w-full h-[350px] rounded object-cover group-hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
          <p className="first-letter:font-semibold first-letter:text-5xl text-base md:w-2/3">
            {anime.data.synopsis}
          </p>
        </div>
      </section>

      {/* anime recomendation */}
      {recomendation.data.length > 0 && <RecomendationRender />}

      <div>
        <VideoPlayer ytId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
