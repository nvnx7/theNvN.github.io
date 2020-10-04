import anime from "animejs/lib/anime.es.js";
import { ScrambleText, ScrambleTexts } from "./scrambleText";

class Slider {
  constructor(query) {
    this.elem = document.querySelector(query);
    this.titlesAnim = new ScrambleTexts(".js-skill-title");
    this.texts = this.elem.querySelector(".js-skill-texts");
    this.icons = this.elem.querySelector(".js-skill-icons");
    this.index = this.elem.querySelector(".js-skill-index-container");
    this.tools = this.elem.querySelectorAll(".js-skill-tools-container");
    this.animating = false;
    this.current = 0;
  }

  moveTo(idx) {
    console.log(`Slider moveto ${idx}`);
    if (idx < 0) return;
    this.animating = true;
    this._animateTitle(idx);
    this._animateText(idx);
    this._animateTools(idx);
    this._animateIcon(idx);
    this._animateIndex(idx);
  }

  animatePresentation(idx, reverse = false) {
    this.animating = true;
    const direction = reverse ? "reverse" : "normal";
    anime({
      targets: this.elem.querySelector(".js-skill-desc"),
      width: [0, "50%"],
      duration: 800,
      easing: "easeOutCubic",
      direction: reverse ? "reverse" : "normal",
    });
    this._animateTitle(idx, { direction });
    this._animateText(idx, { delay: 500, direction });
    this._animateIndex(idx, { delay: 500, direction });
    this._animateIcon(idx, { direction });
    this._animateTools(idx, { direction });
    this._animateButton({ direction });
  }

  _animateTitle(idx, options = {}) {
    if (options.direction == "reverse") {
      new ScrambleText(".js-skill-title").scramble(true);
    } else {
      this.titlesAnim.scrambleTo(idx);
    }
  }

  _animateText(idx, options = {}) {
    anime({
      ...options,
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

  _animateIcon(idx, options = {}) {
    anime
      .timeline({
        ...options,
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

  _animateTools(idx, options = {}) {
    console.log(this.tools[this.current]);
    anime
      .timeline({
        ...options,
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

  _animateIndex(idx, options = {}) {
    anime
      .timeline({
        ...options,
        duration: 250,
        easing: "easeOutCubic",
      })
      .add({
        targets: this.index,
        duration: 500,
        width: [0, "35%"],
      })
      .add(
        {
          targets: this.index.firstElementChild,
          translateY: ["100%", 0],
          begin: () => {
            this.index.firstElementChild.textContent = `0${idx + 1}`;
          },
          complete: () => {
            this.animating = false;
          },
        },
        0
      );
  }

  _animateButton(options = {}) {
    anime({
      ...options,
      targets: this.elem.querySelector(".js-skills-back-btn"),
      duration: 250,
      opacity: [0, 1],
    });
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
    this.animating = false;
    this.current = 0;

    this.checkpointsElem.addEventListener("click", (e) => {
      if (this.isAnimating()) return;
      const n = Math.floor(Number(e.target.dataset.checkpoint)) ?? -1;
      if (isNaN(n)) return;
      if (n >= 0 && n <= this.total - 1) {
        this.moveTo(n);
        this.slider?.moveTo(n);
      }
    });

    this.elem.querySelector(".js-btn-prev").addEventListener("click", () => {
      if (this.current <= 0 || this.isAnimating()) return;
      this.prev();
    });

    this.elem.querySelector(".js-btn-next").addEventListener("click", () => {
      if (this.current >= this.total - 1 || this.isAnimating()) return;
      this.next();
    });
  }

  isAnimating() {
    return this.slider?.animating || this.animating;
  }

  animateIn(idx, animCallbacks = {}) {
    this._animatePresentation(idx, false, animCallbacks);
  }

  animateOut(animCallbacks = {}) {
    this._animatePresentation(this.current, true, animCallbacks);
  }

  _animatePresentation(idx, reverse = false, animCallbacks = {}) {
    anime
      .timeline({
        easing: "easeOutQuad",
        duration: 500,
        direction: reverse ? "reverse" : "normal",
      })
      .add(
        {
          targets: [
            this.barElem,
            this.elem.querySelector(".js-btn-prev"),
            this.elem.querySelector(".js-btn-next"),
          ],
          opacity: [0, 1],
          begin: () => {
            this.indexElem.style.transform = `translateY("100%")`;
            if (animCallbacks.begin) animCallbacks.begin();
          },
          complete: () => {
            this.setTo(idx);
          },
        },
        0
      )
      .add({
        targets: this.indexElem,
        translateY: ["100%", 0],
        complete: () => {
          if (animCallbacks.complete) animCallbacks.complete();
        },
      });

    this.slider?.animatePresentation(idx, reverse);
  }

  next() {
    if (this.isAnimating()) return;
    const n = this.current + 1;
    this.moveTo(n);
    this.slider?.moveTo(n);
  }

  prev() {
    if (this.isAnimating()) return;
    const n = this.current - 1;
    this.moveTo(n);
    this.slider?.moveTo(n);
  }

  setTo(n) {
    if (n < 0 || n >= this.total) return;
    this.current = n;
    const offset = this.indexElem.getBoundingClientRect().width / 2;
    const trackW = this.trackElem.getBoundingClientRect().width;
    const leftPos = trackW * (n / (this.total - 1)) - offset;
    const leftPercent = (leftPos / trackW) * 100;
    console.log(`Data - ${offset}, ${trackW}, ${leftPos}, ${leftPercent}`);
    this.currentElem.textContent = `0${n + 1}`;
    this.indexElem.style.left = `${leftPercent}%`;
  }

  moveTo(n) {
    if (this.isAnimating()) return;
    if (n < 0 || n >= this.total) return;
    this.current = n;
    const offset = this.indexElem.getBoundingClientRect().width / 2;
    const trackW = this.trackElem.getBoundingClientRect().width;
    const leftPos = trackW * (n / (this.total - 1)) - offset;
    const leftPercent = (leftPos / trackW) * 100;
    this.animating = true;

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
          this.animating = false;
        },
      });
  }

  attachSlider(slider) {
    this.slider = slider;
  }
}

export { Slider, SliderNavbar };
