import anime from "animejs/lib/anime.es.js";

export default class ScrambleText {
  constructor(query, delay = 0) {
    if (typeof query === "string") this.elem = document.querySelector(query);
    else this.elem = query;

    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$#&%";
    this.delay = delay;
    this.config = {
      originalTxt: this.elem.dataset.label,
      count: 0,
      max: this.elem.dataset.label.length * 50,
      duration: this.elem.dataset.label.length * 40,
    };
  }

  _getRandomText() {
    let txt = "";
    const len = Math.floor(
      this.config.originalTxt.length * (this.config.count / this.config.max)
    );
    if (this.config.count == this.config.max) return this.config.originalTxt;
    if (len == 0) return "";

    txt += this.config.originalTxt.slice(0, len);
    txt += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
    return txt;
  }

  scramble(reverse = false) {
    anime({
      targets: this.config,
      duration: this.config.duration,
      count: [0, this.config.max],
      round: 1,
      easing: "linear",
      autoplay: true,
      delay: this.delay,
      direction: reverse ? "reverse" : "normal",
      update: () => {
        this.elem.innerText = this._getRandomText();
      },
    });
  }
}
