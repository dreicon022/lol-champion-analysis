document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные из глобальных переменных
    const champions = window.championsData || [];
    const matchups = window.matchupsData || [];
    
    // Получаем DOM-элементы
    const grid = document.getElementById('champion-grid');
    const searchInput = document.getElementById('champion-search');
    const firstSelected = document.getElementById('first-selected');
    const secondSelected = document.getElementById('second-selected');
    const firstName = document.getElementById('first-champion-name');
    const secondName = document.getElementById('second-champion-name');
    const emptyState = document.querySelector('.empty-state');
    const analysisData = document.querySelector('.analysis-data');
    const champ1Winrate = document.getElementById('champ1-winrate');
    const champ2Winrate = document.getElementById('champ2-winrate');
    const combinedSynergy = document.getElementById('combined-synergy');
    const synergyDesc = document.getElementById('synergy-description');
    const counterPicksGrid = document.getElementById('counter-picks-grid');
    const synergiesGrid = document.getElementById('synergies-grid');
    const resetButton = document.querySelector('.reset-button');
    
    // State
    const state = {
        selectedChampions: []
    };

    // Render champions
    function renderChampions(champs) {
        grid.innerHTML = '';
        champs.forEach(champ => {
            const champElement = document.createElement('div');
            champElement.className = 'champion-icon';
            champElement.dataset.id = champ.id;
            champElement.innerHTML = `<img src="${champ.image}" alt="${champ.name}" title="${champ.name}">`;
            champElement.addEventListener('click', () => selectChampion(champ));
            grid.appendChild(champElement);
        });
    }

    // Select champion
    function selectChampion(champ) {
        if (state.selectedChampions.length < 2) {
            state.selectedChampions.push(champ);
            updateSelectionUI();
            
            if (state.selectedChampions.length === 2) {
                analyzeMatchup();
            }
        }
    }

    // Update selection UI
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

    // Analyze matchup
    function analyzeMatchup() {
        const [champ1, champ2] = state.selectedChampions;
        const matchup = matchups.find(m => 
            (m.champion1 === champ1.id && m.champion2 === champ2.id) ||
            (m.champion1 === champ2.id && m.champion2 === champ1.id)
        );

        if (matchup) {
            // Update winrates
            champ1Winrate.textContent = `${champ1.stats.winRate}%`;
            champ2Winrate.textContent = `${champ2.stats.winRate}%`;
            
            // Update synergy
            combinedSynergy.textContent = matchup.synergyScore;
            synergyDesc.textContent = matchup.description;
            
            // Render counter picks
            counterPicksGrid.innerHTML = matchup.counters.map(counter => `
                <div class="pick-item">
                    <div class="pick-icon">
                        <img src="${counter.image}" alt="${counter.name}">
                    </div>
                    <div class="pick-name">${counter.name}</div>
                    <div class="pick-value">${counter.winRate}%</div>
                </div>
            `).join('');
            
            // Render synergies
            synergiesGrid.innerHTML = matchup.synergies.map(synergy => `
                <div class="pick-item">
                    <div class="pick-icon">
                        <img src="${synergy.image}" alt="${synergy.name}">
                    </div>
                    <div class="pick-name">${synergy.name}</div>
                    <div class="pick-value">${synergy.winRate}%</div>
                </div>
            `).join('');
            
            // Show analysis
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        } else {
            // No matchup found
            synergyDesc.textContent = `No specific matchup data available for ${champ1.name} vs ${champ2.name}`;
            counterPicksGrid.innerHTML = '';
            synergiesGrid.innerHTML = '';
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        }
    }

    // Reset selection
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

    // Event delegation for champion selection
    grid.addEventListener('click', (e) => {
        const icon = e.target.closest('.champion-icon');
        if (icon) {
            const champId = icon.dataset.id;
            const champ = champions.find(c => c.id === champId);
            if (champ) selectChampion(champ);
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = term ? 
            champions.filter(champ => champ.name.toLowerCase().includes(term)) : 
            champions;
        renderChampions(filtered);
    });

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.id;
            if (tabId === 'overview-tab') {
                document.getElementById('counter-picks-section').style.display = 'block';
                document.getElementById('synergies-section').style.display = 'block';
            } else if (tabId === 'counter-tab') {
                document.getElementById('counter-picks-section').style.display = 'block';
                document.getElementById('synergies-section').style.display = 'none';
            } else if (tabId === 'synergy-tab') {
                document.getElementById('counter-picks-section').style.display = 'none';
                document.getElementById('synergies-section').style.display = 'block';
            }
        });
    });

    // Reset button
    resetButton.addEventListener('click', resetSelection);

    // Initialize
    renderChampions(champions);
});