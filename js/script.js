// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 1000 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

// // Move "No" button function (limited range)
function moveButton(button) {
    const container = button.parentElement;

    // Make sure the container can position children
    container.style.position = "relative";

    // Define movement range (in pixels)
    const rangeX = 1000; // how far left/right it can move
    const rangeY = 1000; // how far up/down it can move

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const maxX = Math.min(containerWidth - button.offsetWidth, rangeX);
    const maxY = Math.min(containerHeight - button.offsetHeight, rangeY);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    triggerConfetti();
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    triggerConfetti();
    
    // Additional confetti for the final celebration
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 1000,
        spread: 700,
        origin: { y: 0.6 }
    });

}


