// NBA Finals MVP Data (1969-2023) with opponent quality ratings
const mvpsData = [
    // 1969-1980
    { year: 1969, name: "Jerry West", team: "Los Angeles Lakers", ppg: 37.9, rpg: 4.7, apg: 7.4, fg: 49.0, series: "LAL vs BOS", games: 7, notes: "First Finals MVP, despite losing series", opponent: "Boston Celtics", opponentQuality: 9.5, opponentWins: 48, opponentSeed: 4 },
    { year: 1970, name: "Willis Reed", team: "New York Knicks", ppg: 23.0, rpg: 10.5, apg: 2.8, fg: 48.0, series: "NYK vs LAL", games: 7, notes: "Famous Game 7 return from injury", opponent: "Los Angeles Lakers", opponentQuality: 9.2, opponentWins: 46, opponentSeed: 3 },
    { year: 1971, name: "Kareem Abdul-Jabbar", team: "Milwaukee Bucks", ppg: 27.0, rpg: 18.5, apg: 2.8, fg: 60.5, series: "MIL vs BAL", games: 4, notes: "First championship with Bucks", opponent: "Baltimore Bullets", opponentQuality: 7.8, opponentWins: 42, opponentSeed: 2 },
    { year: 1972, name: "Wilt Chamberlain", team: "Los Angeles Lakers", ppg: 19.4, rpg: 23.2, apg: 2.6, fg: 60.0, series: "LAL vs NYK", games: 5, notes: "Dominant rebounding performance", opponent: "New York Knicks", opponentQuality: 8.9, opponentWins: 48, opponentSeed: 1 },
    { year: 1973, name: "Willis Reed", team: "New York Knicks", ppg: 16.4, rpg: 9.2, apg: 2.6, fg: 47.0, series: "NYK vs LAL", games: 5, notes: "Second Finals MVP", opponent: "Los Angeles Lakers", opponentQuality: 8.7, opponentWins: 60, opponentSeed: 1 },
    { year: 1974, name: "John Havlicek", team: "Boston Celtics", ppg: 26.4, rpg: 7.7, apg: 4.7, fg: 47.0, series: "BOS vs MIL", games: 7, notes: "Led Celtics to championship", opponent: "Milwaukee Bucks", opponentQuality: 8.5, opponentWins: 59, opponentSeed: 1 },
    { year: 1975, name: "Rick Barry", team: "Golden State Warriors", ppg: 29.5, rpg: 4.0, apg: 5.0, fg: 44.0, series: "GSW vs WAS", games: 4, notes: "Sweep of Washington", opponent: "Washington Bullets", opponentQuality: 7.2, opponentWins: 60, opponentSeed: 1 },
    { year: 1976, name: "Jo Jo White", team: "Boston Celtics", ppg: 21.7, rpg: 4.3, apg: 5.8, fg: 44.0, series: "BOS vs PHX", games: 6, notes: "Triple overtime Game 5", opponent: "Phoenix Suns", opponentQuality: 7.8, opponentWins: 42, opponentSeed: 3 },
    { year: 1977, name: "Bill Walton", team: "Portland Trail Blazers", ppg: 18.5, rpg: 19.0, apg: 5.2, fg: 54.0, series: "POR vs PHI", games: 6, notes: "Portland's only championship", opponent: "Philadelphia 76ers", opponentQuality: 8.3, opponentWins: 50, opponentSeed: 2 },
    { year: 1978, name: "Wes Unseld", team: "Washington Bullets", ppg: 9.0, rpg: 11.7, apg: 3.8, fg: 50.0, series: "WAS vs SEA", games: 7, notes: "Lowest PPG for Finals MVP", opponent: "Seattle SuperSonics", opponentQuality: 7.5, opponentWins: 47, opponentSeed: 4 },
    { year: 1979, name: "Dennis Johnson", team: "Seattle SuperSonics", ppg: 22.6, rpg: 6.0, apg: 6.0, fg: 44.0, series: "SEA vs WAS", games: 5, notes: "Seattle's only championship", opponent: "Washington Bullets", opponentQuality: 7.8, opponentWins: 54, opponentSeed: 1 },
    { year: 1980, name: "Magic Johnson", team: "Los Angeles Lakers", ppg: 21.5, rpg: 11.2, apg: 8.7, fg: 57.0, series: "LAL vs PHI", games: 6, notes: "Rookie Finals MVP at center", opponent: "Philadelphia 76ers", opponentQuality: 8.9, opponentWins: 59, opponentSeed: 3 },

    // 1981-1990
    { year: 1981, name: "Cedric Maxwell", team: "Boston Celtics", ppg: 17.7, rpg: 9.5, apg: 2.8, fg: 56.8, series: "BOS vs HOU", games: 6, notes: "Efficient scoring performance", opponent: "Houston Rockets", opponentQuality: 7.2, opponentWins: 40, opponentSeed: 6 },
    { year: 1982, name: "Magic Johnson", team: "Los Angeles Lakers", ppg: 16.2, rpg: 10.8, apg: 8.0, fg: 53.0, series: "LAL vs PHI", games: 6, notes: "Second Finals MVP", opponent: "Philadelphia 76ers", opponentQuality: 8.7, opponentWins: 58, opponentSeed: 3 },
    { year: 1983, name: "Moses Malone", team: "Philadelphia 76ers", ppg: 25.8, rpg: 18.0, apg: 1.5, fg: 50.0, series: "PHI vs LAL", games: 4, notes: "Fo' Fo' Fo' prediction", opponent: "Los Angeles Lakers", opponentQuality: 8.5, opponentWins: 58, opponentSeed: 1 },
    { year: 1984, name: "Larry Bird", team: "Boston Celtics", ppg: 27.4, rpg: 14.0, apg: 3.6, fg: 48.4, series: "BOS vs LAL", games: 7, notes: "First of three Finals MVPs", opponent: "Los Angeles Lakers", opponentQuality: 9.1, opponentWins: 54, opponentSeed: 1 },
    { year: 1985, name: "Kareem Abdul-Jabbar", team: "Los Angeles Lakers", ppg: 25.7, rpg: 9.0, apg: 5.2, fg: 60.4, series: "LAL vs BOS", games: 6, notes: "Oldest Finals MVP at 38", opponent: "Boston Celtics", opponentQuality: 9.3, opponentWins: 63, opponentSeed: 1 },
    { year: 1986, name: "Larry Bird", team: "Boston Celtics", ppg: 24.0, rpg: 9.7, apg: 9.5, fg: 48.2, series: "BOS vs HOU", games: 6, notes: "Near triple-double average", opponent: "Houston Rockets", opponentQuality: 7.8, opponentWins: 51, opponentSeed: 2 },
    { year: 1987, name: "Magic Johnson", team: "Los Angeles Lakers", ppg: 26.2, rpg: 8.0, apg: 13.0, fg: 54.1, series: "LAL vs BOS", games: 6, notes: "Third Finals MVP", opponent: "Boston Celtics", opponentQuality: 9.2, opponentWins: 59, opponentSeed: 1 },
    { year: 1988, name: "James Worthy", team: "Los Angeles Lakers", ppg: 22.0, rpg: 7.4, apg: 4.4, fg: 49.2, series: "LAL vs DET", games: 7, notes: "Big Game James", opponent: "Detroit Pistons", opponentQuality: 8.8, opponentWins: 54, opponentSeed: 2 },
    { year: 1989, name: "Joe Dumars", team: "Detroit Pistons", ppg: 27.3, rpg: 1.8, apg: 6.0, fg: 54.0, series: "DET vs LAL", games: 4, notes: "Pistons first championship", opponent: "Los Angeles Lakers", opponentQuality: 8.4, opponentWins: 57, opponentSeed: 1 },
    { year: 1990, name: "Isiah Thomas", team: "Detroit Pistons", ppg: 27.6, rpg: 5.2, apg: 7.0, fg: 54.2, series: "DET vs POR", games: 5, notes: "Back-to-back championships", opponent: "Portland Trail Blazers", opponentQuality: 8.1, opponentWins: 59, opponentSeed: 3 },

    // 1991-2000
    { year: 1991, name: "Michael Jordan", team: "Chicago Bulls", ppg: 31.2, rpg: 6.6, apg: 11.4, fg: 55.8, series: "CHI vs LAL", games: 5, notes: "First of six Finals MVPs", opponent: "Los Angeles Lakers", opponentQuality: 8.6, opponentWins: 58, opponentSeed: 2 },
    { year: 1992, name: "Michael Jordan", team: "Chicago Bulls", ppg: 35.8, rpg: 4.8, apg: 6.5, fg: 52.6, series: "CHI vs POR", games: 6, notes: "Shrug game", opponent: "Portland Trail Blazers", opponentQuality: 8.9, opponentWins: 57, opponentSeed: 1 },
    { year: 1993, name: "Michael Jordan", team: "Chicago Bulls", ppg: 41.0, rpg: 8.5, apg: 6.3, fg: 50.8, series: "CHI vs PHX", games: 6, notes: "Highest PPG in Finals history", opponent: "Phoenix Suns", opponentQuality: 9.1, opponentWins: 62, opponentSeed: 1 },
    { year: 1994, name: "Hakeem Olajuwon", team: "Houston Rockets", ppg: 26.9, rpg: 9.1, apg: 3.6, fg: 50.0, series: "HOU vs NYK", games: 7, notes: "First championship for Rockets", opponent: "New York Knicks", opponentQuality: 8.7, opponentWins: 57, opponentSeed: 2 },
    { year: 1995, name: "Hakeem Olajuwon", team: "Houston Rockets", ppg: 32.8, rpg: 11.5, apg: 5.5, fg: 48.3, series: "HOU vs ORL", games: 4, notes: "Sweep of Magic", opponent: "Orlando Magic", opponentQuality: 8.4, opponentWins: 57, opponentSeed: 1 },
    { year: 1996, name: "Michael Jordan", team: "Chicago Bulls", ppg: 27.3, rpg: 5.3, apg: 4.2, fg: 41.5, series: "CHI vs SEA", games: 6, notes: "72-win season championship", opponent: "Seattle SuperSonics", opponentQuality: 8.2, opponentWins: 64, opponentSeed: 1 },
    { year: 1997, name: "Michael Jordan", team: "Chicago Bulls", ppg: 32.3, rpg: 7.0, apg: 6.0, fg: 45.6, series: "CHI vs UTA", games: 6, notes: "Flu game", opponent: "Utah Jazz", opponentQuality: 8.8, opponentWins: 64, opponentSeed: 1 },
    { year: 1998, name: "Michael Jordan", team: "Chicago Bulls", ppg: 33.5, rpg: 4.0, apg: 2.3, fg: 42.7, series: "CHI vs UTA", games: 6, notes: "The Last Shot", opponent: "Utah Jazz", opponentQuality: 8.9, opponentWins: 62, opponentSeed: 1 },
    { year: 1999, name: "Tim Duncan", team: "San Antonio Spurs", ppg: 27.4, rpg: 14.0, apg: 2.4, fg: 53.7, series: "SAS vs NYK", games: 5, notes: "First of five championships", opponent: "New York Knicks", opponentQuality: 7.8, opponentWins: 27, opponentSeed: 8 },
    { year: 2000, name: "Shaquille O'Neal", team: "Los Angeles Lakers", ppg: 38.0, rpg: 16.7, apg: 2.3, fg: 61.1, series: "LAL vs IND", games: 6, notes: "Dominant inside presence", opponent: "Indiana Pacers", opponentQuality: 8.3, opponentWins: 56, opponentSeed: 1 },

    // 2001-2010
    { year: 2001, name: "Shaquille O'Neal", team: "Los Angeles Lakers", ppg: 33.0, rpg: 15.8, apg: 4.8, fg: 57.3, series: "LAL vs PHI", games: 5, notes: "Second Finals MVP", opponent: "Philadelphia 76ers", opponentQuality: 8.6, opponentWins: 56, opponentSeed: 1 },
    { year: 2002, name: "Shaquille O'Neal", team: "Los Angeles Lakers", ppg: 36.3, rpg: 12.3, apg: 3.8, fg: 59.5, series: "LAL vs NJN", games: 4, notes: "Three-peat completed", opponent: "New Jersey Nets", opponentQuality: 7.5, opponentWins: 52, opponentSeed: 1 },
    { year: 2003, name: "Tim Duncan", team: "San Antonio Spurs", ppg: 24.2, rpg: 17.0, apg: 5.3, fg: 49.5, series: "SAS vs NJN", games: 6, notes: "Near quadruple-double in Game 6", opponent: "New Jersey Nets", opponentQuality: 7.8, opponentWins: 49, opponentSeed: 2 },
    { year: 2004, name: "Chauncey Billups", team: "Detroit Pistons", ppg: 21.0, rpg: 3.2, apg: 5.2, fg: 50.9, series: "DET vs LAL", games: 5, notes: "Mr. Big Shot", opponent: "Los Angeles Lakers", opponentQuality: 8.4, opponentWins: 56, opponentSeed: 2 },
    { year: 2005, name: "Tim Duncan", team: "San Antonio Spurs", ppg: 20.6, rpg: 14.1, apg: 2.1, fg: 41.9, series: "SAS vs DET", games: 7, notes: "Third Finals MVP", opponent: "Detroit Pistons", opponentQuality: 8.7, opponentWins: 54, opponentSeed: 2 },
    { year: 2006, name: "Dwyane Wade", team: "Miami Heat", ppg: 34.7, rpg: 7.8, apg: 3.8, fg: 46.8, series: "MIA vs DAL", games: 6, notes: "First championship for Heat", opponent: "Dallas Mavericks", opponentQuality: 8.5, opponentWins: 60, opponentSeed: 4 },
    { year: 2007, name: "Tony Parker", team: "San Antonio Spurs", ppg: 24.5, rpg: 5.0, apg: 3.3, fg: 56.8, series: "SAS vs CLE", games: 4, notes: "First European Finals MVP", opponent: "Cleveland Cavaliers", opponentQuality: 7.8, opponentWins: 50, opponentSeed: 2 },
    { year: 2008, name: "Paul Pierce", team: "Boston Celtics", ppg: 21.8, rpg: 4.5, apg: 6.3, fg: 43.2, series: "BOS vs LAL", games: 6, notes: "The Truth delivers", opponent: "Los Angeles Lakers", opponentQuality: 8.9, opponentWins: 57, opponentSeed: 1 },
    { year: 2009, name: "Kobe Bryant", team: "Los Angeles Lakers", ppg: 32.4, rpg: 5.6, apg: 7.4, fg: 43.0, series: "LAL vs ORL", games: 5, notes: "First Finals MVP without Shaq", opponent: "Orlando Magic", opponentQuality: 8.2, opponentWins: 59, opponentSeed: 3 },
    { year: 2010, name: "Kobe Bryant", team: "Los Angeles Lakers", ppg: 28.6, rpg: 8.0, apg: 3.9, fg: 40.5, series: "LAL vs BOS", games: 7, notes: "Revenge against Celtics", opponent: "Boston Celtics", opponentQuality: 9.1, opponentWins: 50, opponentSeed: 4 },

    // 2011-2020
    { year: 2011, name: "Dirk Nowitzki", team: "Dallas Mavericks", ppg: 26.0, rpg: 9.7, apg: 2.0, fg: 41.6, series: "DAL vs MIA", games: 6, notes: "First championship for Mavericks", opponent: "Miami Heat", opponentQuality: 9.3, opponentWins: 58, opponentSeed: 2 },
    { year: 2012, name: "LeBron James", team: "Miami Heat", ppg: 28.6, rpg: 10.2, apg: 7.4, fg: 47.2, series: "MIA vs OKC", games: 5, notes: "First of four Finals MVPs", opponent: "Oklahoma City Thunder", opponentQuality: 8.8, opponentWins: 47, opponentSeed: 2 },
    { year: 2013, name: "LeBron James", team: "Miami Heat", ppg: 25.3, rpg: 10.9, apg: 7.0, fg: 44.7, series: "MIA vs SAS", games: 7, notes: "Ray Allen's three saves the day", opponent: "San Antonio Spurs", opponentQuality: 9.2, opponentWins: 58, opponentSeed: 2 },
    { year: 2014, name: "Kawhi Leonard", team: "San Antonio Spurs", ppg: 17.8, rpg: 6.4, apg: 2.0, fg: 61.2, series: "SAS vs MIA", games: 5, notes: "The Klaw emerges", opponent: "Miami Heat", opponentQuality: 8.9, opponentWins: 54, opponentSeed: 2 },
    { year: 2015, name: "Andre Iguodala", team: "Golden State Warriors", ppg: 16.3, rpg: 5.8, apg: 4.0, fg: 52.1, series: "GSW vs CLE", games: 6, notes: "First Finals MVP off the bench", opponent: "Cleveland Cavaliers", opponentQuality: 8.6, opponentWins: 53, opponentSeed: 2 },
    { year: 2016, name: "LeBron James", team: "Cleveland Cavaliers", ppg: 29.7, rpg: 11.3, apg: 8.9, fg: 49.4, series: "CLE vs GSW", games: 7, notes: "3-1 comeback, Cleveland's first title", opponent: "Golden State Warriors", opponentQuality: 9.8, opponentWins: 73, opponentSeed: 1 },
    { year: 2017, name: "Kevin Durant", team: "Golden State Warriors", ppg: 35.2, rpg: 8.2, apg: 5.4, fg: 55.6, series: "GSW vs CLE", games: 5, notes: "First championship with Warriors", opponent: "Cleveland Cavaliers", opponentQuality: 8.7, opponentWins: 51, opponentSeed: 2 },
    { year: 2018, name: "Kevin Durant", team: "Golden State Warriors", ppg: 28.8, rpg: 10.8, apg: 7.5, fg: 52.6, series: "GSW vs CLE", games: 4, notes: "Sweep of Cavaliers", opponent: "Cleveland Cavaliers", opponentQuality: 8.4, opponentWins: 50, opponentSeed: 4 },
    { year: 2019, name: "Kawhi Leonard", team: "Toronto Raptors", ppg: 28.5, rpg: 9.8, apg: 4.2, fg: 43.4, series: "TOR vs GSW", games: 6, notes: "First championship for Raptors", opponent: "Golden State Warriors", opponentQuality: 8.8, opponentWins: 57, opponentSeed: 1 },
    { year: 2020, name: "LeBron James", team: "Los Angeles Lakers", ppg: 29.8, rpg: 11.8, apg: 8.5, fg: 59.1, series: "LAL vs MIA", games: 6, notes: "Bubble championship", opponent: "Miami Heat", opponentQuality: 8.2, opponentWins: 44, opponentSeed: 5 },

    // 2021-2023
    { year: 2021, name: "Giannis Antetokounmpo", team: "Milwaukee Bucks", ppg: 35.2, rpg: 13.2, apg: 5.0, fg: 61.8, series: "MIL vs PHX", games: 6, notes: "50-point closeout game", opponent: "Phoenix Suns", opponentQuality: 8.5, opponentWins: 51, opponentSeed: 2 },
    { year: 2022, name: "Stephen Curry", team: "Golden State Warriors", ppg: 31.2, rpg: 6.0, apg: 5.0, fg: 48.2, series: "GSW vs BOS", games: 6, notes: "First Finals MVP for Curry", opponent: "Boston Celtics", opponentQuality: 8.9, opponentWins: 51, opponentSeed: 2 },
    { year: 2023, name: "Nikola Jokić", team: "Denver Nuggets", ppg: 30.2, rpg: 14.0, apg: 7.2, fg: 58.3, series: "DEN vs MIA", games: 5, notes: "First championship for Nuggets", opponent: "Miami Heat", opponentQuality: 7.8, opponentWins: 44, opponentSeed: 8 }
];

