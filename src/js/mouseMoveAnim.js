// import anime from "animejs/lib/anime.es.js";

export default class MouseMoveAnim {
  constructor(targetQuery, movingElemQuery, options = {}) {
    this.elem = document.querySelector(targetQuery);
    this.movingElem = document.querySelector(movingElemQuery);
    this.elemRect = this.elem.getBoundingClientRect();
    this.stopped = false;

    this.dx = 0;
    this.dy = 0;
    this.friction = 1 / 30;

    this.elem.addEventListener("mousemove", (e) => {
      this.dx = e.clientX - (this.elemRect.width / 2 + this.elemRect.left);
      this.dy = e.clientY - this.elemRect.top - this.elemRect.height / 2;
    });

    this.elem.addEventListener("mouseover", () => {
      if (this.stopped) return;
      if (options.mouseover) options.mouseover();

      this.elemRect = this.elem.getBoundingClientRect();

      const left = this.elemRect.left; // + 0.6 * this.elemRect.width;
      const top = this.elemRect.top - 2 * this.elemRect.height - 20;

      this.movingElem.style.left = `${left}px`;
      this.movingElem.style.top = `${top}px`;

      this.movingElem.classList.remove("hide");
    });

    this.elem.addEventListener("mouseout", () => {
      if (options.mouseout) options.mouseout();

      this.movingElem.classList.add("hide");
    });
  }

  stop() {
    this.movingElem.classList.add("hide");
    this.stopped = true;
  }

  _easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  _loop() {
    const x =
      this._easeOutCubic(this.dx / this.elemRect.width) * this.elemRect.width;
    const y =
      this._easeOutCubic(this.dy / this.elemRect.height) * this.elemRect.height;

    this.movingElem.style.transform = `translate(${x * this.friction}px, ${
      y * this.friction
    }px)`;
    window.requestAnimationFrame(() => {
      this._loop();
    });
  }

  init() {
    this._loop();
  }
}
