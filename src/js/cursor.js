import anime from "animejs/lib/anime.es.js";

class CursorSkillsSlider {
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

class CursorProjectsSlider {
  constructor(query, cursorQuery, callback) {
    this.elem = document.querySelector(query);
    this.cursorElem = document.querySelector(cursorQuery);
    this.posElem = this.elem.querySelector(".js-list-item-pos");
    this.listElem = this.elem.querySelector(".js-project-list");

    this.mousePos = {
      x: 0,
      y: 0,
    };

    this.callback = callback;

    this.grabbing = false;
    this.stopped = true;
    this.usingTouch = false;
    this.animating = false;

    this.grabY = 0;
    this.dy = 0;
    this.lastTop = this.posElem.offsetTop;
    this.currentTop = 0;
    this.clickDy = 2; // Init value must be greater than 0

    this.currentSelection = 0;
    this.dragSelection = 0;

    this.friction = 3 / 4;

    // Bounds for 'top' value of the list
    this.maxTop = this.posElem.offsetTop;
    this.minTop = this.posElem.offsetTop - this.listElem.offsetHeight;

    // Handlers to be dynamically added & removed
    this.mouseMoveHandler = (e) => {
      e.preventDefault();
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
      if (this.grabbing) {
        this.dy = e.clientY - this.grabY;
      }
    };

    this.touchMoveHandler = (e) => {
      if (!this.grabbing) return;
      e.preventDefault();
      this.mousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      this.dy = e.touches[0].clientY - this.grabY;
    };

    // Mouse events
    this.elem.addEventListener("mousedown", (e) => {
      console.log("mousedown");
      if (this.animating) return;
      this.grabbing = true;
      this.grabY = e.clientY;
      this.elem.classList.add("grabbing");
    });

    this.elem.addEventListener("mouseup", () => {
      console.log(`mouseup ${this.dy}`);
      this.lastTop = this.listElem.offsetTop;

      this.clickDy = Math.abs(this.dy);
      this._resetGrab();

      // Click select (handled by listener on list)
      if (this.clickDy <= 0) {
        return;
      }

      // Drag select
      if (this.callback) {
        this.currentSelection = this.dragSelection;
        this.callback(this.dragSelection);
      }
    });

    this.elem.addEventListener("mouseenter", () => {
      if (this.grabbing) return;
      this._resetGrab();
      if (this.stopped) this.init();
    });

    this.elem.addEventListener("mouseleave", () => {
      console.log(`mouseleave`);
      // if (this.grabbing) return;
      this.stop();
    });

    // Touch events
    this.elem.addEventListener("touchstart", (e) => {
      if (this.animating) return;
      this.usingTouch = true;
      this.grabbing = true;
      this.grabY = e.touches[0].clientY;
      this.init();
    });

    this.elem.addEventListener("touchend", () => {
      this.lastTop = this.listElem.offsetTop;
      // console.log(`touchend ${this.dy}`);
      this.clickDy = Math.abs(this.dy);
      this._resetGrab();

      // Click select (handled by listener on list)
      if (this.clickDy <= 0) {
        return;
      }

      // Drag select
      if (this.callback) {
        this.currentSelection = this.dragSelection;
        this.callback(this.dragSelection);
      }

      this.stop();
    });

    this.listElem.addEventListener("click", (e) => {
      if (this.animating) return;
      if (this.clickDy <= 0) {
        const key = Number(e.target.dataset.key);
        if (!isNaN(key)) this.setCurrentSelection(key);
      }
    });

    // Set first item as initially selected
    this.listElem.style.top = `${this.maxTop}px`;
    this.listElem.firstElementChild.classList.add("selected");
  }

  _loop() {
    if (this.stopped) return;

    if (!this.usingTouch) {
      this.cursorElem.style.left = `${this.mousePos.x}px`;
      this.cursorElem.style.top = `${this.mousePos.y}px`;
    }
    // Avoid this for click selection & scroll when grabbed
    if (this.grabbing && this.clickDy > 0) {
      this._translateY(this.dy);
      const prevDragSelection = this.dragSelection;
      this.dragSelection = this.getCurrentSelection();

      if (this.dragSelection != prevDragSelection) {
        this.listElem.children[prevDragSelection].classList.remove("selected");
        this.listElem.children[this.dragSelection].classList.add("selected");
      }
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
    this.lastTop = this.listElem.offsetTop; // In case mouseleave occurs before mouseup
    this._resetGrab();
  }

  getCurrentSelection() {
    let idx = 0;
    for (let item of this.listElem.children) {
      if (this.currentTop + item.offsetTop + item.offsetHeight >= this.maxTop) {
        break;
      }
      idx++;
    }

    return idx;
  }

  setCurrentSelection(idx) {
    if (idx == this.currentSelection) return;
    this.animating = true;
    // console.log(`Set from ${this.currentSelection} to ${idx}`);
    const itemElem = this.listElem.children[idx];
    const finalTop = this.posElem.offsetTop - itemElem.offsetTop + 1;

    this.callback(idx);

    anime({
      targets: this.listElem,
      duration: 250,
      easing: "easeOutCubic",
      top: finalTop,
      complete: () => {
        this.lastTop = this.listElem.offsetTop;
        this.listElem.children[this.currentSelection].classList.remove(
          "selected"
        );
        this.dragSelection = idx;
        this.currentSelection = this.dragSelection;
        this.listElem.children[this.currentSelection].classList.add("selected");
        this.animating = false;
        // console.log(`${this.grabbing}`);
      },
    });
  }

  _translateY(dy) {
    const top = this.listElem.offsetTop;
    if (top >= this.maxTop && dy > 0) return;
    if (top <= this.minTop && dy < 0) return;

    // console.log(dy, this.currentTop);
    this.listElem.style.top = `${this.lastTop + dy * this.friction}px`;
    this.currentTop = top;
  }

  _resetGrab() {
    this.grabbing = false;
    this.dy = 0;
    this.elem.classList.remove("grabbing");
  }
}

export { CursorSkillsSlider as CursorDrag, CursorProjectsSlider };