// Calculate additional stats including opponent-adjusted metrics
mvpsData.forEach(mvp => {
    mvp.efficiency = ((mvp.ppg * 1) + (mvp.rpg * 1.2) + (mvp.apg * 1.5)) * (mvp.fg / 100);
    mvp.impact = mvp.ppg + (mvp.rpg * 0.5) + (mvp.apg * 0.7) + (mvp.fg * 0.3);
    mvp.decade = Math.floor(mvp.year / 10) * 10;
    mvp.isRecent = mvp.year >= 2014;
    
    // Opponent-adjusted metrics
    mvp.opponentAdjustedPpg = mvp.ppg * (mvp.opponentQuality / 8.5); // 8.5 is baseline
    mvp.opponentAdjustedEfficiency = mvp.efficiency * (mvp.opponentQuality / 8.5);
    mvp.opponentAdjustedImpact = mvp.impact * (mvp.opponentQuality / 8.5);
    
    // Difficulty score (considers opponent quality and series length)
    mvp.difficultyScore = (mvp.opponentQuality * 0.7) + (mvp.games * 0.3);
    
    // Overall quality score (combines performance and opponent difficulty)
    mvp.qualityScore = (mvp.opponentAdjustedPpg * 0.4) + (mvp.opponentAdjustedEfficiency * 0.3) + (mvp.difficultyScore * 0.3);
});

