export const getAnimeResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getNestedAnimeResponse = async (resource, objProp) => {
  try {
    const response = await getAnimeResponse(resource);
    return (response.data = response.data.flatMap((item) => item[objProp]));
  } catch (err) {
    console.log(err);
  }
};

export const getRandomAnime = (arr, n) => {
  const shuffle = [...arr].sort(() => 0.5 - Math.random());
  const data = shuffle.slice(0, n);
  return data;
};
