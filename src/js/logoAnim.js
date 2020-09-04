import anime from "animejs/lib/anime.es.js";

const dx = 100;
const dy = 100;
const easeTranslate = "easeOutExpo";
const durTranslate = 4000;
const easeStroke = "easeOutQuad";
const durStroke = 1800;
const easeFill = "easeOutExpo";
const durFill = 2000;
const delayOffsetLine = 1800;

const logoFragmentFirstAnim = anime
  .timeline({
    targets: document.querySelector(".js-logo-fragment-first"),
    autoplay: false,
  })
  .add({
    easing: easeTranslate,
    duration: durTranslate,
    translateX: [-dx, 0],
    translateY: [dy, 0],
  })
  .add(
    {
      easing: easeStroke,
      duration: durStroke,
      strokeDashoffset: [-700, 0],
    },
    0
  )
  .add(
    {
      fill: ["#ffffff00", "#ea5455"],
      easing: easeFill,
      duration: durFill,
    },
    durStroke - 100
  );

const logoFragmentSecondAnim = anime
  .timeline({
    targets: document.querySelector(".js-logo-fragment-second"),
    autoplay: false,
  })
  .add({
    easing: easeTranslate,
    duration: durTranslate,
    translateX: [dx, 0],
    translateY: [-dy, 0],
  })
  .add(
    {
      easing: easeStroke,
      duration: durStroke,
      strokeDashoffset: [-700, 0],
    },
    0
  )
  .add(
    {
      fill: ["#ffffff00", "#e5e5e5"],
      easing: easeFill,
      duration: durFill,
    },
    durStroke - 100
  );

const strokesGTranslateAnim = anime
  .timeline({
    duration: durTranslate,
    easing: easeTranslate,
    autoplay: false,
  })
  .add({
    targets: document.querySelector(".js-strokes-g-first"),
    translateX: [-dx, 0],
    translateY: [dy, 0],
  })
  .add(
    {
      targets: document.querySelector(".js-strokes-g-second"),
      translateX: [dx, 0],
      translateY: [-dy, 0],
    },
    0
  );

const strokesGFirstDrawAnim = anime
  .timeline({
    easing: easeTranslate,
    duration: 2000,
    loop: false,
    autoplay: false,
  })
  .add({
    targets: document.querySelector(".js-strokes-g-first .js-stroke-1"),
    keyframes: [
      { x1: 249.63, y1: 149.05, x2: 249.63, y2: 149.05, duration: 0 },
      { x1: 249.63, y1: 149.05, x2: 46.5, y2: 380.75, duration: 1000 },
      { x1: 46.5, y1: 380.75, x2: 46.5, y2: 380.75, duration: 1000 },
    ],
    translateX: [50, -50],
    translateY: [-50, 50],
  })
  .add(
    {
      targets: document.querySelector(".js-strokes-g-first .js-stroke-2"),
      keyframes: [
        { x1: 46.5, y1: 380.75, x2: 46.5, y2: 380.75, duration: 0 },
        { x1: 46.5, y1: 380.75, x2: 124.63, y2: 380.75, duration: 1000 },
        { x1: 124.63, y1: 380.75, x2: 124.63, y2: 380.75, duration: 1000 },
      ],
      translateX: [-50, 50],
    },
    `-=${delayOffsetLine}`
  )
  .add(
    {
      targets: document.querySelector(".js-strokes-g-first .js-stroke-3"),
      keyframes: [
        { x1: 124.63, y1: 380.75, x2: 124.63, y2: 380.75, duration: 0 },
        { x1: 124.63, y1: 380.75, x2: 263.13, y2: 220.7, duration: 1000 },
        { x1: 263.13, y1: 220.7, x2: 263.13, y2: 220.7, duration: 1000 },
      ],
      translateX: [-50, 50],
      translateY: [50, -50],
    },
    `-=${delayOffsetLine}`
  )
  .add(
    {
      targets: document.querySelector(".js-strokes-g-first .js-stroke-4"),
      keyframes: [
        { x1: 263.13, y1: 220.7, x2: 263.13, y2: 220.7, duration: 0 },
        { x1: 263.13, y1: 220.7, x2: 249.63, y2: 149.05, duration: 1000 },
        { x1: 249.63, y1: 149.05, x2: 249.63, y2: 149.05, duration: 1000 },
      ],
      translateX: [5, -5],
      translateY: [30, -30],
    },
    `-=${delayOffsetLine}`
  );

const strokesGSecondDrawAnim = anime
  .timeline({
    easing: easeTranslate,
    duration: 2000,
    loop: false,
    autoplay: false,
  })
  .add({
    targets: document.querySelector(".js-strokes-g-second .js-stroke-1"),
    keyframes: [
      { x1: 262.08, y1: 354.83, x2: 262.08, y2: 354.83, duration: 0 },
      { x1: 262.08, y1: 354.83, x2: 465.2, y2: 123.13, duration: 1000 },
      { x1: 465.2, y1: 123.13, x2: 465.2, y2: 123.13, duration: 1000 },
    ],
    translateX: [-50, 50],
    translateY: [50, -50],
  })
  .add(
    {
      targets: document.querySelector(".js-strokes-g-second .js-stroke-2"),
      keyframes: [
        { x1: 465.2, y1: 123.13, x2: 465.2, y2: 123.13, duration: 0 },
        { x1: 465.2, y1: 123.13, x2: 387.08, y2: 123.13, duration: 1000 },
        { x1: 387.08, y1: 123.13, x2: 387.08, y2: 123.13, duration: 1000 },
      ],
      translateX: [50, -50],
    },
    `-=${delayOffsetLine}`
  )
  .add(
    {
      targets: document.querySelector(".js-strokes-g-second .js-stroke-3"),
      keyframes: [
        { x1: 387.08, y1: 123.13, x2: 387.08, y2: 123.13, duration: 0 },
        { x1: 387.08, y1: 123.13, x2: 248.57, y2: 283.17, duration: 1000 },
        { x1: 248.57, y1: 283.17, x2: 248.57, y2: 283.17, duration: 1000 },
      ],
      translateX: [50, -50],
      translateY: [-50, 50],
    },
    `-=${delayOffsetLine}`
  )
  .add(
    {
      targets: document.querySelector(".js-strokes-g-second .js-stroke-4"),
      keyframes: [
        { x1: 248.57, y1: 283.17, x2: 248.57, y2: 283.17, duration: 0 },
        { x1: 248.57, y1: 283.17, x2: 262.08, y2: 354.83, duration: 1000 },
        { x1: 262.08, y1: 354.83, x2: 262.08, y2: 354.83, duration: 1000 },
      ],
      translateX: [-5, 5],
      translateY: [-30, 30],
    },
    `-=${delayOffsetLine}`
  );

export default function playLogoAnim() {
  strokesGTranslateAnim.play();
  strokesGFirstDrawAnim.play();
  strokesGSecondDrawAnim.play();
  logoFragmentFirstAnim.play();
  logoFragmentSecondAnim.play();
}
