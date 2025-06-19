fetch('data/cards.json')
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById(
            'cardsContainer'
        );
        data.cards.forEach((card) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';

            cardEl.innerHTML = `
            <div class="card-image">
            <img src="${card.image}" alt="${card.title}" />
            </div>
            <div class="card-content">
            <div>
                <div class="card-title">${card.title}</div>
                <div class="card-description">${card.description}</div>
            </div>
            <a class="card-button" href="${card.link}" target="_blank">ПОДРОБНЕЕ</a>
            </div>
        `;

            container.appendChild(cardEl);
        });
    });
