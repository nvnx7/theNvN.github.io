import anime from "animejs/lib/anime.es.js";

class CursorDrag {
  constructor(query, cursorQuery, callback) {
    this.elem = document.querySelector(query);
    this.cursorElem = document.querySelector(cursorQuery);
    this.progressElem = this.cursorElem.querySelector(".js-cursor-progress");
    this.maxProgress = 64;
    this.mousePos = {
      x: 0,
      y: 0,
    };
    this.callback = callback;

    this.grabbing = false;
    this.stopped = true;
    this.usingTouch = false;

    this.grabX = 0;
    this.dxMax = 72;
    this.dx = 0;

    // Handlers to be dynamically added & removed
    this.mouseMoveHandler = (e) => {
      e.preventDefault();
      this.mousePos = { x: e.clientX, y: e.clientY };
      if (!this.grabbing) return;
      this.dx = e.clientX - this.grabX;
    };

    this.touchMoveHandler = (e) => {
      if (!this.grabbing) return;
      this.mousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      this.dx = e.touches[0].clientX - this.grabX;
    };

    // Mouse events
    this.elem.addEventListener("mousedown", (e) => {
      console.log("mouse down");
      this.grabbing = true;
      this.elem.classList.add("grabbing");
      this.grabX = e.clientX;
      this.progressElem.classList.remove("hide");
    });

    this.elem.addEventListener("mouseup", () => {
      console.log("mouseup");
      this._resetGrab();
    });

    this.elem.addEventListener("mouseover", () => {
      console.log(`mouseover: ${this.stopped}`);
      if (this.grabbing) return;
      if (this.stopped) this.init();
    });

    this.elem.addEventListener("mouseout", () => {
      if (this.grabbing) return;
      this.stop();
    });

    // Touch events
    this.elem.addEventListener("touchstart", (e) => {
      this.usingTouch = true;
      this.grabbing = true;
      this.grabX = e.touches[0].clientX;
      this.init();
    });

    this.elem.addEventListener("touchend", () => {
      this.stop();
      this._resetGrab();
    });
  }

  _loop() {
    if (this.stopped) return;

    if (!this.usingTouch) {
      this.cursorElem.style.left = `${this.mousePos.x}px`;
      this.cursorElem.style.top = `${this.mousePos.y}px`;
    }

    if (this.grabbing) {
      this._translateX(this.dx);
      this.progressElem.style.width = `${
        (Math.abs(this.dx) / this.dxMax) * this.maxProgress
      }px`;
    }

    window.requestAnimationFrame(() => {
      this._loop();
    });
  }

  init() {
    this.stopped = false;
    this.elem.addEventListener("mousemove", this.mouseMoveHandler);
    this.elem.addEventListener("touchmove", this.touchMoveHandler);
    if (!this.usingTouch) this.cursorElem.classList.remove("hide");
    this._loop();
  }

  stop() {
    this.stopped = true;
    this.usingTouch = false;
    this.cursorElem.classList.add("hide");
    this.elem.removeEventListener("mousemove", this.mouseMoveHandler);
    this.elem.removeEventListener("touchmove", this.touchMoveHandler);
  }

  _translateX(dx) {
    if (Math.abs(dx) >= this.dxMax) {
      this._resetGrab();
      if (this.callback) this.callback(Math.sign(dx));
    }
    const x = this._easeOutCubic(dx / this.dxMax) * this.dxMax;
    this.elem.style.transform = `translateX(${x}px)`;
  }

  _resetGrab() {
    this.progressElem.classList.add("hide");
    this.grabbing = false;
    this.dx = 0;
    this.elem.classList.remove("grabbing");

    anime({
      targets: this.elem,
      duration: 200,
      easing: "easeOutCubic",
      translateX: 0,
    });
  }

  _easeOutCubic(x) {
    return (1 - Math.pow(1 - Math.abs(x), 3)) * Math.sign(x);
  }
}

export { CursorDrag };