// DOM Elements
const mvpsGrid = document.getElementById('mvps-grid');
const recentMvpsGrid = document.getElementById('recent-mvps-grid');
const searchInput = document.getElementById('search-mvps');
const teamFilter = document.getElementById('team-filter');
const decadeFilter = document.getElementById('decade-filter');
const modal = document.getElementById('mvp-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Initialize the application
function init() {
    renderAllMvps();
    renderRecentMvps();
    setupFilters();
    setupNavigation();
    setupModal();
    updateComparisonStats();
    renderRankings('ppg');
    createComparisonChart();
}

// Render all MVPs
function renderAllMvps(filteredData = mvpsData) {
    mvpsGrid.innerHTML = '';
    filteredData.forEach(mvp => {
        const card = createMvpCard(mvp);
        mvpsGrid.appendChild(card);
    });
}

// Render recent MVPs (last 10 years)
function renderRecentMvps() {
    const recentMvps = mvpsData.filter(mvp => mvp.isRecent);
    recentMvpsGrid.innerHTML = '';
    recentMvps.forEach(mvp => {
        const card = createMvpCard(mvp, true);
        recentMvpsGrid.appendChild(card);
    });
}

// Create MVP card
function createMvpCard(mvp, isRecent = false) {
    const card = document.createElement('div');
    card.className = `mvp-card ${isRecent ? 'recent' : ''}`;
    card.innerHTML = `
        <div class="mvp-header">
            <div class="mvp-avatar">${mvp.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="mvp-info">
                <h3>${mvp.name}</h3>
                <div class="year">${mvp.year}</div>
                <div class="team">${mvp.team}</div>
            </div>
        </div>
        <div class="mvp-stats">
            <div class="stat">
                <div class="stat-value">${mvp.ppg}</div>
                <div class="stat-label">PPG</div>
            </div>
            <div class="stat">
                <div class="stat-value">${mvp.rpg}</div>
                <div class="stat-label">RPG</div>
            </div>
            <div class="stat">
                <div class="stat-value">${mvp.apg}</div>
                <div class="stat-label">APG</div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showMvpDetails(mvp));
    return card;
}

// Show MVP details in modal
function showMvpDetails(mvp) {
    modalContent.innerHTML = `
        <h2>${mvp.name} - ${mvp.year}</h2>
        <div class="mvp-details">
            <p><strong>Team:</strong> ${mvp.team}</p>
            <p><strong>Series:</strong> ${mvp.series}</p>
            <p><strong>Games:</strong> ${mvp.games}</p>
            <p><strong>Opponent:</strong> ${mvp.opponent} (${mvp.opponentWins} wins, ${mvp.opponentSeed} seed)</p>
            <p><strong>Opponent Quality Rating:</strong> ${mvp.opponentQuality}/10</p>
            <p><strong>Notes:</strong> ${mvp.notes}</p>
            
            <h3>Finals Statistics</h3>
            <div class="detailed-stats">
                <div class="stat-row">
                    <span>Points Per Game:</span>
                    <span>${mvp.ppg}</span>
                </div>
                <div class="stat-row">
                    <span>Rebounds Per Game:</span>
                    <span>${mvp.rpg}</span>
                </div>
                <div class="stat-row">
                    <span>Assists Per Game:</span>
                    <span>${mvp.apg}</span>
                </div>
                <div class="stat-row">
                    <span>Field Goal %:</span>
                    <span>${mvp.fg}%</span>
                </div>
                <div class="stat-row">
                    <span>Efficiency Score:</span>
                    <span>${mvp.efficiency.toFixed(1)}</span>
                </div>
                <div class="stat-row">
                    <span>Impact Score:</span>
                    <span>${mvp.impact.toFixed(1)}</span>
                </div>
                <div class="stat-row">
                    <span>Opponent-Adjusted PPG:</span>
                    <span>${mvp.opponentAdjustedPpg.toFixed(1)}</span>
                </div>
                <div class="stat-row">
                    <span>Difficulty Score:</span>
                    <span>${mvp.difficultyScore.toFixed(1)}</span>
                </div>
                <div class="stat-row">
                    <span>Overall Quality Score:</span>
                    <span>${mvp.qualityScore.toFixed(1)}</span>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// Setup filters
function setupFilters() {
    // Populate team filter
    const teams = [...new Set(mvpsData.map(mvp => mvp.team))].sort();
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });

    // Populate decade filter
    const decades = [...new Set(mvpsData.map(mvp => mvp.decade))].sort();
    decades.forEach(decade => {
        const option = document.createElement('option');
        option.value = decade;
        option.textContent = `${decade}s`;
        decadeFilter.appendChild(option);
    });

    // Add event listeners
    searchInput.addEventListener('input', filterMvps);
    teamFilter.addEventListener('change', filterMvps);
    decadeFilter.addEventListener('change', filterMvps);
}

