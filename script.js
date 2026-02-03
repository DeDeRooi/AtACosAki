const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
const titleRainContainer = document.getElementById('titleRain');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$€¥£¢?&';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops array
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

const mcuMovies = [
    "Iron Man",
    "The Incredible Hulk",
    "Iron Man 2",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "Iron Man 3",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Guardians of the Galaxy",
    "Avengers: Age of Ultron",
    "Ant-Man",
    "Captain America: Civil War",
    "Doctor Strange",
    "Guardians of the Galaxy Vol. 2",
    "Spider-Man: Homecoming",
    "Thor: Ragnarok",
    "Black Panther",
    "Avengers: Infinity War",
    "Ant-Man and the Wasp",
    "Captain Marvel",
    "Avengers: Endgame",
    "Spider-Man: Far From Home",
    "Black Widow",
    "Shang-Chi and the Legend of the Ten Rings",
    "Eternals",
    "Spider-Man: No Way Home",
    "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder",
    "Black Panther: Wakanda Forever",
    "Ant-Man and the Wasp: Quantumania",
    "Guardians of the Galaxy Vol. 3",
    "The Marvels",
    "Captain America: Brave New World", // Assuming this is the next release
    "Thunderbolts*",
    "Blade",
    "Deadpool 3",
    "Fantastic Four",
    "Avengers 5",
    "Avengers: Secret Wars"
];

function initializeTitleRain() {
    mcuMovies.forEach((title, index) => {
        const titleSpan = document.createElement('span');
        titleSpan.textContent = title;
        titleSpan.style.left = `${Math.random() * canvas.width}px`;
        titleSpan.style.top = `${Math.random() * canvas.height}px`;
        titleSpan.style.animation = `fall ${5 + Math.random() * 10}s linear infinite ${index * 0.5}s`; // Add animation
        titleRainContainer.appendChild(titleSpan);
    });
}

// CSS animation for falling titles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerHTML = `@keyframes fall {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(calc(100vh + 20px));
    }
}`;
document.head.appendChild(styleSheet);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Recalculate columns if needed, though the existing drops array might handle it reasonably
}

initializeTitleRain();
setInterval(draw, 33); // Adjust speed as needed
window.addEventListener('resize', resizeCanvas);