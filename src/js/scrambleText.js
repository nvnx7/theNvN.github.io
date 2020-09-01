import anime from "animejs/lib/anime.es.js";

export default class ScrambleText {
  constructor(query) {
    if (typeof query === "string") this.elem = document.querySelector(query);
    else this.elem = query;

    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    this.config = {
      originalTxt: this.elem.innerText,
      count: 0,
      max: this.elem.innerText.length * 50,
      duration: this.elem.innerText.length * 40,
    };
    this.anim = anime({
      targets: this.config,
      duration: this.config.duration,
      count: this.config.max,
      round: 1,
      easing: "linear",
      autoplay: false,
      delay: 50,
      update: () => {
        this.elem.innerText = this._getRandomText();
      },
    });
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
    if (!reverse) {
      if (this.anim.reversed) this.anim.reverse();
    } else {
      if (!this.anim.reversed) this.anim.reverse();
    }
    this.anim.play();
  }
}
