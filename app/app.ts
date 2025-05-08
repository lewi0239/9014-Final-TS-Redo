import { setupEventListeners } from "./events.ts";
import { card } from "./widgets/card.ts";
import { getImages } from "./imageFetch.ts";
import type { ImageData } from "./types/types.ts";

document.addEventListener("DOMContentLoaded", init);

function init() {
  setupEventListeners(getCardImages);
}
async function getCardImages(searchTerm: string): Promise<void> {
  const images: ImageData[] = await getImages(searchTerm);
  const body = document.querySelector("body");
  const container = document.querySelector("#gallery");

  if (!container) return;

  container.textContent = "";

  images.forEach((imgData) => {
    const cards = card(imgData);
    container.appendChild(cards);
  });
}
