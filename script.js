import { champions, matchups } from './mockData.js';

document.addEventListener('DOMContentLoaded', function() {
    // DOM элементы
    const championGrid = document.getElementById('champion-grid');
    const firstSelected = document.getElementById('first-selected');
    const secondSelected = document.getElementById('second-selected');
    const firstName = document.getElementById('first-champion-name');
    const secondName = document.getElementById('second-champion-name');
    const searchInput = document.getElementById('champion-search');
    const emptyState = document.querySelector('.empty-state');
    const analysisData = document.querySelector('.analysis-data');
    const champ1Winrate = document.getElementById('champ1-winrate');
    const combinedSynergy = document.getElementById('combined-synergy');
    const synergyDesc = document.getElementById('synergy-description');

    // Состояние приложения
    const state = {
        selectedChampions: []
    };

    // Отображение чемпионов
    function renderChampions(champs) {
        championGrid.innerHTML = champs.map(champ => `
            <div class="champion-icon" data-id="${champ.id}">
                <img src="${champ.image}" alt="${champ.name}" 
                     title="${champ.name} (${champ.stats?.winRate || 'N/A'}% WR)">
            </div>
        `).join('');
    }

    // Выбор чемпиона
    function selectChampion(champ) {
        if (state.selectedChampions.length < 2) {
            state.selectedChampions.push(champ);
            updateSelectionUI();
            
            if (state.selectedChampions.length === 2) {
                analyzeMatchup();
            }
        }
    }

    // Обновление UI после выбора
    function updateSelectionUI() {
        const [first, second] = state.selectedChampions;
        
        if (first) {
            firstSelected.querySelector('img').src = first.image;
            firstSelected.querySelector('img').alt = first.name;
            firstName.textContent = first.name;
            firstSelected.classList.add('selected');
        }
        
        if (second) {
            secondSelected.querySelector('img').src = second.image;
            secondSelected.querySelector('img').alt = second.name;
            secondName.textContent = second.name;
            secondSelected.classList.add('selected');
        }
    }

    // Анализ матчапа
    function analyzeMatchup() {
        const [champ1, champ2] = state.selectedChampions;
        const matchup = matchups.find(m => 
            [m.champion1, m.champion2].includes(champ1.id) && 
            [m.champion1, m.champion2].includes(champ2.id)
        );

        if (matchup) {
            champ1Winrate.textContent = `${matchup.winRate}%`;
            combinedSynergy.textContent = matchup.synergyScore;
            synergyDesc.textContent = matchup.description || 
                `No detailed analysis available for ${champ1.name} vs ${champ2.name}`;
            
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        }
    }

    // Сброс выбора
    function resetSelection() {
        state.selectedChampions = [];
        firstSelected.classList.remove('selected');
        secondSelected.classList.remove('selected');
        emptyState.style.display = 'flex';
        analysisData.style.display = 'none';
    }

    // Делегирование событий для выбора чемпионов
    championGrid.addEventListener('click', (e) => {
        const icon = e.target.closest('.champion-icon');
        if (icon) {
            const champId = icon.dataset.id;
            const champ = champions.find(c => c.id === champId);
            if (champ) selectChampion(champ);
        }
    });

    // Двойной клик для сброса
    document.addEventListener('dblclick', resetSelection);

    // Поиск чемпионов
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = term ? 
            champions.filter(champ => champ.name.toLowerCase().includes(term)) : 
            champions;
        renderChampions(filtered);
    });

    // Подсказки с WinRate
    championGrid.addEventListener('mouseover', (e) => {
        const icon = e.target.closest('.champion-icon');
        if (icon) {
            const tooltip = document.getElementById('tooltip');
            const champId = icon.dataset.id;
            const champ = champions.find(c => c.id === champId);
            
            if (champ) {
                tooltip.textContent = `${champ.name}: ${champ.stats?.winRate || 'N/A'}% WR`;
                tooltip.style.display = 'block';
                tooltip.style.left = `${e.pageX + 15}px`;
                tooltip.style.top = `${e.pageY + 15}px`;
            }
        }
    });

    championGrid.addEventListener('mouseout', () => {
        document.getElementById('tooltip').style.display = 'none';
    });

    // Инициализация
    renderChampions(champions);
});