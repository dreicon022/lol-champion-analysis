 const champions = [
            { id: 'Aatrox', name: 'Aatrox', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png' },
            { id: 'Ahri', name: 'Ahri', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ahri.png' },
            { id: 'Akali', name: 'Akali', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Akali.png' },
            { id: 'Akshan', name: 'Akshan', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Akshan.png' },
            { id: 'Alistar', name: 'Alistar', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Alistar.png' },
            { id: 'Amumu', name: 'Amumu', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Amumu.png' },
            { id: 'Anivia', name: 'Anivia', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Anivia.png' },
            { id: 'Annie', name: 'Annie', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Annie.png' },
            { id: 'Aphelios', name: 'Aphelios', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aphelios.png' },
            { id: 'Ashe', name: 'Ashe', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ashe.png' },
            { id: 'AurelionSol', name: 'Aurelion Sol', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/AurelionSol.png' },
            { id: 'Azir', name: 'Azir', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Azir.png' },
            { id: 'Bard', name: 'Bard', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Bard.png' },
            { id: 'Belveth', name: "Bel'Veth", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Belveth.png' },
            { id: 'Blitzcrank', name: 'Blitzcrank', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png' },
            { id: 'Brand', name: 'Brand', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Brand.png' },
            { id: 'Braum', name: 'Braum', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Braum.png' },
            { id: 'Briar', name: 'Briar', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Briar.png' },
            { id: 'Caitlyn', name: 'Caitlyn', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Caitlyn.png' },
            { id: 'Camille', name: 'Camille', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Camille.png' },
            { id: 'Cassiopeia', name: 'Cassiopeia', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Cassiopeia.png' },
            { id: 'Chogath', name: "Cho'Gath", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Chogath.png' },
            { id: 'Corki', name: 'Corki', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Corki.png' },
            { id: 'Darius', name: 'Darius', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Darius.png' },
            { id: 'Diana', name: 'Diana', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Diana.png' },
            { id: 'Draven', name: 'Draven', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Draven.png' },
            { id: 'DrMundo', name: 'Dr. Mundo', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/DrMundo.png' },
            { id: 'Ekko', name: 'Ekko', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ekko.png' },
            { id: 'Elise', name: 'Elise', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Elise.png' },
            { id: 'Evelynn', name: 'Evelynn', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Evelynn.png' },
            { id: 'Ezreal', name: 'Ezreal', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ezreal.png' },
            { id: 'Fiddlesticks', name: 'Fiddlesticks', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fiddlesticks.png' },
            { id: 'Fiora', name: 'Fiora', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fiora.png' },
            { id: 'Fizz', name: 'Fizz', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fizz.png' },
            { id: 'Galio', name: 'Galio', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Galio.png' },
            { id: 'Gangplank', name: 'Gangplank', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Gangplank.png' },
            { id: 'Garen', name: 'Garen', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Garen.png' },
            { id: 'Gnar', name: 'Gnar', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Gnar.png' },
            { id: 'Gragas', name: 'Gragas', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Gragas.png' },
            { id: 'Graves', name: 'Graves', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Graves.png' },
            { id: 'Gwen', name: 'Gwen', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Gwen.png' },
            { id: 'Hecarim', name: 'Hecarim', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Hecarim.png' },
            { id: 'Heimerdinger', name: 'Heimerdinger', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Heimerdinger.png' },
            { id: 'Hwei', name: 'Hwei', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Hwei.png' },
            { id: 'Illaoi', name: 'Illaoi', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Illaoi.png' },
            { id: 'Irelia', name: 'Irelia', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Irelia.png' },
            { id: 'Ivern', name: 'Ivern', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ivern.png' },
            { id: 'Janna', name: 'Janna', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png' },
            { id: 'JarvanIV', name: 'Jarvan IV', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png' },
            { id: 'Jax', name: 'Jax', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jax.png' },
            { id: 'Jayce', name: 'Jayce', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jayce.png' },
            { id: 'Jhin', name: 'Jhin', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jhin.png' },
            { id: 'Jinx', name: 'Jinx', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jinx.png' },
            { id: 'KSante', name: "K'Sante", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/KSante.png' },
            { id: 'Kaisa', name: "Kai'Sa", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kaisa.png' },
            { id: 'Kalista', name: 'Kalista', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kalista.png' },
            { id: 'Karma', name: 'Karma', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Karma.png' },
            { id: 'Karthus', name: 'Karthus', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Karthus.png' },
            { id: 'Kassadin', name: 'Kassadin', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kassadin.png' },
            { id: 'Katarina', name: 'Katarina', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Katarina.png' },
            { id: 'Kayle', name: 'Kayle', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kayle.png' },
            { id: 'Kayn', name: 'Kayn', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kayn.png' },
            { id: 'Kennen', name: 'Kennen', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kennen.png' },
            { id: 'Khazix', name: "Kha'Zix", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Khazix.png' },
            { id: 'Kindred', name: 'Kindred', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kindred.png' },
            { id: 'Kled', name: 'Kled', image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kled.png' },
            { id: 'KogMaw', name: "Kog'Maw", image: 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/KogMaw.png' },
            { id: 'LeBlanc', name: 'LeBlanc', image: 'https://ddragon.leagueoflegends.com/cdn/14.7
]
// Добавьте эту логику в script.js
document.addEventListener('DOMContentLoaded', function() {
    const championGrid = document.getElementById('champion-grid');
    const firstSelected = document.getElementById('first-selected');
    const secondSelected = document.getElementById('second-selected');
    const firstName = document.getElementById('first-champion-name');
    const secondName = document.getElementById('second-champion-name');
    const searchInput = document.getElementById('champion-search');

    // Отображение всех чемпионов
    function renderChampions(champs) {
        championGrid.innerHTML = '';
        champs.forEach(champ => {
            const champElement = document.createElement('div');
            champElement.className = 'champion-icon';
            champElement.innerHTML = `<img src="${champ.image}" alt="${champ.name}" title="${champ.name}">`;
            champElement.addEventListener('click', () => selectChampion(champ));
            championGrid.appendChild(champElement);
        });
    }

    // Выбор чемпиона
    function selectChampion(champ) {
        if (!firstSelected.classList.contains('selected')) {
            firstSelected.querySelector('img').src = champ.image;
            firstSelected.querySelector('img').alt = champ.name;
            firstName.textContent = champ.name;
            firstSelected.classList.add('selected');
        } else {
            secondSelected.querySelector('img').src = champ.image;
            secondSelected.querySelector('img').alt = champ.name;
            secondName.textContent = champ.name;
            secondSelected.classList.add('selected');
            // Здесь можно добавить анализ матчапа
        }
    }

    // Поиск чемпионов
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = champions.filter(champ => 
            champ.name.toLowerCase().includes(searchTerm)
        );
        renderChampions(filtered);
    });

    // Инициализация
    renderChampions(champions);
});