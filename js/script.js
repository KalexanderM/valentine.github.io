// Create hearts effect - PERFECT BALANCE version
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heartCount = Math.floor(Math.random() * 5) + 5; // 5 to 9 hearts
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 42 + 8) + 'px';
            heart.style.animationDuration = (Math.random() * 5 + 2) + 's';
            
            const colors = [
                '#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', 
                '#ff69b4', '#ff1493', '#ff007f', '#ff4d4d',
                '#ff3366', '#ff3399'
            ];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            if (Math.random() > 0.7) {
                heart.style.top = '0';
            } else {
                heart.style.bottom = '0';
            }
            
            heart.style.opacity = Math.random() * 0.6 + 0.4;
            heart.style.transform = `rotate(${Math.random() * 180 - 90}deg)`;
            
            hearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 9000);
        }, i * 40);
    }
}

// Start hearts
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createHearts, 200);
    setInterval(createHearts, 350);
    setInterval(createHearts, 500);
    
    setInterval(() => {
        for (let i = 0; i < 35; i++) {
            setTimeout(() => {
                createSingleHeart();
            }, i * 15);
        }
    }, 4000);
    
    setInterval(() => {
        createSingleHeart();
    }, 150);
});

function createSingleHeart() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 30 + 12) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 2.5) + 's';
    heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ff69b4'][Math.floor(Math.random() * 4)];
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    hearts.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 7000);
}

// FIXED: Button stays VISIBLE on screen!
function moveButton(button) {
    const container = button.parentElement;
    
    container.style.position = "relative";
    container.style.overflow = "visible";
    
    // Get container boundaries
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // KEEP BUTTON VISIBLE - Limit movement to container area
    const maxX = Math.max(0, containerRect.width - buttonWidth - 20); // 20px padding from edges
    const maxY = Math.max(0, containerRect.height - buttonHeight - 20);
    
    // Allow some movement but keep it in view
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    button.style.transition = "all 0.2s ease";
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    button.style.zIndex = "1000";
    
    const funnyMessages = [
        "Missed me! 😜", "Too slow! 🏃", "Catch me! 🦋", "Nope! 🙈", 
        "Try again! 😋", "Almost! 💫", "Not today! ✨", "Zoom! ⚡",
        "Poof! 🦋", "Whoosh! 💨", "Boing! 🌟", "Bye bye! 🎈"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    const colors = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ff69b4'];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    setTimeout(() => {
        button.textContent = "No 😢";
        button.style.backgroundColor = "#333";
        button.style.transform = "rotate(0deg)";
    }, 400);
    
    // Small confetti effect
    confetti({
        particleCount: 8,
        spread: 30,
        origin: { 
            x: (containerRect.left + x + buttonWidth/2) / window.innerWidth,
            y: (containerRect.top + y + buttonHeight/2) / window.innerHeight
        },
        colors: ['#ff6b6b', '#ff8e8e'],
        startVelocity: 20
    });
}

// FIXED: Make sure No button appears on Step 2
function makeNoButtonPerfect() {
    const noButton = document.querySelector('.btn-no');
    if (!noButton) return;
    
    // Reset button position when step 2 becomes active
    noButton.style.position = "relative";
    noButton.style.left = "0";
    noButton.style.top = "0";
    noButton.style.transform = "rotate(0deg)";
    noButton.style.backgroundColor = "#333";
    noButton.textContent = "No 😢";
    
    const events = ['mouseenter', 'click', 'touchstart'];
    
    events.forEach(eventType => {
        noButton.addEventListener(eventType, function(e) {
            e.preventDefault();
            e.stopPropagation();
            moveButton(this);
            triggerConfetti();
            
            // Small heart burst
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createHearts(), i * 30);
            }
        });
    });
}

// Navigation functions - FIXED to show No button only on step 2
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.remove('active');
    
    // Make sure No button is visible and reset
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "inline-block";
        noButton.style.position = "relative";
        noButton.style.left = "0";
        noButton.style.top = "0";
    }
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => triggerConfetti(), i * 100);
    }
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHearts(), i * 30);
    }
    
    setTimeout(() => {
        makeNoButtonPerfect();
    }, 100);
}

function goToStep3() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    
    // Hide No button on step 3
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "none";
    }
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => triggerConfetti(), i * 100);
    }
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHearts(), i * 40);
    }
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    
    // Hide No button on final step
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "none";
    }
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 100);
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8']
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hide No button initially (only show on step 2)
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "none";
    }
});
