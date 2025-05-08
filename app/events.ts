import { getImages } from "./imageFetch.ts";
function setupEventListeners(onSearch: (searchTerm: string) => void) {
  const form = document.querySelector("form");
  const input = document.querySelector("#searchPhoto") as HTMLInputElement;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = input?.value.trim();
    if (searchTerm) onSearch(searchTerm);
  });
}

export { setupEventListeners };
