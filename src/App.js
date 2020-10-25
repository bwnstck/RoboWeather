import "./app.css";
import { createForm } from "./components/Form";
import { createElement } from "./utils/elements";
import { SearchWeather } from "./utils/api";
import createWeatherOutput from "./components/WeatherOutput";
import { GetRandomQuote } from "./utils/api";
import { showTime } from "./components/Watch";
import { addRemoveLoading, setNewProfilePicture } from "./utils/helpers";
import { createFavCity } from "./components/FavButtons";
import { createFooter } from "./components/Footer";
import { generateYourFavs } from "./components/YourFavs";

function App() {
  let loading = false;
  let ampm = JSON.parse(localStorage.getItem("ampm") || false);

  let favouriteCities = JSON.parse(
    localStorage.getItem("favoriteCities") || `["Cologne"]`
  );

  const headerTitle = createElement("h1", {
    innerText: "Robo-Weather",
    className: "header__title  ",
  });
  const clock = createElement("div", {
    className: "clock",
    innerHTML: "",
    onclick: (event) => {
      event.preventDefault;
      console.log("Click");
      ampm = !ampm;
      localStorage.setItem("ampm", JSON.stringify(ampm));
    },
  });
  let IntervId = null;

  function initalShowTime() {
    showTime(clock, ampm);
  }
  (() => (IntervId = setInterval(initalShowTime, 1000)))();

  const favCitiesBox = createElement("div", {
    className: "favCitiesBox",
  });

  (function createInitalFavs() {
    generateYourFavs(favouriteCities, favCitiesBox);
    favouriteCities?.map((city) => {
      const newButton = createFavCity("⭐️ ", city, "", {
        onclick: async (event) => {
          event.preventDefault();
          loading = true;
          addRemoveLoading(loading);
          const weatherObj = await SearchWeather(city);
          const randomQuote = await GetRandomQuote();
          await createWeatherOutput(
            weatherObj,
            output,
            randomQuote,
            favouriteCities
          );
          loading = false;
          addRemoveLoading(loading);
        },
      });
      favCitiesBox.append(newButton);
    });
  })();

  const subHeading = createElement("p", {
    className: "header__sub",
    innerHTML:
      "Maybe you'll get your weather, ...<br> ...if the robots are not killing humans.",
  });
  const output = createElement("div", {
    className: "outputContainer",
  });

  const form = createForm({
    onsubmit: async (event) => {
      event.preventDefault();
      loading = true;
      addRemoveLoading(loading);
      const input = document.querySelector(".input");
      const weatherObj = await SearchWeather(input.value);
      const randomQuote = await GetRandomQuote();
      input.value = "";
      await createWeatherOutput(
        weatherObj,
        output,
        randomQuote,
        favouriteCities
      );
      loading = false;
      addRemoveLoading(loading);
    },
  });

  let imgSrc = localStorage.getItem("imgSrc") || "";

  if (imgSrc === "") {
    imgSrc = setNewProfilePicture();
  } else {
    let dataSrc = localStorage.getItem("imgSrc");
    imgSrc = dataSrc;
    console.log("GET from localstorage");
  }

  const profilePic = createElement("img", {
    className: "profilePicture",
    src: imgSrc,

    onclick: () => {
      profilePic.src = setNewProfilePicture();
    },
  });

  const header = createElement("div", {
    className: "headerContainer",
    children: [headerTitle, clock, profilePic, subHeading, form, favCitiesBox],
  });

  const footer = createFooter();

  const container = createElement("div", {
    className: "container",
    children: [header, output, footer],
  });

  return container;
}

export default App;
