export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`
  );
  const data = await response.json();

  return data;
};

export const getNestedAnimeResponse = async (resource, objProp) => {
  const response = await getAnimeResponse(resource);
  return response.data?.flatMap((item) => item.entry);
};

export const getRandomAnime = (arr, n) => {
  const shuffle = [...arr].sort(() => 0.5 - Math.random());
  const data = shuffle.slice(0, n);
  return data;
};
