// Global data objects
window.championsData = champions;
window.matchupsData = matchups;

document.addEventListener('DOMContentLoaded', function() {
    // Check if data is available
    if (!window.championsData || window.championsData.length === 0) {
        console.error("Champions data is missing or empty!");
        document.getElementById('champion-grid').innerHTML = 
            '<div class="error">Failed to load champions data</div>';
        return;
    }
    
    const champions = window.championsData;
    const matchups = window.matchupsData || [];
    
    // Get DOM elements
    const grid = document.getElementById('champion-grid');
    const searchInput = document.getElementById('champion-search');
    const firstSelected = document.getElementById('first-selected');
    const secondSelected = document.getElementById('second-selected');
    const firstSelectedContainer = document.getElementById('first-selected-container');
    const secondSelectedContainer = document.getElementById('second-selected-container');
    const firstName = document.getElementById('first-champion-name');
    const secondName = document.getElementById('second-champion-name');
    const firstNameDisplay = document.getElementById('first-champion-name-display');
    const secondNameDisplay = document.getElementById('second-champion-name-display');
    const emptyState = document.querySelector('.empty-state');
    const analysisData = document.querySelector('.analysis-data');
    const champ1Winrate = document.getElementById('champ1-winrate');
    const champ2Winrate = document.getElementById('champ2-winrate');
    const combinedSynergy = document.getElementById('combined-synergy');
    const synergyDesc = document.getElementById('synergy-description');
    const counterPicksGrid = document.getElementById('counter-picks-grid');
    const synergiesGrid = document.getElementById('synergies-grid');
    const resetButton = document.querySelector('.reset-button');
    const lanePhaseElement = document.getElementById('lane-phase');
    const tipsList = document.getElementById('tips-list');
    const champ1Stats = document.getElementById('champ1-stats');
    const champ2Stats = document.getElementById('champ2-stats');
    const champ1Abilities = document.getElementById('champ1-abilities');
    const champ2Abilities = document.getElementById('champ2-abilities');
    const champ1NameHeader = document.getElementById('champ1-name');
    const champ2NameHeader = document.getElementById('champ2-name');
    
    // State
    const state = {
        selectedChampions: []
    };

    // Render champions with tier badges
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
                
                champElement.innerHTML = `
                    <img src="${champ.image}" alt="${champ.name}" title="${champ.name}">
                    <div class="champion-tier tier-${champ.stats?.tier || 'N'}">${champ.stats?.tier || 'N'}</div>
                `;
                champElement.addEventListener('click', () => selectChampion(champ));
                grid.appendChild(champElement);
            });
        } catch (error) {
            console.error("Error rendering champions:", error);
            grid.innerHTML = '<div class="error">Error displaying champions</div>';
        }
    }

    // Select champion
    function selectChampion(champ) {
        if (!champ) return;
        
        try {
            const index = state.selectedChampions.findIndex(c => c.id === champ.id);
            
            if (index >= 0) {
                // Deselect if already selected
                state.selectedChampions.splice(index, 1);
            } else if (state.selectedChampions.length < 2) {
                // Add to selection
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

    // Update selection UI and stats
    function updateSelectionUI() {
        try {
            const [first, second] = state.selectedChampions;
            
            // Reset both slots
            firstSelectedContainer.classList.remove('selected');
            secondSelectedContainer.classList.remove('selected');
            firstSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            secondSelected.querySelector('img').src = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png';
            firstName.textContent = 'Select Champion';
            secondName.textContent = 'Select Champion';
            firstNameDisplay.textContent = '';
            secondNameDisplay.textContent = '';
            
            // Update first slot
            if (first) {
                firstSelected.querySelector('img').src = first.image;
                firstSelected.querySelector('img').alt = first.name;
                firstName.textContent = first.name;
                firstNameDisplay.textContent = first.name;
                firstSelectedContainer.classList.add('selected');
                champ1NameHeader.textContent = `${first.name} Stats`;
                
                // Update champion 1 stats
                updateChampionStats(first, champ1Stats, champ1Abilities);
            }
            
            // Update second slot
            if (second) {
                secondSelected.querySelector('img').src = second.image;
                secondSelected.querySelector('img').alt = second.name;
                secondName.textContent = second.name;
                secondNameDisplay.textContent = second.name;
                secondSelectedContainer.classList.add('selected');
                champ2NameHeader.textContent = `${second.name} Stats`;
                
                // Update champion 2 stats
                updateChampionStats(second, champ2Stats, champ2Abilities);
            }
        } catch (error) {
            console.error("Error updating selection UI:", error);
        }
    }
    
    // Update champion stats display
    function updateChampionStats(champion, statsContainer, abilitiesContainer) {
        if (!champion || !statsContainer || !abilitiesContainer) return;
        
        try {
            // Update stats
            statsContainer.innerHTML = `
                <div class="stat-item">
                    <div class="stat-label">Win Rate</div>
                    <div class="stat-value ${getWinRateClass(champion.stats?.winRate)}">${champion.stats?.winRate || 'N/A'}%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Pick Rate</div>
                    <div class="stat-value">${champion.stats?.pickRate || 'N/A'}%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Ban Rate</div>
                    <div class="stat-value">${champion.stats?.banRate || 'N/A'}%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">KDA</div>
                    <div class="stat-value">${champion.stats?.kda || 'N/A'}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Difficulty</div>
                    <div class="stat-value">${champion.stats?.difficulty || 'N/A'}/10</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Roles</div>
                    <div class="stat-value">${champion.roles?.join(', ') || 'N/A'}</div>
                </div>
            `;
            
            // Update abilities
            abilitiesContainer.innerHTML = `
                <h4>Abilities</h4>
                ${champion.abilities?.map(ability => `
                    <div class="ability-item">
                        <div class="ability-name">${ability.name}</div>
                        <div class="ability-desc">${ability.description}</div>
                    </div>
                `).join('') || '<div class="no-abilities">No abilities data</div>'}
            `;
        } catch (error) {
            console.error("Error updating champion stats:", error);
            statsContainer.innerHTML = '<div class="error">Error loading stats</div>';
            abilitiesContainer.innerHTML = '<div class="error">Error loading abilities</div>';
        }
    }
    
    // Helper function to determine win rate class
    function getWinRateClass(winRate) {
        if (!winRate) return '';
        return winRate > 52 ? 'positive' : winRate < 48 ? 'negative' : 'neutral';
    }

    // Analyze matchup with all available data
    function analyzeMatchup() {
        const [champ1, champ2] = state.selectedChampions;
        if (!champ1 || !champ2) return;
        
        try {
            // Find matchup data (in any order)
            const matchup = matchups.find(m => 
                (m.champion1 === champ1.id && m.champion2 === champ2.id) ||
                (m.champion1 === champ2.id && m.champion2 === champ1.id)
            );

            // Set champion winrates with color coding
            champ1Winrate.textContent = champ1.stats?.winRate ? `${champ1.stats.winRate}%` : 'N/A';
            champ1Winrate.className = `stat-value ${getWinRateClass(champ1.stats?.winRate)}`;
            
            champ2Winrate.textContent = champ2.stats?.winRate ? `${champ2.stats.winRate}%` : 'N/A';
            champ2Winrate.className = `stat-value ${getWinRateClass(champ2.stats?.winRate)}`;

            // Set matchup data or default
            if (matchup) {
                const isReversed = matchup.champion1 === champ2.id;
                const matchupData = isReversed ? {
                    ...matchup,
                    winRate: 100 - matchup.winRate,
                    lanePhase: {
                        early: matchup.lanePhase?.late || 'Even',
                        mid: matchup.lanePhase?.mid || 'Even',
                        late: matchup.lanePhase?.early || 'Even'
                    }
                } : matchup;

                combinedSynergy.textContent = matchupData.synergyScore || 'N/A';
                combinedSynergy.className = `synergy-value ${matchupData.synergyScore > 70 ? 'positive' : matchupData.synergyScore < 50 ? 'negative' : 'neutral'}`;
                
                synergyDesc.textContent = matchupData.description || `Standard matchup between ${champ1.name} and ${champ2.name}`;
                
                // Update lane phase info
                if (matchupData.lanePhase) {
                    lanePhaseElement.innerHTML = `
                        <h4>Lane Phase</h4>
                        <div class="lane-phase-container">
                            <div class="phase-item">
                                <div class="phase-name">Early Game</div>
                                <div class="phase-value">${matchupData.lanePhase.early}</div>
                            </div>
                            <div class="phase-item">
                                <div class="phase-name">Mid Game</div>
                                <div class="phase-value">${matchupData.lanePhase.mid}</div>
                            </div>
                            <div class="phase-item">
                                <div class="phase-name">Late Game</div>
                                <div class="phase-value">${matchupData.lanePhase.late}</div>
                            </div>
                        </div>
                    `;
                } else {
                    lanePhaseElement.innerHTML = '<div class="empty-message">No lane phase data available</div>';
                }
                
                // Update tips
                if (matchupData.tips?.length > 0) {
                    tipsList.innerHTML = matchupData.tips.map(tip => `<li>${tip}</li>`).join('');
                } else {
                    tipsList.innerHTML = '<li>No specific tips available for this matchup</li>';
                }
                
                // Render counter picks if available
                if (matchupData.counters?.length > 0) {
                    counterPicksGrid.innerHTML = matchupData.counters.map(counter => {
                        const champ = champions.find(c => c.id === counter.id);
                        return `
                            <div class="pick-item">
                                <div class="pick-icon">
                                    <img src="${counter.image}" alt="${counter.name}">
                                    <div class="pick-tier tier-${champ?.stats?.tier || 'N'}">
                                        ${champ?.stats?.tier || 'N'}
                                    </div>
                                </div>
                                <div class="pick-name">${counter.name}</div>
                                <div class="pick-value ${counter.winRate > 50 ? 'win-value' : 'loss-value'}">${counter.winRate}%</div>
                                <div class="pick-reason">${counter.reason}</div>
                            </div>
                        `;
                    }).join('');
                } else {
                    counterPicksGrid.innerHTML = '<div class="empty-message">No counter picks data available</div>';
                }
                
                // Render synergies if available
                if (matchupData.synergies?.length > 0) {
                    synergiesGrid.innerHTML = matchupData.synergies.map(synergy => {
                        const champ = champions.find(c => c.id === synergy.id);
                        return `
                            <div class="pick-item">
                                <div class="pick-icon">
                                    <img src="${synergy.image}" alt="${synergy.name}">
                                    <div class="pick-tier tier-${champ?.stats?.tier || 'N'}">
                                        ${champ?.stats?.tier || 'N'}
                                    </div>
                                </div>
                                <div class="pick-name">${synergy.name}</div>
                                <div class="pick-value ${synergy.winRate > 50 ? 'win-value' : 'loss-value'}">${synergy.winRate}%</div>
                                <div class="pick-reason">${synergy.reason}</div>
                            </div>
                        `;
                    }).join('');
                } else {
                    synergiesGrid.innerHTML = '<div class="empty-message">No synergies data available</div>';
                }
            } else {
                // No matchup data found
                combinedSynergy.textContent = 'N/A';
                combinedSynergy.className = 'synergy-value neutral';
                synergyDesc.textContent = `No specific matchup data available for ${champ1.name} vs ${champ2.name}. Showing general stats.`;
                
                // Show default lane phase
                lanePhaseElement.innerHTML = `
                    <h4>Lane Phase</h4>
                    <div class="lane-phase-container">
                        <div class="phase-item">
                            <div class="phase-name">Early Game</div>
                            <div class="phase-value">Skill matchup</div>
                        </div>
                        <div class="phase-item">
                            <div class="phase-name">Mid Game</div>
                            <div class="phase-value">Skill matchup</div>
                        </div>
                        <div class="phase-item">
                            <div class="phase-name">Late Game</div>
                            <div class="phase-value">Depends on team comp</div>
                        </div>
                    </div>
                `;
                
                // Show default tips
                tipsList.innerHTML = `
                    <li>Focus on your champion's strengths</li>
                    <li>Watch for jungle ganks</li>
                    <li>Build items that counter the opponent</li>
                `;
                
                // Show default counters/synergies
                counterPicksGrid.innerHTML = '<div class="empty-message">No counter picks data available for this matchup</div>';
                synergiesGrid.innerHTML = '<div class="empty-message">No synergies data available for this matchup</div>';
            }
            
            emptyState.style.display = 'none';
            analysisData.style.display = 'block';
        } catch (error) {
            console.error("Error analyzing matchup:", error);
            synergyDesc.textContent = `Error analyzing matchup between ${champ1.name} and ${champ2.name}`;
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

    firstSelectedContainer.addEventListener('click', () => {
        if (state.selectedChampions[0]) {
            selectChampion(state.selectedChampions[0]);
        }
    });

    secondSelectedContainer.addEventListener('click', () => {
        if (state.selectedChampions[1]) {
            selectChampion(state.selectedChampions[1]);
        }
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.id;
            const counterSection = document.getElementById('counter-picks-section');
            const synergySection = document.getElementById('synergies-section');
            const overviewSection = document.getElementById('overview-section');
            
            if (tabId === 'overview-tab') {
                overviewSection.style.display = 'block';
                counterSection.style.display = 'block';
                synergySection.style.display = 'block';
            } else if (tabId === 'counter-tab') {
                overviewSection.style.display = 'none';
                counterSection.style.display = 'block';
                synergySection.style.display = 'none';
            } else if (tabId === 'synergy-tab') {
                overviewSection.style.display = 'none';
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
