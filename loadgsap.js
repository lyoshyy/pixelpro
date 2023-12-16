let loadTl = gsap.timeline();

gsap.set(".main-wrapper", { visibility: "visible" });
gsap.set(".loader_component", { display: "flex" });

loadTl.from(".loader_frist", { x: "100%", ease: "power4.out", duration: 2 });
loadTl.from(
  ".loader_last",
  { x: "-100%", ease: "power4.out", duration: 2 },
  "<"
);

loadTl.from(".page-frame", { borderWidth: "0rem", duration: 1.5 });
loadTl.from(
  ".frame-corner",
  {
    borderRadius: "0rem 0rem 0rem 0rem",
    duration: 1.5,
  },
  "<"
);
loadTl.from(".frame-circle.is-load", { y: "30vh", duration: 1.5 }, "<");

//End Loader
loadTl.to(
  ".loader_frist",
  { x: "-100%", ease: "power4.in", duration: 1 },
  "<0.5"
);
loadTl.to(".loader_last", { x: "100%", ease: "power4.in", duration: 1 }, "<");
loadTl.to(".loader_component", { opacity: "0" });

//End Load
loadTl.from(
  ".navbar_component",
  {
    y: "-100%",
    ease: "power4.out",
    duration: 1,
  },
  "<"
);

loadTl.from(
  ".h-hero_pixel.is-load",
  {
    y: "2rem",
    opacity: "0",
    ease: "power4.out",
    duration: 1,
  },
  "<0.2"
);

loadTl.from(
  ".text-size-30-25.is-load",
  {
    y: "2rem",
    opacity: "0",
    ease: "power4.out",
    duration: 1,
  },
  "<0.2"
);
loadTl.from(
  ".margin-top.is-load",
  {
    y: "2rem",
    opacity: "0",
    ease: "power4.out",
    duration: 1,
  },
  "<0.2"
);

loadTl.set(".loader_component", { display: "none" });

let loadTl2 = gsap.timeline();
loadTl2.to(".loader_wrapper.is-1", { x: "-6%", ease: "none", duration: 3 });
loadTl2.to(".loader_wrapper.is-2", { x: "6%", ease: "none", duration: 3 }, "<");

let loadT3 = gsap.timeline({
  onComplete: () => {
    // allow scroll when animation completes
    gsap.set("body", { overflow: "auto" });
    lenis.start();
  },
});
loadT3.to(".loader_component", { ease: "none", duration: 4 }, "<");
