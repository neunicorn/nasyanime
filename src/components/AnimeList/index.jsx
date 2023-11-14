import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const AnimeList = ({ api, title, route }) => {
  return (
    <>
      <Header title={title} route={route} />
      <div className="grid xl:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 pt-6">
        {api.data.map((data) => {
          return (
            <div
              key={data.mal_id}
              className="rounded overflow-hidden shadow-lg pb-2 "
            >
              <Link href={`/${data.mal_id}`} className="cursor-pointer">
                <div className="overflow-hidden">
                  <Image
                    src={data.images.webp.image_url}
                    width={300}
                    height={200}
                    alt="anime"
                    className="group-hover:scale-150 transition duration-500 ease-in-out"
                  />
                </div>
                <h3 className="font-medium truncate px-2 mt-2 text-xs md:text-base">
                  {data.title}
                </h3>
                <p className="text-xs px-2 md:text-sm">score: {data.score}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
