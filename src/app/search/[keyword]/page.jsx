import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decode = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const searchAnime = await response.json();

  return (
    <>
      {/* anime paling populer */}
      <section>
        <div className="container pt-6">
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
