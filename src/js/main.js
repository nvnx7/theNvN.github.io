import HamburgerButton from "./hamburgerButton.js";
import { SmallWidthNavbar, LargeWidthNavbar } from "./navbar.js";
import "../scss/style.scss";
import FullPage from "./fullPage.js";
import playLogoAnim from "./logoAnim.js";
import TextAppearAnim from "./textAppearAnim.js";
import playLowPolyPicAnim from "./lowPolyPicAnim";
// import MouseMoveAnim from "./mouseMoveAnim.js";
import { Slider, SliderNavbar } from "./slider.js";
import { CursorDrag } from "./cursor.js";

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
// const projectsTextAppear = new TextAppearAnim(".js-text-projects");
// const skillLabelScrambleTexts = new ScrambleTexts(".js-skill-names");
// skillLabelScrambleTexts;

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
    case 3:
      // projectsTextAppear.play();
      break;
  }
});

const opacitySkillsText = {
  mouseover: () => {
    document.querySelector(".js-text-skills").classList.add("transparent");
  },
  mouseout: () => {
    document.querySelector(".js-text-skills").classList.remove("transparent");
  },
};

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

const hoverPromptElem = document.querySelector(".js-text-hover-prompt");
let cx = 0;
let cy = 0;
let dxMax = 0;
let dyMax = 0;
let usingTouch = false;

const mouseMoveHandler = (e) => {
  const dx = e.clientX - cx;
  const dy = e.clientY - cy;
  const x = easeOutCubic(dx / dxMax) * dxMax;
  const y = easeOutCubic(dy / dyMax) * dyMax;
  hoverPromptElem.style.transform = `translate(${x / 30}px, ${y / 30}px)`;
};

// Events on the skills text
document.querySelector(".js-text-skills").addEventListener("touchstart", () => {
  // For touch devices set to true before firing mouseover event
  usingTouch = true;
});

document.querySelector(".js-text-skills").addEventListener("mouseover", (e) => {
  // Don't do anything if touch input is used
  if (usingTouch) return;
  usingTouch = false;
  const classList = e.target.parentElement.parentElement.classList;
  let idx = 0;
  if (classList.contains("js-skill-name-web")) {
    idx = 0;
  } else if (classList.contains("js-skill-name-android")) {
    idx = 1;
  } else if (classList.contains("js-skill-name-ml")) {
    idx = 2;
  } else if (classList.contains("js-skill-name-ethereum")) {
    idx = 3;
  } else {
    return;
  }

  const rect = e.target.getBoundingClientRect();
  cx = rect.left + rect.width / 2;
  cy = rect.top + rect.height / 2;
  dxMax = rect.width / 2;
  dyMax = rect.height / 2;

  // Make display non - none first to get clientWidth non - zero value
  hoverPromptElem.classList.remove("hide");

  const offsetX = (hoverPromptElem.clientWidth - rect.width) / 2;
  hoverPromptElem.style.top = `${rect.top}px`;
  hoverPromptElem.style.left = `${rect.left - offsetX}px`;

  sliderNav.setTo(idx);
  opacitySkillsText.mouseover();
  document.querySelector(".js-skills-wrapper").classList.add("preview");

  document
    .querySelector(".js-text-skills")
    .addEventListener("mousemove", mouseMoveHandler);
});

document.querySelector(".js-text-skills").addEventListener("mouseout", (e) => {
  console.log("mouseout");
  if (
    e.target.parentElement.parentElement.className.indexOf("js-skill-name") < 0
  )
    return;
  hoverPromptElem.classList.add("hide");
  document.querySelector(".js-skills-wrapper").classList.remove("preview");
  opacitySkillsText.mouseout();
  document
    .querySelector(".js-text-skills")
    .removeEventListener("mousemove", mouseMoveHandler);
});

document.querySelector(".js-text-skills").addEventListener("click", (e) => {
  const classList = e.target.parentElement.parentElement.classList;
  let idx = -1;
  if (classList.contains("js-skill-name-web")) {
    idx = 0;
  } else if (classList.contains("js-skill-name-android")) {
    idx = 1;
  } else if (classList.contains("js-skill-name-ml")) {
    idx = 2;
  } else if (classList.contains("js-skill-name-ethereum")) {
    idx = 3;
  } else {
    return;
  }

  skillsTextAppear.play(true, {
    begin: () => {
      hoverPromptElem.classList.add("hide");
      opacitySkillsText.mouseout();
    },
    complete: () => {
      document.querySelector(".js-text-skills").classList.add("hide");
      document
        .querySelector(".js-skills-wrapper")
        .classList.remove("invisible");
      document.querySelector(".js-skills-wrapper").classList.remove("preview");
      sliderNav.animateIn(idx);
    },
  });
});

const slider = new Slider(".js-skills-slider");
const sliderNav = new SliderNavbar(".js-slider-navbar");
sliderNav.attachSlider(slider);

document.querySelector(".js-skills-back-btn").addEventListener("click", () => {
  sliderNav.animateOut({
    complete: () => {
      document.querySelector(".js-skills-wrapper").classList.add("invisible");
      document.querySelector(".js-text-skills").classList.remove("hide");
      skillsTextAppear.play();
      sliderNav.setTo(sliderNav.current);
      // sliderNav.setSliderTo(sliderNav.current);
    },
  });
});

new CursorDrag(".js-skills-slider", ".js-cursor", (dir) => {
  dir < 0 ? sliderNav.next() : sliderNav.prev();
});

fullPage.setUpWithNavbar(largeWidthNavbar);
fullPage.init();

document.getElementById("section-skills").scrollIntoView();

Btn;
