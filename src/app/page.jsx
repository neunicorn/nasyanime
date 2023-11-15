import AnimeList from "@/components/AnimeList";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  getRandomAnime,
} from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("/top/anime", "limit=5");
  const seasonNow = await getAnimeResponse("/seasons/now", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse(
    "/recommendations/anime",
    "entry"
  );
  recomendedAnime = { data: getRandomAnime(recomendedAnime, 10) };
  return (
    <main className="bg-slate-100 pb-12">
      {/* anime paling populer */}
      <section>
        <div className="container pt-6">
          <AnimeList
            api={topAnime}
            title={"Paling Populer"}
            route={"/popular"}
          />
        </div>
      </section>
      {/* anime paling baru */}
      <section className="mt-6">
        <div className="container pt-6">
          <AnimeList api={seasonNow} title={"Terbaru"} route={"/new"} />
        </div>
      </section>
      <section className="mt-6">
        <div className="container pt-6">
          <AnimeList api={recomendedAnime} title={"Rekomendasi Anime"} />
        </div>
      </section>
    </main>
  );
};

export default Page;
