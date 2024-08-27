// NAVBAR ANIMATION
gsap.from(".nlink", {
  stagger: 0.3,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

// text Animation
gsap.from("#container h1", {
  stagger: 2,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from("#container h2", {
  stagger: 2,
  y: 30,
  duration: 2,
  ease: Power2,
  opacity: 0,
});

gsap.from("#category", {
  stagger: 3,
  y: 30,
  duration: 1,
  ease: Power4,
  opacity: 0,
});


Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 2, 0.320, 1)",
  duration: 1,
});