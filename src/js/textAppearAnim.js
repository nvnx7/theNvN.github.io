import anime from "animejs/lib/anime.es.js";

export default class TextAppearAnim {
  constructor(query, options = {}) {
    if (typeof query === "string") this.elem = document.querySelector(query);
    else this.elem = query;
    this.options = options;

    const textElemList = this.elem.querySelectorAll(".js-text");
    for (let textElem of textElemList) {
      const pieces = textElem.textContent
        .trim()
        .split(" ")
        .map((piece) => {
          return `<span class="text-piece-wrapper"><span class="text-piece">${piece}</span></span>`;
        });
      textElem.innerHTML = pieces.join("");
    }

    anime.set(this.elem.querySelectorAll(".text-piece"), {
      translateY: "110%",
    });
  }

  play(reverse = false, callbackOptions = {}) {
    anime
      .timeline({
        ...this.options,
        duration: this.options.duration ?? 1000,
        easing: "easeOutExpo",
        direction: reverse ? "reverse" : "normal",
      })
      .add(
        {
          targets: this.elem.querySelector(".js-line-top"),
          right: ["100%", 0],
          begin: callbackOptions.begin,
        },
        0
      )
      .add(
        {
          targets: this.elem.querySelector(".js-line-bottom"),
          left: ["100%", 0],
        },
        0
      )
      .add(
        {
          targets: this.elem.querySelectorAll(".text-piece"),
          translateY: ["110%", 0],
          complete: callbackOptions.complete,
        },
        0
      );
  }
}
