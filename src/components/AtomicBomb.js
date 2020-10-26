import "./atomicBomb.css";
const { createElement } = require("../utils/elements");

export function createAtomicBomb(onClick) {
  const bombButton = createElement("button", {
    className: "bombButton",
    innerText: "💥💥🚀🚀💣💣",
    ...onClick,
  });

  return bombButton;
}
