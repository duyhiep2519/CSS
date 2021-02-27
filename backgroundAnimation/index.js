const $ = document.querySelector(".content");
for (let i = 0; i <= 100; i++) {
  const element = document.createElement("div");
  element.classList.add("element");
  element.id = `element${i}`;

  $.appendChild(element);
}
for (let i = 0; i <= 100; i++) {
  const $ = document.getElementById(`element${i}`);
  $.style.transform = `translate(${Math.random() * 1300 - 700}px,${
    Math.random() * 500 - 100
  }px)`;
}

const $$ = document.getElementsByClassName("element");

const myAnimate = () => {
  for (let i = 0; i <= $$.length; i++) {
    $$[i].animate(
      [
        // keyframes

        { transform: `translateX(${Math.random() * 1400 - 700}px)` },

        { transform: `translateY(${Math.random() * 2600 - 1300}px)` },
      ],
      {
        // timing options
        duration: 3000,
        direction: "alternate-reverse",
        easing: "ease-in-out",

        iterations: Infinity,
      }
    );
  }
};
myAnimate();
