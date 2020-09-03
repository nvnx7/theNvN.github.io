import anime from "animejs/lib/anime.es.js";
import ScrambleText from "./scrambleText.js";

class SmallWidthNavbar {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.labels = this.elem.querySelectorAll(".js-link-label");
    this.anim = anime({
      duration: 600,
      autoplay: false,
      easing: "easeOutCubic",
      targets: this.elem,
      translateX: "-100%",
      begin: () => {
        for (let label of this.labels) {
          new ScrambleText(label, 100).scramble();
        }
      },
    });
  }

  open() {
    console.log("Open!");
    if (this.anim.reversed) {
      this.anim.reverse();
    }
    this.anim.play();
  }

  close() {
    console.log("Close!");
    if (!this.anim.reversed) {
      this.anim.reverse();
    }
    this.anim.play();
  }
}

class LargeWidthNavbar {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.navLinks = this.elem.querySelectorAll(".js-nav-link");
    this.current = -1;
  }

  _playAnim(idx, reverse = false) {
    const indicatorElem = this.navLinks[idx].querySelector(
      ".js-nav-link-indicator"
    );
    const labelElem = this.navLinks[idx].querySelector(".js-nav-link-label");
    const numberElem = this.navLinks[idx].querySelector(".js-nav-link-number");

    anime
      .timeline({
        easing: "easeOutQuad",
        duration: 300,
        autoplay: true,
        direction: reverse ? "reverse" : "normal",
      })
      .add({
        targets: indicatorElem,
        width: [5, 15],
      })
      .add(
        {
          targets: numberElem,
          opacity: [0.4, 1],
          begin: () => {
            new ScrambleText(labelElem).scramble(reverse);
          },
        },
        0
      );
  }

  setCurrentNavLink(idx) {
    if (idx < 0 || idx >= this.navLinks.length) return;
    // console.log(`Set current nav link ${idx}/${this.navLinks.length}`);
    if (this.current >= 0) this._playAnim(this.current, true);
    this._playAnim(idx);
    this.current = idx;
  }
}

export { SmallWidthNavbar, LargeWidthNavbar };
