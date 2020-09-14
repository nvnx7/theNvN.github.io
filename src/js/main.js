import HamburgerButton from "./hamburgerButton.js";
import { SmallWidthNavbar, LargeWidthNavbar } from "./navbar.js";
import "../scss/style.scss";
import FullPage from "./fullPage.js";
import playLogoAnim from "./logoAnim.js";
import TextAppearAnim from "./textAppearAnim.js";
import playLowPolyPicAnim from "./lowPolyPicAnim";

const smallNavbar = new SmallWidthNavbar(".js-small-width-nav");
const Btn = new HamburgerButton(".js-btn-toggle-nav", (isOpen) => {
  console.log("Clicked! State " + isOpen);
  if (isOpen) smallNavbar.open();
  else smallNavbar.close();
});

const largeWidthNavbar = new LargeWidthNavbar(".js-large-width-navbar");
const salutationTextAppear = new TextAppearAnim(".js-text-greet-salutation");
const nameTextAppear = new TextAppearAnim(".js-text-greet-name");
const aboutTextAppear = new TextAppearAnim(".js-text-about");
const skillsTextAppear = new TextAppearAnim(".js-text-skills");
const fullPage = new FullPage(".js-full-page", (idx) => {
  switch (idx) {
    case 0:
      playLogoAnim();
      salutationTextAppear.play();
      nameTextAppear.play();
      break;
    case 1:
      aboutTextAppear.play();
      playLowPolyPicAnim(".js-low-poly-pic");
      break;
    case 2:
      skillsTextAppear.play();
      break;
  }
});

fullPage.setUpWithNavbar(largeWidthNavbar);
fullPage.init();

// const svg = document.querySelector(".js-low-poly-pic");
// svg.addEventListener("click", (e) => {
//   svg.removeChild(e.target);
// });

// svg.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   const data = [];

//   for (let el of svg.children) {
//     const points = el.getAttribute("points");
//     const fill = el.getAttribute("fill");
//     data.push({ points, fill });
//   }
//   console.log(`DATA (${data.length})==>`);
//   console.log(data);
// });

Btn;