// Filter MVPs
function filterMvps() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTeam = teamFilter.value;
    const selectedDecade = decadeFilter.value;

    const filtered = mvpsData.filter(mvp => {
        const matchesSearch = mvp.name.toLowerCase().includes(searchTerm) || 
                            mvp.team.toLowerCase().includes(searchTerm);
        const matchesTeam = !selectedTeam || mvp.team === selectedTeam;
        const matchesDecade = !selectedDecade || mvp.decade === parseInt(selectedDecade);

        return matchesSearch && matchesTeam && matchesDecade;
    });

    renderAllMvps(filtered);
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Setup modal
function setupModal() {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Update comparison statistics
function updateComparisonStats() {
    const allTimeAvg = mvpsData.reduce((sum, mvp) => sum + mvp.ppg, 0) / mvpsData.length;
    const recentMvps = mvpsData.filter(mvp => mvp.isRecent);
    const recentAvg = recentMvps.reduce((sum, mvp) => sum + mvp.ppg, 0) / recentMvps.length;
    const difference = recentAvg - allTimeAvg;

    document.getElementById('all-time-avg').textContent = allTimeAvg.toFixed(1);
    document.getElementById('recent-avg').textContent = recentAvg.toFixed(1);
    document.getElementById('difference').textContent = difference.toFixed(1);
    document.getElementById('difference').style.color = difference > 0 ? '#28a745' : '#dc3545';
}

// Create comparison chart
function createComparisonChart() {
    const ctx = document.getElementById('comparison-chart').getContext('2d');
    
    const decades = [...new Set(mvpsData.map(mvp => mvp.decade))].sort();
    const avgPpgByDecade = decades.map(decade => {
        const decadeMvps = mvpsData.filter(mvp => mvp.decade === decade);
        return decadeMvps.reduce((sum, mvp) => sum + mvp.ppg, 0) / decadeMvps.length;
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: decades.map(d => `${d}s`),
            datasets: [{
                label: 'Average PPG by Decade',
                data: avgPpgByDecade,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Points Per Game'
                    }
                }
            }
        }
    });
}

