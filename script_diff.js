--- script.js (原始)


+++ script.js (修改后)
// Game functionality for the gaming website

document.addEventListener('DOMContentLoaded', function() {
    // Add animation to game cards on scroll
    const gameCards = document.querySelectorAll('.game-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    gameCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add click functionality to game cards
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameCard = this.closest('.game-card');
            const gameTitle = gameCard.querySelector('.game-title').textContent;

            // Show an alert for now - in a real implementation, this would launch the actual game
            alert(`Launching ${gameTitle}! In a real implementation, this would open the actual game.`);
        });
    });

    // Add functionality to the Instagram button
    const instagramBtn = document.querySelector('.instagram-btn');
    instagramBtn.addEventListener('click', function() {
        alert('Redirecting to Instagram profile!');
        // In a real implementation: window.open('https://instagram.com/your_profile', '_blank');
    });

    // Add functionality to the CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const gamesSection = document.querySelector('.games-section');
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Add hover effects to game cards
    const gameImages = document.querySelectorAll('.game-image');
    gameImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Game data with actual game URLs
const gameData = {
    'Vasu Dino': 'https://chromedino.com/',
    'Sayip Dino': 'https://www.coolmathgames.com/0-run-3',
    'Thoppi Dino': 'https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple',
    'Sura Dino': 'https://www.coolmathgames.com/0-raiders-of-the-north-sea',
    'Naga Chechi Dino': 'https://www.coolmathgames.com/0-moto-x3m',
    'Hashir Dino': 'https://www.coolmathgames.com/0-slope',
    'Basil X Anthas Dino': 'https://www.coolmathgames.com/0-tunnel-rush',
    'Wikky X Azif Dino': 'https://www.coolmathgames.com/0-papa-s-taco-mia',
    'Damu Dino': 'https://www.coolmathgames.com/0-run-2',
    'Lal X Lalu Alex Dino': 'https://www.coolmathgames.com/0-bloons-td-5',
    'Raju Dino': 'https://www.coolmathgames.com/0-fireboy-watergirl-3-the-ice-temple',
    'Pappu Dino': 'https://www.coolmathgames.com/0-papas-burgeria',
    'Kuttu Dino': 'https://www.coolmathgames.com/0-bloons-td-6',
    'Mammootty Dino': 'https://www.coolmathgames.com/0-raiders-of-the-north-sea',
    'Mohanlal Dino': 'https://www.coolmathgames.com/0-worlds-hardest-game',
    'DQ Dino': 'https://www.coolmathgames.com/0-papas-pizzeria',
    'Nivin Dino': 'https://www.coolmathgames.com/0-duck-life-4',
    'Unni Dino': 'https://www.coolmathgames.com/0-run',
    'Appu Dino': 'https://www.coolmathgames.com/0-temple-run-2',
    'Vijay Dino': 'https://www.coolmathgames.com/0-2048'
};

// Function to open a game in a new tab
function openGame(gameUrl, gameName) {
    if (gameUrl && gameUrl !== '') {
        window.open(gameUrl, '_blank');
    } else if (gameData[gameName]) {
        window.open(gameData[gameName], '_blank');
    } else {
        alert(`${gameName} is coming soon!`);
    }
}