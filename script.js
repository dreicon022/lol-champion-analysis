// Global data objects
window.championsData = champions; // Using the champions array from mockData.js
window.matchupsData = matchups; // Using the matchups array from mockData.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if data is available
    if (!window.championsData) {
        console.error("Champions data is missing!");
        return;
    }
    
    const champions = window.championsData;
    const matchups = window.matchupsData || [];
    
    // Get DOM elements
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

    // Ensure all elements exist
    if (!grid) {
        console.error("Champion grid element not found!");
        return;
    }

    // Render champions
    function renderChampions(champs) {
        try {
            grid.innerHTML = '';
            
            if (!champs || champs.length === 0) {
                grid.innerHTML = '<div class="no-champions">No champions found</div>';
                return;
            }
            
            champs.forEach(champ => {
                if (!champ || !champ.id) return;
                
                const champElement = document.createElement('div');
                champElement.className = 'champion-icon';
                champElement.dataset.id = champ.id;
                
                const isSelected = state.selectedChampions.some(c => c.id === champ.id);
                if (isSelected) {
                    champElement.classList.add('selected');
                }
                
                champElement.innerHTML = `<img src="${champ.image}" alt="${champ.name}" title="${champ.name}">`;
                champElement.addEventListener('click', () => selectChampion(champ));
                grid.appendChild(champElement);
            });
        } catch (error) {
            console.error("Error rendering champions:", error);
        }
    }

    // Select champion
    function selectChampion(champ) {
        if (!champ) return;
        
        try {
            const index = state.selectedChampions.findIndex(c => c.id === champ.id);
            
            if (index >= 0) {
                state.selectedChampions.splice(index, 1);
            } else if (state.selectedChampions.length < 2) {
                state.selectedChampions.push(champ);
            }
            
            updateSelectionUI();
            renderChampions(champions);
            
            if (state.selectedChampions.length === 2) {
                analyzeMatchup();
            } else {
                emptyState.style.display = 'flex';
                analysisData.style.display = 'none';
            }
        } catch (error) {
            console.error("Error selecting champion:", error);
        }
    }

    // Update selection UI
    function updateSelectionUI() {
        try {
            const [first, second] = state.selectedChampions;
            
            // Reset both slots
            firstSelected.classList.remove('selected');
            secondSelected.classList.remove('selected');
            firstSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            secondSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            firstName.textContent = 'Select Champion';
            secondName.textContent = 'Select Champion';
            
            // Update first slot
            if (first) {
                firstSelected.querySelector('img').src = first.image;
                firstSelected.querySelector('img').alt = first.name;
                firstName.textContent = first.name;
                firstSelected.classList.add('selected');
            }
            
            // Update second slot
            if (second) {
                secondSelected.querySelector('img').src = second.image;
                secondSelected.querySelector('img').alt = second.name;
                secondName.textContent = second.name;
                secondSelected.classList.add('selected');
            }
        } catch (error) {
            console.error("Error updating selection UI:", error);
        }
    }

    // Analyze matchup
    function analyzeMatchup() {
        const [champ1, champ2] = state.selectedChampions;
        if (!champ1 || !champ2) return;
        
        try {
            // Find matchup data (in any order)
            const matchup = matchups.find(m => 
                (m.champion1 === champ1.id && m.champion2 === champ2.id) ||
                (m.champion1 === champ2.id && m.champion2 === champ1.id)
            );

            // Set champion winrates
            champ1Winrate.textContent = champ1.stats?.winRate ? `${champ1.stats.winRate}%` : 'N/A';
            champ2Winrate.textContent = champ2.stats?.winRate ? `${champ2.stats.winRate}%` : 'N/A';

            // Set matchup data or default
            if (matchup) {
                combinedSynergy.textContent = matchup.synergyScore || 'N/A';
                synergyDesc.textContent = matchup.description || `Standard matchup between ${champ1.name} and ${champ2.name}`;
                
                // Render counter picks if available
                if (matchup.counters?.length > 0) {
                    counterPicksGrid.innerHTML = matchup.counters.map(counter => `
                        <div class="pick-item">
                            <div class="pick-icon">
                                <img src="${counter.image}" alt="${counter.name}">
                            </div>
                            <div class="pick-name">${counter.name}</div>
                            <div class="pick-value ${counter.winRate > 50 ? 'win-value' : 'loss-value'}">${counter.winRate}%</div>
                        </div>
                    `).join('');
                } else {
                    counterPicksGrid.innerHTML = '<div class="empty-message">No counter picks data available</div>';
                }
                
                // Render synergies if available
                if (matchup.synergies?.length > 0) {
                    synergiesGrid.innerHTML = matchup.synergies.map(synergy => `
                        <div class="pick-item">
                            <div class="pick-icon">
                                <img src="${synergy.image}" alt="${synergy.name}">
                            </div>
                            <div class="pick-name">${synergy.name}</div>
                            <div class="pick-value ${synergy.winRate > 50 ? 'win-value' : 'loss-value'}">${synergy.winRate}%</div>
                        </div>
                    `).join('');
                } else {
                    synergiesGrid.innerHTML = '<div class="empty-message">No synergies data available</div>';
                }
            } else {
                // No matchup data found
                combinedSynergy.textContent = 'N/A';
                synergyDesc.textContent = `No specific matchup data available for ${champ1.name} vs ${champ2.name}. Showing general stats.`;
                
                // Show default counters/synergies from champion data if available
                counterPicksGrid.innerHTML = '<div class="empty-message">No counter picks data available for this matchup</div>';
                synergiesGrid.innerHTML = '<div class="empty-message">No synergies data available for this matchup</div>';
            }
            
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        } catch (error) {
            console.error("Error analyzing matchup:", error);
        }
    }

    // Reset selection
    function resetSelection() {
        state.selectedChampions = [];
        updateSelectionUI();
        renderChampions(champions);
        emptyState.style.display = 'flex';
        analysisData.style.display = 'none';
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = term ? 
                champions.filter(champ => champ.name.toLowerCase().includes(term)) : 
                champions;
            renderChampions(filtered);
        });
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.id;
            const counterSection = document.getElementById('counter-picks-section');
            const synergySection = document.getElementById('synergies-section');
            
            if (tabId === 'overview-tab') {
                counterSection.style.display = 'block';
                synergySection.style.display = 'block';
            } else if (tabId === 'counter-tab') {
                counterSection.style.display = 'block';
                synergySection.style.display = 'none';
            } else if (tabId === 'synergy-tab') {
                counterSection.style.display = 'none';
                synergySection.style.display = 'block';
            }
        });
    });

    if (resetButton) {
        resetButton.addEventListener('click', resetSelection);
    }

    // Initialize
    renderChampions(champions);
});
