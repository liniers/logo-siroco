 
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

// Mobile Animation
let isotipoMb = document.getElementById("isotipo-mb");
let grupoMb = document.getElementById("grupo-mb");
let sirocoMb = document.getElementById("siroco-mb");



const tlMobile = gsap.timeline();

tlMobile.fromTo(isotipoMb, {
  rotation: 180,
  transformOrigin: "center center",
}, {
  delay: 0.5,
  translateX: -100,
  ease: "back.inOut(1.7)",
  rotation: 0,
  duration: 1,
});

tlMobile.fromTo(grupoMb, {
  opacity: 1,
  x: 0,
}, {
  opacity: 0,
  duration: .8,
  x: -12,
  ease: "back.inOut(4)",
}, "-=1.05");

tlMobile.fromTo(sirocoMb, {
  opacity: 1,
  x: 0,
}, {
  opacity: 0,
  duration: .8,
  x: -12,
  ease: "back.inOut(4)",
}, "-=1");
