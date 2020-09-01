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
          new ScrambleText(label).scramble();
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

export { SmallWidthNavbar };
