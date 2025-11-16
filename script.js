// F1 2025 Calendar Data
const races = [
    { round: 1, name: "Australian GP", circuit: "Melbourne", date: "14-16 มี.ค.", sprint: false },
    { round: 2, name: "Chinese GP", circuit: "Shanghai", date: "21-23 มี.ค.", sprint: true },
    { round: 3, name: "Japanese GP", circuit: "Suzuka", date: "4-6 เม.ย.", sprint: false },
    { round: 4, name: "Bahrain GP", circuit: "Sakhir", date: "11-13 เม.ย.", sprint: false },
    { round: 5, name: "Saudi Arabian GP", circuit: "Jeddah", date: "18-20 เม.ย.", sprint: false },
    { round: 6, name: "Miami GP", circuit: "Miami", date: "2-4 พ.ค.", sprint: true },
    { round: 7, name: "Emilia Romagna GP", circuit: "Imola", date: "16-18 พ.ค.", sprint: false },
    { round: 8, name: "Monaco GP", circuit: "Monaco", date: "23-25 พ.ค.", sprint: false },
    { round: 9, name: "Spanish GP", circuit: "Barcelona", date: "30 พ.ค.-1 มิ.ย.", sprint: false },
    { round: 10, name: "Canadian GP", circuit: "Montreal", date: "13-15 มิ.ย.", sprint: false },
    { round: 11, name: "Austrian GP", circuit: "Spielberg", date: "27-29 มิ.ย.", sprint: false },
    { round: 12, name: "British GP", circuit: "Silverstone", date: "4-6 ก.ค.", sprint: false },
    { round: 13, name: "Belgian GP", circuit: "Spa-Francorchamps", date: "25-27 ก.ค.", sprint: true },
    { round: 14, name: "Hungarian GP", circuit: "Budapest", date: "1-3 ส.ค.", sprint: false },
    { round: 15, name: "Dutch GP", circuit: "Zandvoort", date: "29-31 ส.ค.", sprint: false },
    { round: 16, name: "Italian GP", circuit: "Monza", date: "5-7 ก.ย.", sprint: false },
    { round: 17, name: "Azerbaijan GP", circuit: "Baku", date: "19-21 ก.ย.", sprint: false },
    { round: 18, name: "Singapore GP", circuit: "Marina Bay", date: "3-5 ต.ค.", sprint: false },
    { round: 19, name: "United States GP", circuit: "Austin", date: "17-19 ต.ค.", sprint: true },
    { round: 20, name: "Mexico City GP", circuit: "Mexico City", date: "24-26 ต.ค.", sprint: false },
    { round: 21, name: "São Paulo GP", circuit: "Interlagos", date: "7-9 พ.ย.", sprint: true },
    { round: 22, name: "Las Vegas GP", circuit: "Las Vegas", date: "20-22 พ.ย.", sprint: true },
    { round: 23, name: "Qatar GP", circuit: "Lusail", date: "28-30 พ.ย.", sprint: false },
    { round: 24, name: "Abu Dhabi GP", circuit: "Yas Marina", date: "5-7 ธ.ค.", sprint: false }
];

