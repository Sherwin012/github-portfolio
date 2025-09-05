// Particle Background (same as before)
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#0ff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
init();
animate();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Typewriter Effect
const texts = ["GAME DEVELOPER", "LEVEL DESIGNER"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  currentText = texts[i];
  let display = currentText.substring(0, j);
  document.getElementById("typewriter").textContent = display;

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

//Smooth scrolling for project links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
