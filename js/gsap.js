gsap.registerPlugin(ScrollTrigger);

// ------------ INTRO ------------ // 

// const introDiv = document.querySelectorAll(".intro__div");
// const navBar = document.querySelector(".navBar");
// const hamburgerButtonElement = document.querySelector(".navBar__hamburgerButtonBar");
// const tl = new TimelineMax();


// tl
// .to(introDiv[0], 1, {x: "-100%", delay: 3})
// .to(introDiv[1], 1, {x: "100%"}, "-=1")
// .to(navBar, 1, {y: "80px"}, "-=1")
// .to(hamburgerButtonElement, 1, {opacity: "1"});


// ------------ SCROLL TRIGGER ------------ //

const scrlTrigger = document.querySelectorAll(".scrlTrigger");

scrlTrigger.forEach(scrlTrigger => {
    gsap.fromTo(scrlTrigger.children, {y: "+=50", opacity: 0}, {y: 0, opacity: 1, stagger: .25, duration: .5, ease: "ease-in-out", scrollTrigger: {
        trigger: scrlTrigger,
        start: "top 75%",
    }});
});

const navBarTrigger = document.querySelector(".navBar");

gsap.fromTo(navBarTrigger, {backgroundColor: "#eef4d460"}, {backgroundColor: "#eef4d4", duration: .5, ease: "ease-in-out", scrollTrigger: {
    trigger: ".homeSection",
    start: "bottom 25%",
    toggleActions: "play none none reverse",
}});
