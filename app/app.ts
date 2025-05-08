import { setupEventListeners } from "./events";
import { card } from "./widgets/card";
import { getImages } from "./imageFetch";
import { ImageData } from "./types/types";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("app is running..");
  setupEventListeners(getCardImages);
}
async function getCardImages(searchTerm: string): Promise<void> {
  const images: ImageData[] = await getImages(searchTerm);
  const body = document.querySelector("body");
  const container = document.createElement("div");

  images.ForEach((imgData) => {
    const cards = card(imgData);
    container.appendChild(cards);
  });

  body?.append(container);
}
