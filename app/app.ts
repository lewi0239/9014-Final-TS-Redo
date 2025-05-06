require("dotenv").config();
dotenv.config();

const URL = process.env.URL;
const API = process.env.API;
//import functions

//load application when app is loaded
document.addEventListener("DOMContentLoaded", app);

//Define html elements

//runs web application when dom is loaded
function app() {
  console.log("app is running..");
}

//fetching images for api to detect faces
function getImages(searchImage): void {}

//ForEach image detect face
