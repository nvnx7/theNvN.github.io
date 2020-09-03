import { LargeWidthNavbar } from "./navbar";

export default class FullPage {
  constructor(query, callback = null) {
    this.elem = document.querySelector(query);
    this.sections = this.elem.querySelectorAll(".js-full-page-section");
    this.lastSectionIdx = -1;
    this.callback = callback;
    this.navbar = null;
  }

  _isSectionInViewPort(idx) {
    const rect = this.sections[idx].getBoundingClientRect();
    return rect.top < 0.3 * window.innerHeight && rect.top >= 0;
  }

  _loop() {
    this.sections.forEach((_, idx) => {
      if (this._isSectionInViewPort(idx)) {
        if (this.lastSectionIdx != idx) {
          if (this.navbar) {
            this.navbar.setCurrentNavLink(idx);
          }
          if (this.callback) this.callback(idx);
        }
        this.lastSectionIdx = idx;
      }
    });
    // callback param passed as arrow func. to keep this reference to current object instance
    requestAnimationFrame(() => {
      this._loop();
    });
  }

  init() {
    this._loop();
  }

  setUpWithNavbar(navbar) {
    this.navbar = navbar instanceof LargeWidthNavbar ? navbar : null;
  }
}
