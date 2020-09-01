import anime from "animejs/lib/anime.es.js";

export default class HamburgerButton {
  constructor(query, clickHandler) {
    // Target element
    this.elem = document.querySelector(query);
    // State open/close
    this.isOpen = false;
    // Anime object
    this.anim = anime
      .timeline({
        easing: "easeOutQuad",
        duration: 200,
        autoplay: false,
      })
      .add({
        targets: this.elem.children,
        width: "10%",
      })
      .add({
        targets: [this.elem.children[0], this.elem.children[2]],
        keyframes: [{ rotate: 45 }, { top: "50%", width: "100%" }],
      })
      .add(
        {
          targets: this.elem.children[1],
          rotate: [0, -45],
          width: "100%",
          top: "50%",
        },
        200
      );

    this.elem.addEventListener("click", () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        if (this.anim.reversed) this.anim.reverse();
      } else {
        if (!this.anim.reversed) this.anim.reverse();
      }
      this.anim.play();
      clickHandler(this.isOpen);
    });
  }
}
