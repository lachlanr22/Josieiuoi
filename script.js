const openButton = document.getElementById('openButton');
const choiceSection = document.getElementById('choiceSection');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesResult = document.getElementById('yesResult');
const noResult = document.getElementById('noResult');
const body = document.body;
const confettiContainer = document.getElementById('confettiContainer');

openButton.addEventListener('click', () => {
    choiceSection.classList.remove('hidden');
    openButton.classList.add('hidden');
});

/* NO button moves randomly */
noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 50 - 25;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button clicked */
yesButton.addEventListener('click', () => {
    yesResult.classList.remove('hidden');
    choiceSection.classList.add('hidden');
    body.style.background = 'linear-gradient(135deg, #ff9a9e, #fecfef)';

    // create confetti
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '🎉';
        confetti.style.position = 'absolute';
        confetti.style.fontSize = `${Math.random() * 20 + 15}px`;
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
});

/* NO button clicked */
noButton.addEventListener('click', () => {
    noResult.classList.remove('hidden');
    choiceSection.classList.add('hidden');
    body.style.background = 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
});

/* Confetti fall animation */
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);