// Render rankings
function renderRankings(type) {
    const rankingsList = document.getElementById('rankings-list');
    let sortedMvps;

    switch(type) {
        case 'ppg':
            sortedMvps = [...mvpsData].sort((a, b) => b.ppg - a.ppg);
            break;
        case 'efficiency':
            sortedMvps = [...mvpsData].sort((a, b) => b.efficiency - a.efficiency);
            break;
        case 'impact':
            sortedMvps = [...mvpsData].sort((a, b) => b.impact - a.impact);
            break;
        case 'opponent-adjusted':
            sortedMvps = [...mvpsData].sort((a, b) => b.opponentAdjustedPpg - a.opponentAdjustedPpg);
            break;
        case 'quality':
            sortedMvps = [...mvpsData].sort((a, b) => b.qualityScore - a.qualityScore);
            break;
    }

    rankingsList.innerHTML = '';
    sortedMvps.slice(0, 10).forEach((mvp, index) => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        
        let score, scoreLabel;
        switch(type) {
            case 'ppg':
                score = mvp.ppg;
                scoreLabel = 'PPG';
                break;
            case 'efficiency':
                score = mvp.efficiency;
                scoreLabel = 'EFF';
                break;
            case 'impact':
                score = mvp.impact;
                scoreLabel = 'IMP';
                break;
            case 'opponent-adjusted':
                score = mvp.opponentAdjustedPpg;
                scoreLabel = 'Adj PPG';
                break;
            case 'quality':
                score = mvp.qualityScore;
                scoreLabel = 'Quality';
                break;
        }
        
        rankingItem.innerHTML = `
            <div class="ranking-number ${index < 3 ? 'top-3' : ''}">${index + 1}</div>
            <div class="ranking-info">
                <h4>${mvp.name}</h4>
                <div class="details">${mvp.year} - ${mvp.team} vs ${mvp.opponent}</div>
            </div>
            <div class="ranking-score">${score.toFixed(1)} ${scoreLabel}</div>
        `;
        
        rankingItem.addEventListener('click', () => showMvpDetails(mvp));
        rankingsList.appendChild(rankingItem);
    });
}

// Setup ranking tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRankings(btn.dataset.ranking);
        });
    });
});

// Initialize the application
document.addEventListener('DOMContentLoaded', init); 