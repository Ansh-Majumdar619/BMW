// SMOOTH SCROLLING
 const scroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
 });

// MARQUEE ANIMATION
function marqueAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 4,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 4,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

marqueAnimation();

// STRING ANIMATION
var path = `M 10 100 Q 500 100 100% 100`;

// Determine the width of the SVG dynamically
var svgWidth = document.querySelector("svg").getBoundingClientRect().width;

var finalPath = `M 10 100 Q 500 100 ${svgWidth} 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} ${svgWidth} 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

// STRING ANIMATION
var path = `M 10 100 Q 500 100 100% 100`;

// Determine the width of the SVG dynamically
var svgWidth = document.querySelector("svg").getBoundingClientRect().width;

var finalPath = `M 10 100 Q 500 100 ${svgWidth} 100`;

var string2 = document.querySelector("#string2");

string2.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} ${svgWidth} 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string2.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

// NAVBAR ANIMATION

gsap.from(".nlink", {
  stagger:1,
  y:10,
  duration:2,
  ease: Power2,
  opacity:0
})

// TEXT ANIMATION
Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// MIDDLE IMAGE ANIMATE

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

// IMAGE EFFECTS

Shery.imageEffect("#imagentext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 4.58, range: [0, 100] },
    uFrequencyY: { value: 11.45, range: [0, 100] },
    uFrequencyZ: { value: 15.27, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 13.5 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  // debug:true,
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 1.83, range: [0, 30] },
    b: { value: -0.69, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.666666592197226 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#imagentext img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});


// BANNER Images

Shery.imageEffect("#bimg",{
  style: 4,
  config: {"uColor":{"value":false},"uSpeed":{"value":0.15,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":0,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.136738144164926},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.04,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":42}},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
  gooey: true,
})


// VIDEO

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
  gsap.to("#future video",{
    opacity:1,
    duration:1,
    ease: Power4,
  })
})


document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
  gsap.to("#future video",{
    opacity:0,
    duration:1,
    ease: Power4,
  })
})

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 2, 0.320, 1)",
  duration: 1,
});

