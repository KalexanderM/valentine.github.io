// Create hearts effect - PERFECT BALANCE version
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    // Balanced heart count (5-9 hearts)
    const heartCount = Math.floor(Math.random() * 5) + 5; // 5 to 9 hearts
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            
            heart.style.left = Math.random() * 100 + '%';
            
            // Good size range (8-50px)
            heart.style.fontSize = (Math.random() * 42 + 8) + 'px';
            
            // Medium animation speeds (2-7 seconds)
            heart.style.animationDuration = (Math.random() * 5 + 2) + 's';
            
            // Nice color variety
            const colors = [
                '#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', 
                '#ff69b4', '#ff1493', '#ff007f', '#ff4d4d',
                '#ff3366', '#ff3399'
            ];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Mix of starting positions
            if (Math.random() > 0.7) {
                heart.style.top = '0';
            } else {
                heart.style.bottom = '0';
            }
            
            // Good opacity
            heart.style.opacity = Math.random() * 0.6 + 0.4;
            
            // Moderate rotation
            heart.style.transform = `rotate(${Math.random() * 180 - 90}deg)`;
            
            hearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 9000);
        }, i * 40);
    }
}

// Start hearts with GOOD intervals
document.addEventListener('DOMContentLoaded', () => {
    // 3 balanced intervals
    setInterval(createHearts, 200);
    setInterval(createHearts, 350);
    setInterval(createHearts, 500);
    
    // Nice heart bursts (35 hearts every 4 seconds)
    setInterval(() => {
        for (let i = 0; i < 35; i++) {
            setTimeout(() => {
                createSingleHeart();
            }, i * 15);
        }
    }, 4000);
    
    // Continuous gentle stream
    setInterval(() => {
        createSingleHeart();
    }, 150);
});

// Helper function for single heart
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

// BALANCED button movement - good speed, good range
function moveButton(button) {
    const container = button.parentElement;
    
    container.style.position = "relative";
    container.style.overflow = "visible";
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // Good movement range (full screen but reasonable)
    const maxX = viewportWidth - buttonWidth - containerRect.left + 350;
    const maxY = viewportHeight - buttonHeight - containerRect.top + 350;
    const minX = -300;
    const minY = -300;
    
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    // GOOD speed (0.12s - noticeable but still quick)
    button.style.transition = "all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    
    // Nice rotation
    button.style.transform = `rotate(${Math.random() * 15 - 7.5}deg) scale(${Math.random() * 0.2 + 0.9})`;
    
    // Good variety of messages
    const funnyMessages = [
        "Missed me! 😜", "Too slow! 🏃", "Catch me! 🦋", "Nope! 🙈", 
        "Try again! 😋", "Almost! 💫", "Not today! ✨", "Zoom! ⚡",
        "Poof! 🦋", "Whoosh! 💨", "Boing! 🌟", "Bye bye! 🎈",
        "So close! 😛", "Good try! 👋"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    // Nice colors
    const colors = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ff69b4', '#ff4d4d'];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.border = `1px solid white`;
    
    setTimeout(() => {
        button.textContent = "No 😢";
        button.style.backgroundColor = "#333";
        button.style.transform = "rotate(0deg) scale(1)";
        button.style.border = "none";
    }, 450);
    
    // Moderate confetti at new location
    const buttonRect = button.getBoundingClientRect();
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 15,
                spread: 60,
                origin: { 
                    x: Math.min(1, Math.max(0, (buttonRect.left + buttonWidth/2) / viewportWidth)),
                    y: Math.min(1, Math.max(0, (buttonRect.top + buttonHeight/2) / viewportHeight))
                },
                colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff69b4'],
                startVelocity: 30
            });
        }, i * 60);
    }
    
    // Good amount of hearts where button was
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createHeartAtPosition(
                buttonRect.left + (Math.random() * 150 - 75), 
                buttonRect.top + (Math.random() * 150 - 75)
            );
        }, i * 60);
    }
}

// Create heart at position (nice version)
function createHeartAtPosition(x, y) {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    for (let h = 0; h < 2; h++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            heart.style.left = ((x + (Math.random() * 80 - 40)) / window.innerWidth * 100) + '%';
            heart.style.top = ((y + (Math.random() * 80 - 40)) / window.innerHeight * 100) + '%';
            heart.style.fontSize = (Math.random() * 25 + 10) + 'px';
            heart.style.position = 'fixed';
            heart.style.animation = `float ${Math.random() * 2.5 + 2}s linear forwards`;
            heart.style.color = ['#ff4757', '#ff6b6b', '#ff69b4'][Math.floor(Math.random() * 3)];
            hearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 4000);
        }, h * 80);
    }
}

// Balanced button triggers
function makeNoButtonPerfect() {
    const noButton = document.querySelector('.btn-no');
    if (!noButton) return;
    
    // Main triggers
    const events = ['mouseenter', 'click', 'touchstart', 'mouseover'];
    
    events.forEach(eventType => {
        noButton.addEventListener(eventType, function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Move 3 times - good balance
            moveButton(this);
            setTimeout(() => moveButton(this), 40);
            setTimeout(() => moveButton(this), 80);
            
            // Nice confetti
            triggerConfetti();
            
            // Good amount of hearts
            for (let i = 0; i < 12; i++) {
                setTimeout(() => createHearts(), i * 20);
            }
        });
    });
    
    // Move automatically every 1.2 seconds
    setInterval(() => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    }, 1200);
    
    // Balanced proximity detection (700px)
    document.addEventListener('mousemove', function(e) {
        if (!document.getElementById('step2').classList.contains('active')) return;
        
        const buttonRect = noButton.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (buttonRect.left + buttonRect.width/2), 2) +
            Math.pow(e.clientY - (buttonRect.top + buttonRect.height/2), 2)
        );
        
        if (distance < 700 && Math.random() < 0.4) {
            moveButton(noButton);
        }
    });
}

// Navigation functions with balanced celebration
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => triggerConfetti(), i * 80);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHearts(), i * 20);
    }
    
    setTimeout(() => {
        makeNoButtonPerfect();
    }, 100);
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => triggerConfetti(), i * 80);
    }
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createHearts(), i * 30);
    }
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 80);
    }
    
    let count = 0;
    const interval = setInterval(() => {
        triggerConfetti();
        createHearts();
        count++;
        if (count > 15) clearInterval(interval);
    }, 180);
}

function triggerConfetti() {
    confetti({
        particleCount: 60,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff69b4']
    });
}
