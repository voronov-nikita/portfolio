// Отображение текущего времени
        function updateCurrentTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: false
            };
            document.getElementById('current-time').textContent = now.toLocaleDateString('ru-RU', options);
        }
        
        // Обновление таймера
        function updateTimer() {
            const startDate = new Date(document.getElementById('start-date').value);
            const endDate = new Date(document.getElementById('end-date').value);
            const now = new Date();
            
            if (!isNaN(startDate.getTime())){
                updateCountdown(now, startDate, 'до начала');
            } else if (!isNaN(endDate.getTime())) {
                updateCountdown(now, endDate, 'до окончания');
            } else {
                // Если даты не выбраны, показываем текущее время
                updateCurrentTime();
            }
        }
        
        function updateCountdown(now, targetDate, prefix) {
            let diff = Math.floor((targetDate - now) / 1000);
            
            if (diff <= 0) {
                document.getElementById('timer').innerHTML = `<div style="font-size: 2rem;">Событие завершено</div>`;
                return;
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
            
            document.getElementById('current-time').textContent = `${prefix}: ${targetDate.toLocaleString('ru-RU')}`;
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
        });