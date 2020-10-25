import "./footer.css";
import { createElement } from "../utils/elements";
export const createFooter = () => {
  const humanCheckbox = createElement("input", {
    className: "humanCheckbox",
    type: "checkbox",
    id: "humanCheck",
  });

  const footerImg = createElement("img", {
    className: "footer__img",
    src: "https://robohash.org/humansKillRobos.svg?set=set5",
  });
  const humanLabel = createElement("label", {
    className: "humanLabel",
    children: [footerImg],
  });
  humanLabel.setAttribute("for", "humanCheck");

  const humanContainer = createElement("div", {
    className: "humanContainer",
    children: [humanCheckbox, humanLabel],
  });
  const humanShoutOut = createElement("div", {
    className: "humanShoutOut",
    innerText: "   …  Humans 4tw 👾",
  });
  const footer = createElement("footer", {
    className: "footer",
    children: [humanContainer, humanShoutOut],
  });

  return footer;
};
