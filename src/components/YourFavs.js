import { removeAllChildNodes } from "../utils/helpers";

const { createElement } = require("../utils/elements");

export const generateYourFavs = (favouriteCities, favCitiesBox) => {
  if (favouriteCities.length > 0) {
    let header = createElement("h6", {
      className: "robosHeader",
      innerText: "Your Favourite Cities:",
    });
    favCitiesBox.append(header) || "";
  } else {
    return document.createElement("div");
  }
};
