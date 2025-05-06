import dotenv from "dotenv";
dotenv.config();
//load application when app is loaded
document.addEventListener("DOMContentLoaded", app);
//Declaring global variables
const URL = process.env.URL;
const API = process.env.API;
const searchImage: string = "";
const imageType: string = "photo";
//import functions

//runs web application when dom is loaded
function app() {
  console.log("app is running..");
  getImages(searchImage);
}

//fetching images for api to detect faces
async function getImages(searchImage: string): Promise<void> {
  const url = `${URL}?key=${API}&q=${encodeURIComponent(
    searchImage
  )}&image_type=${imageType}`;
  try {
    const response = await fetch(url);
  } catch {}
}

//ForEach image detect face
