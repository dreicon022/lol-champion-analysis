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
    const champ2Winrate = document.getElementById('champ2-winrate');
    const combinedSynergy = document.getElementById('combined-synergy');
    const synergyDesc = document.getElementById('synergy-description');
    const counterPicksGrid = document.getElementById('counter-picks-grid');
    const synergiesGrid = document.getElementById('synergies-grid');
    const resetButton = document.createElement('button');
    
    // Создаем кнопку сброса
    resetButton.textContent = 'Reset Selection';
    resetButton.className = 'reset-button';
    resetButton.addEventListener('click', resetSelection);
    document.querySelector('.selected-champions').appendChild(resetButton);

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
            (m.champion1 === champ1.id && m.champion2 === champ2.id) ||
            (m.champion1 === champ2.id && m.champion2 === champ1.id)
        );

        if (matchup) {
            // Установка winrate для каждого чемпиона
            champ1Winrate.textContent = `${champ1.stats.winRate}%`;
            champ2Winrate.textContent = `${champ2.stats.winRate}%`;
            
            // Установка синергии и описания
            combinedSynergy.textContent = `${matchup.synergyScore}%`;
            synergyDesc.textContent = matchup.description || 
                `No detailed analysis available for ${champ1.name} vs ${champ2.name}`;
            
            // Отображение контрпиков
            counterPicksGrid.innerHTML = matchup.counters.map(champ => `
                <div class="pick-item">
                    <div class="pick-icon">
                        <img src="${champ.image}" alt="${champ.name}">
                    </div>
                    <div class="pick-name">${champ.name}</div>
                    <div class="pick-value win-value">${champ.winRate}%</div>
                </div>
            `).join('');
            
            // Отображение синергий
            synergiesGrid.innerHTML = matchup.synergies.map(champ => `
                <div class="pick-item">
                    <div class="pick-icon">
                        <img src="${champ.image}" alt="${champ.name}">
                    </div>
                    <div class="pick-name">${champ.name}</div>
                    <div class="pick-value win-value">${champ.winRate}%</div>
                </div>
            `).join('');
            
            // Показываем анализ и скрываем пустое состояние
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
            
            // Добавляем классы для цветов в зависимости от значений
            if (matchup.synergyScore >= 70) {
                combinedSynergy.classList.add('positive');
                combinedSynergy.classList.remove('negative');
            } else if (matchup.synergyScore < 50) {
                combinedSynergy.classList.add('negative');
                combinedSynergy.classList.remove('positive');
            } else {
                combinedSynergy.classList.remove('positive', 'negative');
            }
        } else {
            // Если матчап не найден, показываем общее сообщение
            combinedSynergy.textContent = 'N/A';
            synergyDesc.textContent = `No specific matchup data available for ${champ1.name} vs ${champ2.name}.`;
            
            // Очищаем контрпики и синергии
            counterPicksGrid.innerHTML = '';
            synergiesGrid.innerHTML = '';
            
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        }
    }

    // Сброс выбора
    function resetSelection() {
        state.selectedChampions = [];
        firstSelected.classList.remove('selected');
        secondSelected.classList.remove('selected');
        firstName.textContent = 'Select Champion';
        secondName.textContent = 'Select Champion';
        firstSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
        secondSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
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

    // Переключение табов
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Здесь можно добавить логику переключения контента табов
            const tabId = this.id;
            if (tabId === 'overview-tab') {
                // Показать обзор
            } else if (tabId === 'counter-tab') {
                // Показать контрпики
            } else if (tabId === 'synergy-tab') {
                // Показать синергии
            }
        });
    });

    // Инициализация
    renderChampions(champions);
});