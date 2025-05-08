//fetching images for api to detect faces

const URL = import.meta.env.VITE_URL;
const API = import.meta.env.VITE_KEY;

const imageType: string = "photo";

export async function getImages(searchTerm: string): Promise<ImageData[]> {
  const url = `${URL}?key=${API}&q=${encodeURIComponent(
    searchTerm
  )}&image_type=${imageType}`;
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error(`API request: ${response}`);
    }
    const data = await response.json();

    return data.hits;
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
  return [];
}
