

document.addEventListener('DOMContentLoaded', () => {
    const suits = ['Coppe', 'Denari', 'Spade', 'Bastoni'];
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const symbols = {
        'Coppe': '♥',
        'Denari': '♦',
        'Spade': '♠',
        'Bastoni': '♣'
    };
    const suitColors = {
        'Coppe': '#9E2A2B',
        'Denari': '#EAC435',
        'Spade': '#2E86AB',
        'Bastoni': '#256D1B'
    };

    colori = ['#9E2A2B', '#EAC435', '#2E86AB', '#256D1B']


    let deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ value, suit });
        });
    });
    deck = shuffle(deck);

    const cardContainer = document.getElementById('card-container');
    const drawButton = document.getElementById('draw-button');
    const suitsChartCanvas = document.getElementById('suits-chart').getContext('2d');
    const valuesChartCanvas = document.getElementById('values-chart').getContext('2d');
    const helpSound = document.getElementById('help-sound');

    let inGameCards = [];
    let suitsChart, valuesChart;

    drawButton.addEventListener('click', () => {
        if (deck.length === 0) {
            checkVictory();
            return;
        }

        const card = deck.shift();
        inGameCards.push(card);
        renderGame();
        updateCharts();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'c') {
            if (deck.length === 0) {
                checkVictory();
                return;
            }
    
            const card = deck.shift();
            inGameCards.push(card);
            renderGame();
            updateCharts();
        }
    });

    function renderGame() {
        cardContainer.innerHTML = '';
        inGameCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.textContent = `${card.value}
            ${symbols[card.suit]}`;
            cardElement.style.top = `${index * 90}px`;
            cardElement.style.left = '10px';
            cardElement.style.backgroundColor = suitColors[card.suit]
            cardElement.draggable = true;
            cardElement.addEventListener('dragstart', handleDragStart);
            cardElement.addEventListener('dragend', handleDragEnd);
            cardElement.dataset.index = index;
            cardContainer.appendChild(cardElement);
        });
    }

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
        setTimeout(() => {
            e.target.classList.add('hidden');
        }, 0);
    }

    function handleDragEnd(e) {
        e.target.classList.remove('hidden');
    }

    cardContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const draggedOverElement = document.elementFromPoint(e.clientX, e.clientY);
        if (draggedOverElement && draggedOverElement.classList.contains('card')) {
            const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            const targetIndex = parseInt(draggedOverElement.dataset.index, 10);

            if (draggedIndex >= 1 && targetIndex === draggedIndex -1) {
                if (canMergeCards(inGameCards[draggedIndex - 1], inGameCards[draggedIndex + 1])) {
                    inGameCards.splice(draggedIndex - 1, 1);
                    renderGame();
                    updateCharts();
                }
            }
        }
    });

    function canMergeCards(card1, card2) {
        return card1.suit === card2.suit || card1.value === card2.value;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function checkVictory() {
        if (inGameCards.length <= 2) {
            alert('Complimenti! Hai vinto!');
        } else {
            alert('Peccato, hai perso. Riprova!');
        }
    }

    function updateCharts() {
        const suitsCount = { 'Coppe': 0, 'Denari': 0, 'Spade': 0, 'Bastoni': 0 };
        const valuesCount = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0 };

        deck.forEach(card => {
            suitsCount[card.suit]++;
            valuesCount[card.value]++;
        });

        if (!suitsChart) {
            suitsChart = new Chart(suitsChartCanvas, {
                type: 'pie',
                data: {
                    labels: Object.keys(suitsCount),
                    datasets: [{
                        data: Object.values(suitsCount),
                        backgroundColor: colori
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Percentuale di Semi'
                    }
                }
            });
        } else {
            suitsChart.data.datasets[0].data = Object.values(suitsCount);
            suitsChart.update();
        }

        if (!valuesChart) {
            valuesChart = new Chart(valuesChartCanvas, {
                type: 'bar',
                data: {
                    labels: Object.keys(valuesCount),
                    datasets: [{
                        data: Object.values(valuesCount),
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                            '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#FF6384'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Percentuale di Valori'
                    }
                }
            });
        } else {
            valuesChart.data.datasets[0].data = Object.values(valuesCount);
            valuesChart.update();
        }
    }


    function showHelp() {
        let found = false;
        for (let i = 1; i < inGameCards.length - 1; i++) {
            if (canMergeCards(inGameCards[i - 1], inGameCards[i + 1])) {
                const cardElement = cardContainer.querySelector(`.card[data-index='${i}']`);
                if (cardElement) {
                    cardElement.classList.add('highlight');
                    helpSound.play();
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            alert('Nessuna mossa disponibile.');
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'h') {
            showHelp();
        }
    });



    renderGame();
    updateCharts();
});

