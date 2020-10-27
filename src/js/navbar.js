import anime from "animejs/lib/anime.es.js";
import { ScrambleText } from "./scrambleText.js";

class SmallWidthNavbar {
  constructor(query, btnQuery) {
    this.elem = document.querySelector(query);
    this.btnElem = document.querySelector(btnQuery);
    this.labels = this.elem.querySelectorAll(".js-link-label");
    this.stateOpen = false;
    this.animating = false;
    // this.switchButton = null;

    // When a link is clicked
    this.elem.addEventListener("click", (e) => {
      if (
        e.target.tagName == "A" ||
        e.target.classList.contains("js-link-label")
      )
        this.close();
    });

    this.btnElem.addEventListener("click", () => {
      if (this.stateOpen) this.close();
      else this.open();
    });
  }

  open() {
    this.animating = true;
    anime({
      duration: 500,
      autoplay: true,
      easing: "easeOutCubic",
      targets: this.elem,
      translateX: [0, "-100%"],
      begin: () => {
        this._animateButton();
        this.labels.forEach((elem) => {
          new ScrambleText(elem, { delay: 100 }).scramble();
        });
      },
      complete: () => {
        this.stateOpen = !this.stateOpen;
        this.animating = false;
      },
    });
  }

  close() {
    this.animating = true;
    anime({
      duration: 500,
      autoplay: true,
      easing: "easeOutCubic",
      targets: this.elem,
      translateX: [0, "-100%"],
      direction: "reverse",
      begin: () => {
        this._animateButton(true);
        this.labels.forEach((elem) => {
          new ScrambleText(elem, { delay: 100 }).scramble(true);
        });
      },
      complete: () => {
        this.stateOpen = !this.stateOpen;
        this.animating = false;
      },
    });
  }

  _animateButton(reverse = false) {
    const direction = reverse ? "reverse" : "normal";

    anime
      .timeline({
        easing: "easeOutQuad",
        duration: 200,
        direction,
      })
      .add({
        targets: this.btnElem.children,
        width: ["100%", "0%"],
      })
      .add({
        targets: [this.btnElem.firstElementChild],
        keyframes: [{ rotate: [0, 45] }, { width: "100%" }],
      })
      .add(
        {
          targets: [this.btnElem.lastElementChild],
          keyframes: [{ rotate: [0, -45] }, { width: "100%" }],
        },
        200
      );
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
          opacity: [0.2, 1],
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
