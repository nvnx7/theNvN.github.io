import anime from "animejs/lib/anime.es.js";

export default class TextAppearAnim {
  constructor(query) {
    this.elem = document.querySelector(query);
  }

  play() {
    anime
      .timeline({
        duration: 1000,
        easing: "easeOutSine",
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
          targets: this.elem.querySelector(".js-text"),
          translateY: ["100%", 0],
        },
        0
      );
  }
}
