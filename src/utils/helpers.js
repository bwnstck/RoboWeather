import { createElement } from "./elements";

export function removeAllChildNodes(parent) {
  console.log("removed: ", parent.firstChild);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const loadingImg = createElement("img", {
  className: "loadingImg",
  src: `https://media1.tenor.com/images/e8252f2679f8c77bcc2732fbacf0eeec/tenor.gif?itemid=5295987`,
  alt: "Bean Eater",
});

const loadingText = createElement("marquee", {
  className: "loadingText",
  innerHTML:
    "Please wait, till a <b>Robo</b> fetches your <b>WeatherData</b>...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;",
});

const loadingContainer = createElement("div", {
  className: "loadingContainer",
});

export function addRemoveLoading(loading) {
  let output = document.querySelector(".outputContainer");

  if (loading) {
    loadingContainer.append(loadingText, loadingImg);
    removeAllChildNodes(output);
    output.append(loadingContainer);
  }
}

export function generateRandomSeed(length) {
  let randomSeed = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    randomSeed += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  console.log(randomSeed);
  return randomSeed;
}

export function getBase64Image(img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export function setNewProfilePicture() {
  let randomSeed = generateRandomSeed(5);
  imgSrc = `https://robohash.org/you-${randomSeed}.svg?set=set5`;
  localStorage.setItem("imgSrc", imgSrc);
  console.log("SET to localstorage");
  return imgSrc;
}
