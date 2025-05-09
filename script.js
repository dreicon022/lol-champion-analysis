// Global data objects
window.championsData = champions; // Using the champions array from mockData.js
window.matchupsData = []; // Initialize empty array if no matchup data exists

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

    // Debug logging for UI elements
    console.log("UI Elements:", {
        grid: !!grid,
        searchInput: !!searchInput,
        firstSelected: !!firstSelected,
        secondSelected: !!secondSelected,
        resetButton: !!resetButton
    });

    // Render champions
    function renderChampions(champs) {
        try {
            console.log("Rendering champions:", champs.length);
            grid.innerHTML = '';
            
            if (!champs || champs.length === 0) {
                grid.innerHTML = '<div class="no-champions">No champions found</div>';
                return;
            }
            
            champs.forEach(champ => {
                if (!champ || !champ.id) {
                    console.warn("Invalid champion data:", champ);
                    return;
                }
                
                const champElement = document.createElement('div');
                champElement.className = 'champion-icon';
                champElement.dataset.id = champ.id;
                
                const isSelected = state.selectedChampions.some(c => c.id === champ.id);
                if (isSelected) {
                    champElement.classList.add('selected');
                }
                
                champElement.innerHTML = `<img src="${champ.image || 'placeholder.png'}" alt="${champ.name}" title="${champ.name}">`;
                
                // Direct click handler on the element itself
                champElement.addEventListener('click', () => {
                    console.log("Champion clicked:", champ.name);
                    selectChampion(champ);
                });
                
                grid.appendChild(champElement);
            });
        } catch (error) {
            console.error("Error rendering champions:", error);
        }
    }

    // Select champion
    function selectChampion(champ) {
        if (!champ) {
            console.warn("Attempted to select undefined champion");
            return;
        }
        
        try {
            console.log("Selecting champion:", champ.name);
            const index = state.selectedChampions.findIndex(c => c.id === champ.id);
            
            if (index >= 0) {
                console.log("Deselecting champion:", champ.name);
                state.selectedChampions.splice(index, 1);
            } else if (state.selectedChampions.length < 2) {
                console.log("Adding champion to selection:", champ.name);
                state.selectedChampions.push(champ);
            } else {
                console.log("Already have 2 champions selected");
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
            console.log("Updating selection UI with:", state.selectedChampions.map(c => c.name));
            const [first, second] = state.selectedChampions;
            
            // Reset both slots
            if (firstSelected) {
                firstSelected.classList.remove('selected');
                const firstImg = firstSelected.querySelector('img');
                if (firstImg) firstImg.src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            }
            
            if (secondSelected) {
                secondSelected.classList.remove('selected');
                const secondImg = secondSelected.querySelector('img');
                if (secondImg) secondImg.src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            }
            
            if (firstName) firstName.textContent = 'Select Champion';
            if (secondName) secondName.textContent = 'Select Champion';
            
            // Update first slot
            if (first && firstSelected) {
                const firstImg = firstSelected.querySelector('img');
                if (firstImg) {
                    firstImg.src = first.image;
                    firstImg.alt = first.name;
                }
                if (firstName) firstName.textContent = first.name;
                firstSelected.classList.add('selected');
            }
            
            // Update second slot
            if (second && secondSelected) {
                const secondImg = secondSelected.querySelector('img');
                if (secondImg) {
                    secondImg.src = second.image;
                    secondImg.alt = second.name;
                }
                if (secondName) secondName.textContent = second.name;
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
            console.log("Analyzing matchup between:", champ1.name, "and", champ2.name);
            const matchup = matchups.find(m => 
                (m.champion1 === champ1.id && m.champion2 === champ2.id) ||
                (m.champion1 === champ2.id && m.champion2 === champ1.id)
            );

            // Default values for matchup data
            const defaultData = {
                synergyScore: 'N/A',
                description: `No matchup data available for ${champ1.name} vs ${champ2.name}`,
                counters: [],
                synergies: []
            };

            const matchupData = matchup || defaultData;

            if (champ1Winrate) champ1Winrate.textContent = `${champ1.stats?.winRate || 'N/A'}%`;
            if (champ2Winrate) champ2Winrate.textContent = `${champ2.stats?.winRate || 'N/A'}%`;
            if (combinedSynergy) combinedSynergy.textContent = matchupData.synergyScore;
            if (synergyDesc) synergyDesc.textContent = matchupData.description;
            
            // Render counter picks
            if (counterPicksGrid) {
                counterPicksGrid.innerHTML = matchupData.counters?.length > 0 
                    ? matchupData.counters.map(counter => `
                        <div class="pick-item">
                            <img src="${counter.image}" alt="${counter.name}">
                            <div class="pick-name">${counter.name}</div>
                            <div class="pick-value">${counter.winRate}%</div>
                        </div>
                    `).join('') 
                    : '<div>No counter picks data available</div>';
            }
            
            // Render synergies
            if (synergiesGrid) {
                synergiesGrid.innerHTML = matchupData.synergies?.length > 0
                    ? matchupData.synergies.map(synergy => `
                        <div class="pick-item">
                            <img src="${synergy.image}" alt="${synergy.name}">
                            <div class="pick-name">${synergy.name}</div>
                            <div class="pick-value">${synergy.winRate}%</div>
                        </div>
                    `).join('') 
                    : '<div>No synergies data available</div>';
            }
            
            if (emptyState) emptyState.style.display = 'none';
            if (analysisData) analysisData.style.display = 'block';
        } catch (error) {
            console.error("Error analyzing matchup:", error);
        }
    }

    // Reset selection
    function resetSelection() {
        console.log("Resetting selection");
        state.selectedChampions = [];
        updateSelectionUI();
        renderChampions(champions);
        if (emptyState) emptyState.style.display = 'flex';
        if (analysisData) analysisData.style.display = 'none';
    }

    // Direct event listeners for champion icons
    function setupChampionClickHandlers() {
        const icons = grid.querySelectorAll('.champion-icon');
        icons.forEach(icon => {
            icon.addEventListener('click', function() {
                const champId = this.dataset.id;
                console.log("Icon clicked with ID:", champId);
                const champ = champions.find(c => c.id === champId);
                if (champ) selectChampion(champ);
            });
        });
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            console.log("Searching for:", term);
            const filtered = term ? 
                champions.filter(champ => champ.name.toLowerCase().includes(term)) : 
                champions;
            renderChampions(filtered);
        });
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            console.log("Tab clicked:", this.id);
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.id;
            const counterSection = document.getElementById('counter-picks-section');
            const synergySection = document.getElementById('synergies-section');
            
            if (tabId === 'overview-tab') {
                if (counterSection) counterSection.style.display = 'block';
                if (synergySection) synergySection.style.display = 'block';
            } else if (tabId === 'counter-tab') {
                if (counterSection) counterSection.style.display = 'block';
                if (synergySection) synergySection.style.display = 'none';
            } else if (tabId === 'synergy-tab') {
                if (counterSection) counterSection.style.display = 'none';
                if (synergySection) synergySection.style.display = 'block';
            }
        });
    });

    if (resetButton) {
        resetButton.addEventListener('click', function() {
            console.log("Reset button clicked");
            resetSelection();
        });
    }

    // Initialize
    console.log("Initializing application with", champions.length, "champions");
    renderChampions(champions);
});