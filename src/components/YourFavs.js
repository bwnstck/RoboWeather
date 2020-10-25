import {
  generateRandomSeed,
  getBase64Image,
  removeAllChildNodes,
} from "../utils/helpers";

const { createElement } = require("../utils/elements");

let imgSrc = localStorage.getItem("imgSrc") || "";

if (imgSrc === "") {
  let randomSeed = generateRandomSeed(5);
  imgSrc = `https://robohash.org/you-${randomSeed}.svg?set=set5`;
  localStorage.setItem("imgSrc", imgSrc);
  console.log("SET to localstorage");
} else {
  let dataSrc = localStorage.getItem("imgSrc");
  imgSrc = dataSrc;
  console.log("GET from localstorage");
}

const userImg = createElement("img", {
  className: "profilePicture",
  src: imgSrc,
});
// Look in localStorage nach Bildern, wenn JA Bild verwenden
// const userImg =
//   ? localStorage(setItem("imgData"), userImg)
//   : console.log("wohoo");

export const generateYourFavs = (favouriteCities, favCitiesBox) => {
  if (favouriteCities.length > 0) {
    let header = createElement("h6", {
      className: "robosHeader",
      innerHTML: `Your Favourite Cities:`,
    });

    let headerBody = createElement("div", {
      className: "headerBody",
      children: [userImg, header],
    });
    favCitiesBox.append(headerBody) || "";
  } else {
    return document.createElement("div");
  }
};
