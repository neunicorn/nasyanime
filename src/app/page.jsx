import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const topAnime = await response.json();

  return (
    <>
      {/* anime paling populer */}
      <section>
        <div className="container pt-6">
          <AnimeList
            api={topAnime}
            title={"Paling Populer"}
            route={"/populer"}
          />
        </div>
      </section>
      {/* anime paling baru */}
      <section className="mt-6">
        <div className="container pt-6">
          <AnimeList api={topAnime} title={"Terbaru"} route={"/new"} />
        </div>
      </section>
    </>
  );
};

export default Page;
