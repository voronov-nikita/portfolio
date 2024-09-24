document.addEventListener('DOMContentLoaded', function() {
    const persons = document.querySelectorAll('.person');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const popupContent = document.getElementById('popup-content');
    const arrowsContainer = document.getElementById('arrows');

    // Данные о каждом человеке
    const personData = {
        person1: {
            name: "Имя 1",
            info: "Дополнительная информация о человеке 1."
        },
        person2: {
            name: "Имя 2",
            info: "Дополнительная информация о человеке 2."
        },
        person3: {
            name: "Имя 3",
            info: "Дополнительная информация о человеке 3."
        },
        person4: {
            name: "Имя 4",
            info: "Дополнительная информация о человеке 4."
        },
        person5: {
            name: "Имя 1",
            info: "Дополнительная информация о человеке 1."
        },
        person6: {
            name: "Имя 2",
            info: "Дополнительная информация о человеке 2."
        },
        person7: {
            name: "Имя 3",
            info: "Дополнительная информация о человеке 3."
        },
        person8: {
            name: "Имя 4",
            info: "Дополнительная информация о человеке 4."
        }
    };

    // Обработчик события для каждого человека
    persons.forEach(person => {
        person.addEventListener('click', function() {
            const personId = this.id;
            popupContent.innerHTML = `<h3>${personData[personId].name}</h3><p>${personData[personId].info}</p>`;
            popup.style.display = 'block';
        });
    });

    // Закрытие всплывающего окна
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Закрытие всплывающего окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Функция для добавления стрелки
    function drawArrow(from, to) {
        const fromPos = from.getBoundingClientRect();
        const toPos = to.getBoundingClientRect();
        const svgNS = "http://www.w3.org/2000/svg";

        // Создаем линию
        let line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', fromPos.left + fromPos.width / 2);
        line.setAttribute('y1', fromPos.bottom);
        line.setAttribute('x2', toPos.left + toPos.width / 2);
        line.setAttribute('y2', toPos.top);
        line.setAttribute('class', 'arrow');
        arrowsContainer.appendChild(line);
    }

    // Создание стрелок от одной карточки к двум
    drawArrow(document.getElementById('person1'), document.getElementById('person2'));
    drawArrow(document.getElementById('person2'), document.getElementById('person4'));
    drawArrow(document.getElementById('person3'), document.getElementById('person4'));

    drawArrow(document.getElementById('person6'), document.getElementById('person5'));
    drawArrow(document.getElementById('person6'), document.getElementById('person4'));
    drawArrow(document.getElementById('person7'), document.getElementById('person4'));


});
