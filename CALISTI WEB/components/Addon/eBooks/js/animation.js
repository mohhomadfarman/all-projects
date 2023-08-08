gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".text-wrrap", { opacity: 0 }, {
    scrollTrigger: {
        trigger: ".text-wrrap",
        toggleActions: "play",
    },
    opacity: 1,
    duration: 2
});

// --------------------------------------------

gsap.fromTo(".card-1", { opacity: 0, y: "15%" }, {
    scrollTrigger: {
        trigger: ".card-1",
        toggleActions: "play play",
    },
    y: 0,
    opacity: 1,
    duration: 1
});
gsap.fromTo(".card-2", { opacity: 0, y: "15%" }, {
    scrollTrigger: {
        trigger: ".card-1",
        toggleActions: "play play play",

    },
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 1.5
});
gsap.fromTo(".card-3", { opacity: 0, y: "15%" }, {
    scrollTrigger: {
        trigger: ".card-3",
        toggleActions: "play play play",

    },
    y: 0,
    opacity: 1,
    delay: 0.2,
    duration: 1.5

});
gsap.fromTo(".card-4", { opacity: 0, y: "15%" }, {
    scrollTrigger: {
        trigger: ".card-4",
        toggleActions: "play play play",

    },
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 1.5

});