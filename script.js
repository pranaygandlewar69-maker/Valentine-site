// Typing Effect
const text = "Will You Marry Me?";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Yes Button - Show Response and Confetti
document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("response").classList.remove("hidden");
    startConfetti();
});

// Moving "No" Button
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Floating Hearts
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);

// Sparkles
const sparklesContainer = document.querySelector(".sparkles");
function createSparkle() {
    const sparkle = document.createElement("span");
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = (Math.random() * 3 + 2) + "s";
    sparklesContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 5000);
}
setInterval(createSparkle, 200);

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 50,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10
        });
    }
    drawConfetti();
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.r, c.r);
        c.y += 2;
        if (c.y > canvas.height) confetti[i].y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

// Resize Canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});