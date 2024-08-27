// SMOOTH SCROLLING
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


// NAVBAR ANIMATION

gsap.from(".nlink", {
  stagger: 0.3,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
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

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 2, 0.320, 1)",
  duration: 1,
});

// elvis car

Shery.imageEffect("#picture img", {
  style: 2,
 
  config: {"resolutionXY":{"value":54.05},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":1},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":10,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":1.91,"range":[0,3.141592653589793]},"waveFactor":{"value":-2.8,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":1.89,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":2.43,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.491189035243859},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 
  // debug: true,
   
  // gooey: true,
});

gsap.from("#image1", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

Shery.makeMagnet("#image1" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#image2" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.makeMagnet("#image3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

gsap.from("#legacy h2, p", {
  stagger: 1,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});619

gsap.from("#about1 h1, h2,", {
  stagger: 1,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from("#about2 h1, h2,", {
  stagger: 1,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from("#about3 h1, h2,", {
  stagger: 1,
  y: 30,
  duration: 1,
  ease: Power2,
  opacity: 0,
});