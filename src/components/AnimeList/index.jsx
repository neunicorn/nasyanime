import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const AnimeList = ({ api, title, route }) => {
  return (
    <>
      {title || route ? <Header title={title} route={route} /> : null}

      console.log(api.data);
      console.error(api.data);

      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-6">
        {api.data?.map((data) => {
            console.log(data);
          return (
            <div
              key={data.mal_id}
              className="bg-white rounded overflow-hidden shadow-lg pb-2 group"
            >
              <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
                <div className="overflow-hidden">
                  <Image
                    src={data.images.webp.image_url}
                    width={300}
                    height={200}
                    alt="anime"
                    className="img-container group-hover:scale-110 transition duration-500 ease-in-out"
                  />
                </div>
                <h3 className="font-medium truncate px-2 mt-2 text-xs md:text-base text-slate-800">
                  {data.title}
                </h3>
                <p className="text-xs px-2 md:text-sm text-slate-500">
                  Score: {data.score}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
