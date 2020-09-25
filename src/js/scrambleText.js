import anime from "animejs/lib/anime.es.js";

class ScrambleText {
  constructor(query, options) {
    if (typeof query === "string") this.elem = document.querySelector(query);
    else this.elem = query;

    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$#&%";
    this.options = options;
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
      ...this.options,
      targets: this.config,
      duration: this.config.duration,
      count: [0, this.config.max],
      round: 1,
      easing: "linear",
      autoplay: true,
      direction: reverse ? "reverse" : "normal",
      update: () => {
        this.elem.innerText = this._getRandomText();
      },
    });
  }
}

class ScrambleTexts {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.labels = this.elem.dataset.labels.split(",");
    console.log(`Labels ${typeof this.labels} ${this.labels}`);
    this.elem.setAttribute("data-label", this.labels[0]);
    new ScrambleText(this.elem).scramble();
  }

  scrambleTo(idx) {
    new ScrambleText(this.elem, {
      complete: () => {
        this.elem.setAttribute("data-label", this.labels[idx]);
        new ScrambleText(this.elem).scramble();
        console.log("Complete anim");
      },
    }).scramble(true);
  }
}

export { ScrambleText, ScrambleTexts };
