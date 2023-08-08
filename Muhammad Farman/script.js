gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".left-side-animate",
  { x: "-10%", opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".left-side-animate",
    },

    x: 0,
    duration: 2,
    opacity: 1,
  }
);

// gsap.fromTo(
//   ".bg-color-dark",
//   { background: "#f5f1e7", opacity: 1 },
//   {
//     scrollTrigger: {
//       trigger: ".box-1",
//     },

//     background: "#2C2C2C",
//     duration: 1,
//     opacity: 1,
//   }
// );

// gsap.to(".text-change", {
//   scrollTrigger: {
//     trigger: ".change-onscroll",
//     start: "top center",
//     scurb: "2",
//     toggleAction: "play ",
//   },

//   color: "#fff",
//   duration: 0.3,
//   opacity: 1,
// });

const span = document.querySelector(".hover-btn2");
const overlay = document.querySelector(".overlay");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
  console.log(e);

  gsap.to(overlay, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.2,
    ease: "sine.out",
  });
});

span.addEventListener("click", () => {
  overlay.classList.toggle("is-open");
});
