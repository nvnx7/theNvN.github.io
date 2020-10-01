import anime from "animejs/lib/anime.es.js";
import { ScrambleTexts } from "./scrambleText";

class Slider {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.titlesAnim = new ScrambleTexts(".js-skill-title");
    this.texts = this.elem.querySelector(".js-skill-texts");
    this.icons = this.elem.querySelector(".js-skill-icons");
    this.index = this.elem.querySelector(".js-skill-index-container");
    this.tools = this.elem.querySelectorAll(".js-skill-tools-container");
    this.current = 0;
  }

  moveTo(idx) {
    console.log(`Slider moveto ${idx}`);
    if (idx < 0) return;
    this._animateTitle(idx);
    this._animateText(idx);
    this._animateTools(idx);
    this._animateIcon(idx);
    this._animateIndex(idx);
  }

  _animateTitle(idx) {
    this.titlesAnim.scrambleTo(idx);
  }

  _animateText(idx) {
    anime({
      targets: this.texts.children[idx],
      duration: 450,
      easing: "easeOutCubic",
      opacity: [0, 1],
      translateY: ["50%", 0],
      begin: () => {
        console.log(`Slider current ${this.current}`);
        this.texts.children[this.current].classList.add("hide");
        this.texts.children[idx].classList.remove("hide");
      },
      complete: () => {
        this.current = idx;
      },
    });
  }

  _animateIcon(idx) {
    anime
      .timeline({
        duration: 250,
        easing: "easeOutCubic",
      })
      .add({
        targets: this.icons,
        opacity: [1, 0],
        translateX: [0, "20%"],
        complete: () => {
          this.icons.children[this.current].classList.add("hide");
        },
      })
      .add({
        targets: this.icons,
        opacity: [0, 1],
        translateX: ["20%", 0],
        begin: () => {
          this.icons.children[idx].classList.remove("hide");
        },
      });
  }

  _animateTools(idx) {
    console.log(this.tools[this.current]);
    anime
      .timeline({
        duration: 450,
        easing: "easeOutCubic",
      })
      .add({
        targets: this.tools[idx],
        translateY: ["20%", 0],
        opacity: [0, 1],
        begin: () => {
          this.tools[this.current].classList.add("hide");
          this.tools[idx].classList.remove("hide");
        },
      });
  }

  _animateIndex(idx) {
    anime
      .timeline({
        duration: 250,
        easing: "easeOutCubic",
      })
      .add({
        targets: this.index,
        duration: 500,
        width: ["5%", "35%"],
      })
      .add(
        {
          targets: this.index.firstElementChild,
          translateY: ["100%", 0],
          begin: () => {
            this.index.firstElementChild.textContent = `0${idx + 1}`;
          },
        },
        0
      );
  }
}

class SliderNavbar {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.barElem = document.querySelector(".js-nav-bar");
    this.checkpointsElem = this.elem.querySelector(".js-nav-checkpoints");
    this.trackElem = this.elem.querySelector(".js-nav-track");
    this.indexElem = this.elem.querySelector(".js-nav-index");
    this.currentElem = this.indexElem.querySelector(".js-current-index");
    this.total = Math.floor(Number(this.elem.dataset.total));
    this.isAnimating = false;
    this.current = 0;

    this.moveTo(this.current);

    this.checkpointsElem.addEventListener("click", (e) => {
      const n = Math.floor(Number(e.target.dataset.checkpoint)) ?? -1;
      console.log(`Chkpoint- ${n}`);
      if (isNaN(n)) return;
      if (n >= 0 && n <= this.total - 1) {
        this.moveTo(n);
      }
    });

    this.elem.querySelector(".js-btn-prev").addEventListener("click", () => {
      if (this.current <= 0) return;
      this.prev();
    });

    this.elem.querySelector(".js-btn-next").addEventListener("click", () => {
      if (this.current >= this.total - 1) return;
      this.next();
      console.log(`Current: ${this.current}/${this.total - 1}`);
    });
  }

  next() {
    this.moveTo(this.current + 1, 1);
  }

  prev() {
    this.moveTo(this.current - 1, -1);
  }

  moveTo(n) {
    if (this.isAnimating) return;
    if (n < 0 || n >= this.total) return;
    this.current = n;
    const offset = this.indexElem.getBoundingClientRect().width / 2;
    const trackW = this.trackElem.getBoundingClientRect().width;
    const leftPos = trackW * (n / (this.total - 1)) - offset;
    const leftPercent = (leftPos / trackW) * 100;
    this.isAnimating = true;

    anime({
      targets: this.indexElem,
      easing: "easeOutCubic",
      duration: 1000,
      left: `${leftPercent}%`,
    });

    anime
      .timeline({
        easing: "easeOutCubic",
      })
      .add(
        {
          targets: this.currentElem,
          translateY: [0, "-100%"],
          duration: 250,
          complete: () => {
            this.currentElem.textContent = `0${n + 1}`;
          },
        },
        0
      )
      .add({
        targets: this.currentElem,
        duration: 250,
        translateY: ["100%", 0],
        complete: () => {
          this.isAnimating = false;
        },
      });

    this.slider?.moveTo(this.current);
  }

  attachSlider(slider) {
    this.slider = slider;
  }
}

export { Slider, SliderNavbar };
