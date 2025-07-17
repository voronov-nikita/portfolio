// Отображение текущего времени
        function updateCurrentTime() {
            const now = new Date();
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: false
            };
            const dateOptions = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            };
            
            document.getElementById('current-time').textContent = now.toLocaleTimeString('ru-RU', timeOptions);
            document.getElementById('date-info').textContent = now.toLocaleDateString('ru-RU', dateOptions);
        }
        
        // Обновление таймера
        function updateTimer() {
            const startDate = new Date(document.getElementById('start-date').value);
            const endDate = new Date(document.getElementById('end-date').value);
            const now = new Date();
            
            if (!isNaN(startDate.getTime())) {
                updateCountdown(now, startDate, 'Начало: ');
            } else if (!isNaN(endDate.getTime())) {
                updateCountdown(now, endDate, 'Окончание: ');
            }
        }
        
        function updateCountdown(now, targetDate, prefix) {
            let diff = Math.floor((targetDate - now) / 1000);
            
            if (diff <= 0) {
                document.getElementById('timer').style.opacity = '0.5';
                return;
            } else {
                document.getElementById('timer').style.opacity = '1';
            }
            
            const days = Math.floor(diff / (3600 * 24));
            diff = diff % (3600 * 24);
            const hours = Math.floor(diff / 3600);
            diff = diff % 3600;
            const minutes = Math.floor(diff / 60);
            const seconds = diff % 60;
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            
            const dateOptions = {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
            };
            document.getElementById('date-info').textContent = prefix + targetDate.toLocaleDateString('ru-RU', dateOptions);
        }
        
        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            // Устанавливаем текущую дату и время + 1 час по умолчанию
            const now = new Date();
            const future = new Date(now.getTime() + 3600000);
            
            document.getElementById('start-date').value = now.toISOString().slice(0, 16);
            document.getElementById('end-date').value = future.toISOString().slice(0, 16);
            
            updateCurrentTime();
            updateTimer();
            
            // Обновляем каждую секунду
            setInterval(() => {
                updateCurrentTime();
                updateTimer();
            }, 1000);
            
            // Обновляем при изменении дат
            document.getElementById('start-date').addEventListener('change', updateTimer);
            document.getElementById('end-date').addEventListener('change', updateTimer);
        });