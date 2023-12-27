export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  // mapping data untuk mengeluarkan attribute entry
  return response.data.flatMap(item => item[objectProperty]);
}

export const reproduce = (data, gap) => {
  const start = ~~(Math.random() * (data.length - gap) + 1);
  const end = start + gap;

  const response = {
    data: data.slice(start, end)
  }

  return response;
}