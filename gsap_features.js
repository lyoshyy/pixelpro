  // H features
if (window.innerWidth > 480) {
  // desktop setup code here...
  $(".h-features_scroll-area").each(function (index) {
    let triggerElement = $(this);

    // Text animation
    let target_text_1 = $(".h-features_text.is-1");
    let target_text_2 = $(".h-features_text.is-2");
    let target_text_3 = $(".h-features_text.is-3");
    let target_text_4 = $(".h-features_text.is-4");

    // Pixel animation
    let target_pixel_1 = $(".h-features_pixel.is-1");
    let target_pixel_2 = $(".h-features_pixel.is-2");

    let element_pixel = $(".h-features_pixel-wrapper");
    let target_last_text = $(".h-features_last-content");

    let train = $(".h-features_train");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.from(element_pixel, {
      y: "-80%",
      ease: "none",
      ease: "power4.out",
      duration: 0.8,
    });
    // Text animation
    tl.to(target_text_1, { opacity: "1", y: "0rem", ease: "none" }, "<0.5");
    tl.to(target_text_1, { opacity: "0", y: "-6rem", ease: "none" });

    tl.to(target_text_2, { opacity: "1", y: "0rem", ease: "none" });
    tl.to(target_text_2, { opacity: "0", y: "-6rem", ease: "none" });

    tl.to(target_text_3, { opacity: "1", y: "0rem", ease: "none" });
    tl.to(target_text_3, { opacity: "0", y: "-6rem", ease: "none" });

    // Text animation
    tl.to(target_text_4, { opacity: "1", y: "0rem", ease: "none" });
    tl.to(target_text_4, { opacity: "0", y: "-6rem", ease: "none" });

    tl.to(element_pixel, { y: "-8.25rem", ease: "none" });

    tl.set(target_last_text, { y: "10rem", ease: "none" }, "<");
    tl.to(target_last_text, { opacity: "1", y: "0rem", ease: "none" }, "<");
    tl.to(train, { opacity: "0", ease: "none" }, "<");
  });
}
