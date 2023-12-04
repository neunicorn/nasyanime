import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decode = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("/anime", `q=${keyword}`);

  return (
    <>
      {/* anime paling populer */}
      <section className="min-h-[90vh]">
        <div className="container py-6">
          <AnimeList
            api={searchAnime}
            title={"Pencarian untuk " + decode + " :"}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
