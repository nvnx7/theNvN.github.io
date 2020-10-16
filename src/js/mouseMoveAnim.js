// import anime from "animejs/lib/anime.es.js";

export default class MouseMoveAnim {
  constructor(targetQuery, movingElemQuery, options = {}) {
    this.elem = document.querySelector(targetQuery);
    this.movingElem = document.querySelector(movingElemQuery);
    this.options = options;

    this.elemRect = this.elem.getBoundingClientRect();
    this.stopped = true;
    this.usingTouch = false;

    this.cx = 0;
    this.cy = 0;

    this.dxMax = 0;
    this.dyMax = 0;

    this.x = 0;
    this.y = 0;

    this.friction = options.friction ?? 1 / 30;

    this.mouseMoveHandler = (e) => {
      const dx = e.clientX - this.cx;
      const dy = e.clientY - this.cy;
      this.x = this._easeOutCubic(dx / this.dxMax) * this.dxMax;
      this.y = this._easeOutCubic(dy / this.dyMax) * this.dyMax;
    };

    this.elem.addEventListener("mouseenter", (e) => {
      if (this.usingTouch) return;
      if (options.mouseenter) options.mouseenter(e);

      this.elemRect = this.elem.getBoundingClientRect();

      this.dxMax = this.elemRect.width / 2;
      this.dyMax = this.elemRect.height / 2;

      this.cx = this.elemRect.left + this.dxMax;
      this.cy = this.elemRect.top + this.dyMax;
      this.init();
    });

    this.elem.addEventListener("mouseleave", (e) => {
      this.stop();
      if (this.options.mouseleave) this.options.mouseleave(e);
    });

    // To prevent effect on touch inputs
    this.elem.addEventListener("touchstart", () => {
      this.usingTouch = true;
    });
  }

  stop() {
    this.elem.removeEventListener("mousemove", this.mouseMoveHandler);
    this.stopped = true;
  }

  _easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  _loop() {
    if (this.stopped || this.usingTouch) {
      return;
    }
    this.movingElem.style.transform = `translate(${this.x * this.friction}px, ${
      this.y * this.friction
    }px)`;
    window.requestAnimationFrame(() => {
      this._loop();
    });
  }

  init() {
    this.stopped = false;
    this.elem.addEventListener("mousemove", this.mouseMoveHandler);
    this._loop();
  }
}
