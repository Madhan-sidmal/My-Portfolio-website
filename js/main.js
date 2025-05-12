// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Hero intro animations
window.addEventListener('load', () => {
  gsap.from("#hero h1", { opacity: 0, y: -60, duration: 1 });
  gsap.from("#hero p", { opacity: 0, y: 60, duration: 1, delay: 0.3 });
  gsap.from("#hero a", { scale: 0, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" });
});

// Reveal each section on scroll
document.querySelectorAll("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
  });
});

// Certificates staggered pop-in
gsap.utils.toArray(".certificate-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out",
  });
});

// Hover glow effect on certificate images
document.querySelectorAll(".certificate-card img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)", duration: 0.3 });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 0.3 });
  });
});
