import { ImageData } from "../types/types.ts";

export function card(data: ImageData): HTMLElement {
  //These are the nodes I will use for each image fetched from the api

  const div = document.createElement("div");
  const ul = document.createElement("ul");

  const img = document.createElement("img");
  img.src = data.largeImageUrl;

  const userImage = document.createElement("img");
  userImage.src = data.userImageUrl;

  const userName = document.createElement("p");
  userName.textContent = data.user;

  const tags = document.createElement("li");
  tags.textContent = data.tags;

  //We than append data to each one

  ul?.append(tags);
  div?.append(img, userImage, userName, ul);

  return div;
}