// F1 2025 Drivers Data
const drivers = [
    { 
        number: 1, 
        name: "Max Verstappen", 
        team: "Red Bull Racing", 
        teamClass: "team-red-bull",
        nationality: "NED",
        championships: 4,
        podiums: 124,
        wins: 62
    },
    { 
        number: 22, 
        name: "Yuki Tsunoda", 
        team: "Red Bull Racing", 
        teamClass: "team-red-bull",
        nationality: "JPN",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 44, 
        name: "Lewis Hamilton", 
        team: "Ferrari", 
        teamClass: "team-ferrari",
        nationality: "GBR",
        championships: 7,
        podiums: 199,
        wins: 105
    },
    { 
        number: 16, 
        name: "Charles Leclerc", 
        team: "Ferrari", 
        teamClass: "team-ferrari",
        nationality: "MON",
        championships: 0,
        podiums: 38,
        wins: 7
    },
    { 
        number: 63, 
        name: "George Russell", 
        team: "Mercedes", 
        teamClass: "team-mercedes",
        nationality: "GBR",
        championships: 0,
        podiums: 13,
        wins: 3
    },
    { 
        number: 12, 
        name: "Andrea Kimi Antonelli", 
        team: "Mercedes", 
        teamClass: "team-mercedes",
        nationality: "ITA",
        championships: 0,
        podiums: 2,
        wins: 0
    },
    { 
        number: 4, 
        name: "Lando Norris", 
        team: "McLaren", 
        teamClass: "team-mclaren",
        nationality: "GBR",
        championships: 0,
        podiums: 17,
        wins: 7
    },
    { 
        number: 81, 
        name: "Oscar Piastri", 
        team: "McLaren", 
        teamClass: "team-mclaren",
        nationality: "AUS",
        championships: 0,
        podiums: 14,
        wins: 7
    },
    { 
        number: 14, 
        name: "Fernando Alonso", 
        team: "Aston Martin", 
        teamClass: "team-aston-martin",
        nationality: "ESP",
        championships: 2,
        podiums: 106,
        wins: 32
    },
    { 
        number: 18, 
        name: "Lance Stroll", 
        team: "Aston Martin", 
        teamClass: "team-aston-martin",
        nationality: "CAN",
        championships: 0,
        podiums: 3,
        wins: 0
    },
    { 
        number: 10, 
        name: "Pierre Gasly", 
        team: "Alpine", 
        teamClass: "team-alpine",
        nationality: "FRA",
        championships: 0,
        podiums: 4,
        wins: 1
    },
    { 
        number: 43, 
        name: "Franco Colapinto", 
        team: "Alpine", 
        teamClass: "team-alpine",
        nationality: "ARG",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 23, 
        name: "Alex Albon", 
        team: "Williams", 
        teamClass: "team-williams",
        nationality: "THA",
        championships: 0,
        podiums: 2,
        wins: 0
    },
    { 
        number: 55, 
        name: "Carlos Sainz", 
        team: "Williams", 
        teamClass: "team-williams",
        nationality: "ESP",
        championships: 0,
        podiums: 23,
        wins: 3
    },
    { 
        number: 87, 
        name: "Oliver Bearman", 
        team: "Haas", 
        teamClass: "team-haas",
        nationality: "GBR",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 31, 
        name: "Esteban Ocon", 
        team: "Haas", 
        teamClass: "team-haas",
        nationality: "FRA",
        championships: 0,
        podiums: 3,
        wins: 1
    },
    { 
        number: 27, 
        name: "Nico Hulkenberg", 
        team: "Sauber", 
        teamClass: "team-sauber",
        nationality: "GER",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 5, 
        name: "Gabriel Bortoleto", 
        team: "Sauber", 
        teamClass: "team-sauber",
        nationality: "BRA",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 30, 
        name: "Liam Lawson", 
        team: "Racing Bulls", 
        teamClass: "team-racing-bulls",
        nationality: "NZL",
        championships: 0,
        podiums: 0,
        wins: 0
    },
    { 
        number: 6, 
        name: "Isack Hadjar", 
        team: "Racing Bulls", 
        teamClass: "team-racing-bulls",
        nationality: "FRA",
        championships: 0,
        podiums: 0,
        wins: 0
    }
];

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.race-card, .driver-card, .rule-card');
    
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Render Calendar
function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    
    races.forEach(race => {
        const raceCard = document.createElement('div');
        raceCard.className = `race-card ${race.sprint ? 'sprint' : ''}`;
        raceCard.setAttribute('data-sprint', race.sprint);
        
        raceCard.innerHTML = `
            <div class="race-round">Round ${race.round}</div>
            <h3 class="race-name">${race.name}</h3>
            <div class="race-circuit">${race.circuit}</div>
            <div class="race-date">${race.date}</div>
            ${race.sprint ? '<span class="sprint-badge">Sprint Race</span>' : ''}
        `;
        
        calendarGrid.appendChild(raceCard);
    });
}

// Render Drivers
function renderDrivers() {
    const driversGrid = document.getElementById('driversGrid');
    
    drivers.forEach(driver => {
        const driverCard = document.createElement('div');
        driverCard.className = `driver-card ${driver.teamClass}`;
        driverCard.setAttribute('data-team', driver.teamClass);
        
        driverCard.innerHTML = `
            <img src="img/drivers/${driver.number}.jpg" alt="${driver.name}" class="driver-image" onerror="this.src='/f1-driver---driver-name-.jpg'" />
            <div class="driver-info">
                <div class="driver-number">#${driver.number}</div>
                <h3 class="driver-name">${driver.name}</h3>
                <div class="driver-team">${driver.team}</div>
                <div class="driver-stats">
                    <div class="driver-stat">
                        <span class="stat-value">${driver.championships}</span>
                        <span class="stat-label-small">Championships</span>
                    </div>
                    <div class="driver-stat">
                        <span class="stat-value">${driver.wins}</span>
                        <span class="stat-label-small">Wins</span>
                    </div>
                    <div class="driver-stat">
                        <span class="stat-value">${driver.podiums}</span>
                        <span class="stat-label-small">Podiums</span>
                    </div>
                </div>
            </div>
        `;
        
        driversGrid.appendChild(driverCard);
    });
}

function setupCalendarFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const raceCards = document.querySelectorAll('.race-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            raceCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'sprint') {
                    card.style.display = card.getAttribute('data-sprint') === 'true' ? 'block' : 'none';
                }
            });
        });
    });
}

function setupDriverFilter() {
    const filterButtons = document.querySelectorAll('.team-filter-btn');
    const driverCards = document.querySelectorAll('.driver-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const team = button.getAttribute('data-team');
            
            driverCards.forEach(card => {
                if (team === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.getAttribute('data-team') === team ? 'block' : 'none';
                }
            });
        });
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    renderDrivers();
    
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(stat => animateCounter(stat));
    
    revealOnScroll();
    setupCalendarFilter();
    setupDriverFilter();
    setupMobileMenu();
    setupNavbarScroll();
    setupBackToTop();
});
