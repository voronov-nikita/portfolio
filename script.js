document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Конфигурация конфетти
    const confettiSettings = {
        count: 80,
        colors: ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0'],
        shapes: ['circle', 'square', 'strip'],
        size: 6,
        speed: 5,
        wind: 0.05,
        gravity: 0.1,
        angleRange: Math.PI / 3 // 60 градусов
    };
    
    let confettiParticles = [];
    let lastAnimationTime = 0;
    const animationInterval = 300; // ms
    
    // Создание частиц конфетти из нижних углов
    function createConfetti() {
        const now = Date.now();
        if (now - lastAnimationTime < animationInterval) return;
        lastAnimationTime = now;
        
        for (let i = 0; i < confettiSettings.count / 2; i++) {
            // Левый нижний угол
            createParticle(0, canvas.height);
            // Правый нижний угол
            createParticle(canvas.width, canvas.height);
        }
    }
    
    function createParticle(x, y) {
        const angle = -Math.PI/2 + (Math.random() - 0.5) * confettiSettings.angleRange;
        const velocity = Math.random() * confettiSettings.speed + 2;
        
        confettiParticles.push({
            x: x,
            y: y,
            color: confettiSettings.colors[Math.floor(Math.random() * confettiSettings.colors.length)],
            shape: confettiSettings.shapes[Math.floor(Math.random() * confettiSettings.shapes.length)],
            size: Math.random() * confettiSettings.size + 3,
            velocityX: Math.cos(angle) * velocity * (x === 0 ? 1 : -1),
            velocityY: Math.sin(angle) * velocity,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            wind: (Math.random() - 0.5) * confettiSettings.wind
        });
    }
    
    // Анимация конфетти
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiParticles.forEach((particle, index) => {
            // Обновление позиции
            particle.x += particle.velocityX;
            particle.y += particle.velocityY;
            particle.rotation += particle.rotationSpeed;
            
            // Применение ветра и гравитации
            particle.velocityX += particle.wind;
            particle.velocityY += confettiSettings.gravity;
            
            // Удаление частиц за пределами экрана
            if (particle.y < -100 || 
                particle.x < -100 || 
                particle.x > canvas.width + 100) {
                confettiParticles.splice(index, 1);
            }
            
            // Рисование частицы
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation * Math.PI / 180);
            ctx.fillStyle = particle.color;
            
            if (particle.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (particle.shape === 'square') {
                ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            } else { // strip
                ctx.fillRect(-particle.size / 4, -particle.size, particle.size / 2, particle.size * 2);
            }
            
            ctx.restore();
        });
        
        requestAnimationFrame(animateConfetti);
    }
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Запуск анимации
    createConfetti();
    animateConfetti();
    
    // Добавление эффекта при клике
    document.addEventListener('click', createConfetti);
    
    // Периодический выброс конфетти
    setInterval(createConfetti, 2000);
});