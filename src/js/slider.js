import anime from "animejs/lib/anime.es.js";

class Slider {
  constructor(query, queryControls) {
    this.elem = document.querySelector(query);
    this.items = this.elem.querySelectorAll(".js-slider-item");
    this.controls = document.querySelector(queryControls);
    this.controlBtnList = Array.from(this.controls.children);
    console.log(this.controls);
    this.current = 0;

    this.controls.addEventListener("click", (e) => {
      const next = this.controlBtnList.indexOf(e.target);
      if (next < 0 || this.current == next) return;
      console.log(`Go to idx ${next}`);
      anime
        .timeline({
          duration: 1000,
          easing: "easeInOutExpo",
        })
        .add({
          targets: this.items[next],
          translateX: [`100%`, 0],
        })
        .add(
          {
            targets: this.items[this.current],
            translateX: [0, `-100%`],
            complete: () => {
              this.current = next;
              console.log(`Complete anim`);
            },
          },
          0
        );
    });
  }
}

export default Slider;
