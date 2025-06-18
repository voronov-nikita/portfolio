document
    .getElementById('projectsBtn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        // Анимация нажатия
        this.classList.add('active');

        // Перенаправление после анимации
        setTimeout(() => {
            window.location.href = './projects.html'; // Замените на нужный URL
        }, 200);
    });
