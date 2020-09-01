import HamburgerButton from "./hamburgerButton.js";
import { SmallWidthNavbar } from "./navbar.js";
import "../scss/style.scss";

console.log("Hello World!!");
const smallNavbar = new SmallWidthNavbar(".js-small-width-nav");
const Btn = new HamburgerButton(".js-btn-toggle-nav", (isOpen) => {
  console.log("Clicked! State " + isOpen);
  if (isOpen) smallNavbar.open();
  else smallNavbar.close();
});
Btn;
