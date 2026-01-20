 
let isotipo = document.getElementById("isotipo");
let grupo = document.getElementById("grupo");
let siroco = document.getElementById("siroco");


const tl = gsap.timeline();

tl.from(isotipo, {
  opacity: 0,
  duration: 1,
  scale: 0.5,
  rotation: 90,
  transformOrigin: "center center",
  ease: "circ.out",
});

tl.from(grupo, {
  opacity: 0,
  duration: 1,
  x: -12,
  ease: "circ.out",
}, "-=0.4");

tl.from(siroco, {
  opacity: 0,
  duration: 1,
  x: -12,
  ease: "circ.out",
}, "-=0.9");

// Reproducir animación mobile al hacer click en el SVG
const svg = document.getElementById("logo");
svg.style.cursor = 'pointer';

let playMb = false;

svg.addEventListener('click', () => {
  if (!playMb) {
    playMb = true;
    
    const tlMobile = gsap.timeline();

    tlMobile.fromTo(isotipo, {
      rotation: 0,
      transformOrigin: "center center",
    }, {
      delay: 0.5,
      translateX: -100,
      ease: "back.inOut(1.7)",
      rotation: -360,
      duration: 2,
    });

    tlMobile.fromTo(grupo, {
      opacity: 1,
      x: 0,
    }, {
      opacity: 0,
      duration: 1.8,
      x: -12,
      ease: "back.inOut(4)",
    }, "-=2.05");

    tlMobile.fromTo(siroco, {
      opacity: 1,
      x: 0,
    }, {
      opacity: 0,
      duration: 1.8,
      x: -12,
      ease: "back.inOut(4)",
      onComplete: () => {
        playMb = false;
      }
    }, "-=2");
  }
});