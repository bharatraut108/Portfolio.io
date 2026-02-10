// Fade-in on scroll
const elements = document.querySelectorAll('.fade');

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add('show');
  });
}
window.addEventListener('scroll', reveal);
reveal();

// CRAZY PARTICLE BACKGROUND
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > innerWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > innerHeight) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#00eaff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
