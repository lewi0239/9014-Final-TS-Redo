"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageFetch_ts_1 = require("./imageFetch.ts");
document.addEventListener("DOMContentLoaded", app);
//load application when app is loaded
//Declaring global variables
//import functions
//runs web application when dom is loaded
function app() {
    console.log("app is running..");
    setupEventListeners();
}
function setupEventListeners() {
    var form = document.querySelector("form");
    var input = document.querySelector("#searchPhoto");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
        e.preventDefault();
        var searchTerm = input === null || input === void 0 ? void 0 : input.value.trim();
        if (searchTerm)
            (0, imageFetch_ts_1.getImages)(searchTerm);
        console.log(searchTerm);
    });
}
//ForEach image detect face
