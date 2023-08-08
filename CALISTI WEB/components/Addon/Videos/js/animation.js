gsap.registerPlugin(ScrollTrigger)


// add the tweens to the timeline - Note we're using tl.to not gsap.to
gsap.fromTo(".image__box-align2", { opacity: 0, x: "-10%", }, {
    scrollTrigger: {
        trigger: ".image__box-align2",
        toggleActions: "play reverse reset",
        scrub: 1,
        end: "top 10%"


    },
    x: 0,
    opacity: 1,
    duration: 1
});
gsap.fromTo(".animate_text_box", { opacity: 0, x: "10%", }, {
    scrollTrigger: {
        trigger: ".animate_text_box",
        toggleActions: "play reverse reset",
        scrub: 1,
        end: "top 10%"

    },
    x: 0,
    opacity: 1,
    duration: 1
});



gsap.fromTo(".heading__text_videos", { opacity: 0 }, {
    scrollTrigger: {
        trigger: ".heading__text_videos",
        toggleActions: "play reverse play",
        scrub: 2,
        // start: "top 50%",
        end: "top 10%"

    },
    opacity: 1,
    duration: 3
});

gsap.fromTo(".brand_partner", { opacity: 0 }, {
    scrollTrigger: {
        trigger: ".brand_partner",
        toggleActions: "play reverse play",
        scrub: 2,
        // start: "top 50%",
        end: "top center"

    },
    opacity: 0.4,
    duration: 6
});

gsap.fromTo(".bottom_card", { opacity: 0, y: "15%" }, {
    scrollTrigger: {
        trigger: ".bottom_card",
        toggleActions: "play play",
        // scrub: 2,
        ends: "top bottom",


    },
    y: 0,
    opacity: 1,
    duration: 1
});

