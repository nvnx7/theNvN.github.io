import anime from "animejs/lib/anime.es.js";

export default class TextAppearAnim {
  constructor(query) {
    this.elem = document.querySelector(query);
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
  }

  play() {
    anime
      .timeline({
        duration: 1000,
        easing: "easeOutExpo",
      })
      .add({
        targets: this.elem.querySelector(".js-line-top"),
        right: ["100%", 0],
      })
      .add(
        {
          targets: this.elem.querySelector(".js-line-bottom"),
          left: ["100%", 0],
        },
        0
      )
      .add(
        {
          targets: ".text-piece",
          translateY: ["100%", 0],
          duration: 1500,
        },
        0
      );
  }
}
