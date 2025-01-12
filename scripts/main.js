const ctx = document
    .getElementById('myChart')
    .getContext('2d');
const myChart = new Chart(ctx, {
    // Тип диаграммы (столбчатая)
    type: 'bar', 
    data: {
        labels: [
            "Python", "JS", "C++", "Kotlin", "Dart", "Other"
        ],
        datasets: [
            {
                data: [22, 12, 5, 2, 1, 1],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(250, 25, 74, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(188, 41, 149, 0.6)',
                    'rgba(74, 71, 68, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(250, 25, 74, 1)', 
                    'rgba(153, 102, 255, 1)',
                    'rgba(188, 41, 149, 1)',
                    'rgba(74, 71, 68, 1)',
                ],
                // Ширина обводки
                borderWidth: 2,
            },
        ],
    },
    plugins: {
        legend: {
            display: false
        }
    },
    options: {
        // Переворот диаграммы на 90 градусов
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: '#333'
                },
            },
            y: {
                grid: {
                    color: '#333',
                },
            },
        },
    },
});
