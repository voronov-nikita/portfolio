const particleCount = 120;
const container = document.querySelector('.particles');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

const resetPositionX = -50; // Начальная позиция X, когда частица достигает определенной точки

for (let i = 0; i < particleCount; i++) {
  createParticle();
}

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  container.appendChild(particle);
  randomizeParticle(particle);
}

function randomizeParticle(particle) {
  const x = Math.floor(Math.random() * containerWidth);
  const y = Math.floor(Math.random() * containerHeight);
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
}

// Добавляем анимацию движения частиц
const particles = document.querySelectorAll('.particle');
particles.forEach((particle) => {
  particle.addEventListener('animationiteration', () => {
    
  });
});
