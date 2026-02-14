// Create hearts effect - FULL VERSION with all features!
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    // Create multiple hearts (8-15 hearts per call)
    const heartCount = Math.floor(Math.random() * 8) + 8; // 8 to 15 hearts
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            
            // Random position across entire screen
            heart.style.left = Math.random() * 100 + '%';
            
            // HUGE variety in sizes (5-80px)
            heart.style.fontSize = (Math.random() * 75 + 5) + 'px';
            
            // Random animation speeds (1-12 seconds)
            heart.style.animationDuration = (Math.random() * 11 + 1) + 's';
            
            // RAINBOW of heart colors
            const colors = [
                '#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', 
                '#ff69b4', '#ff1493', '#ff007f', '#ff4d4d', 
                '#ff3333', '#ff1a1a', '#ff3366', '#ff3399',
                '#ff00ff', '#ff44aa', '#ff5577', '#ff6677',
                '#ff7777', '#ff8888', '#ff9999', '#ffaaaa'
            ];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random starting position (top, bottom, left, right)
            const startPosition = Math.random();
            if (startPosition < 0.25) {
                heart.style.bottom = '0';
                heart.style.left = Math.random() * 100 + '%';
            } else if (startPosition < 0.5) {
                heart.style.top = '0';
                heart.style.left = Math.random() * 100 + '%';
            } else if (startPosition < 0.75) {
                heart.style.left = '0';
                heart.style.top = Math.random() * 100 + '%';
            } else {
                heart.style.right = '0';
                heart.style.top = Math.random() * 100 + '%';
            }
            
            // Random opacity
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            
            // Random rotation
            heart.style.transform = `rotate(${Math.random() * 720}deg)`;
            
            // Random blur for dreamy effect
            if (Math.random() > 0.7) {
                heart.style.filter = `blur(${Math.random() * 3}px)`;
            }
            
            hearts.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 12000);
        }, i * 30);
    }
}

// Start hearts with MULTIPLE INTERVALS
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createHearts, 100);
    setInterval(createHearts, 200);
    setInterval(createHearts, 300);
    setInterval(createHearts, 400);
    
    // Add MASSIVE heart bursts every 3 seconds
    setInterval(() => {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createSingleHeart();
            }, i * 15);
        }
    }, 3000);
    
    // Continuous heart stream
    setInterval(() => {
        createSingleHeart();
    }, 80);
});

// Helper function to create a single heart
function createSingleHeart() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 40 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 7 + 2) + 's';
    heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff69b4'][Math.floor(Math.random() * 5)];
    heart.style.opacity = Math.random() * 0.9 + 0.1;
    hearts.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 7000);
}

// FIXED: Button stays VISIBLE on screen but still fun!
function moveButton(button) {
    const container = button.parentElement;
    
    container.style.position = "relative";
    container.style.overflow = "visible";
    
    // Get container boundaries
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // KEEP BUTTON VISIBLE - within container with padding
    const padding = 10;
    const maxX = Math.max(0, containerRect.width - buttonWidth - padding * 2);
    const maxY = Math.max(0, containerRect.height - buttonHeight - padding * 2);
    
    // Still fun movement but within bounds
    const x = Math.random() * maxX + padding;
    const y = Math.random() * maxY + padding;
    
    // FAST movement
    button.style.transition = "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)";
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.zIndex = "9999";
    
    // WILD rotations
    button.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(${Math.random() * 0.4 + 0.8})`;
    
    // MANY funny messages
    const funnyMessages = [
        "Missed me! 😜", "Too slow! 🏃", "Catch me! 🦋", "Nope! 🙈", 
        "Try again! 😋", "Almost! 💫", "Not today! ✨", "😜 Too slow!",
        "🏃 Gone!", "⚡ Zoom!", "🦋 Poof!", "✨ Missed me!",
        "🎯 Nope!", "💨 Whoosh!", "🎪 Catch me!", "🌟 Boing!",
        "🎈 Bye bye!", "You can't! 🏃‍♂️", "So close! 😛", "Maybe later! ⏰",
        "Never! 😝", "Good try! 👋", "🏎️ VROOM!", "🚀 To the moon!",
        "⚡ Lightning!", "🌀 Tornado!", "🎢 Wheee!", "🪄 Magic!",
        "👻 Ghost mode!", "💨 Gone with wind!"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    // RANDOM COLORS
    const colors = [
        '#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff6b4a', 
        '#ff4d4d', '#ff3333', '#ff1744', '#ff0055', '#ff44aa'
    ];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.border = `2px solid white`;
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
    button.style.boxShadow = '0 0 15px rgba(255,0,0,0.5)';
    
    // Reset button after a moment
    setTimeout(() => {
        button.textContent = "No 😢";
        button.style.backgroundColor = "#333";
        button.style.transform = "rotate(0deg) scale(1)";
        button.style.border = "none";
        button.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    }, 500);
    
    // CONFETTI BURST at new location
    const buttonRect = button.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 20,
                spread: 70,
                origin: { 
                    x: Math.min(1, Math.max(0, (buttonRect.left + buttonWidth/2) / window.innerWidth)),
                    y: Math.min(1, Math.max(0, (buttonRect.top + buttonHeight/2) / window.innerHeight))
                },
                colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#ff69b4'],
                startVelocity: 35
            });
        }, i * 50);
    }
    
    // Create HEARTS where button was
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createHeartAtPosition(
                buttonRect.left + (Math.random() * 150 - 75), 
                buttonRect.top + (Math.random() * 150 - 75)
            );
        }, i * 40);
    }
}

// Create heart at specific position
function createHeartAtPosition(x, y) {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    for (let h = 0; h < 3; h++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            heart.style.left = ((x + (Math.random() * 100 - 50)) / window.innerWidth * 100) + '%';
            heart.style.top = ((y + (Math.random() * 100 - 50)) / window.innerHeight * 100) + '%';
            heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
            heart.style.position = 'fixed';
            heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
            heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ff69b4'][Math.floor(Math.random() * 4)];
            hearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 4000);
        }, h * 80);
    }
}

// FIXED: Button only on Step 2 but with ALL triggers
function makeNoButtonUltimate() {
    const noButton = document.querySelector('.btn-no');
    if (!noButton) return;
    
    // Reset position
    noButton.style.position = "relative";
    noButton.style.left = "0";
    noButton.style.top = "0";
    noButton.style.transform = "rotate(0deg)";
    noButton.style.backgroundColor = "#333";
    noButton.textContent = "No 😢";
    noButton.style.display = "inline-block";
    
    // ALL triggers
    const events = ['mouseenter', 'mouseover', 'click', 'touchstart', 'dblclick'];
    
    events.forEach(eventType => {
        noButton.addEventListener(eventType, function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Move multiple times
            moveButton(this);
            setTimeout(() => moveButton(this), 50);
            setTimeout(() => moveButton(this), 100);
            
            // Confetti burst
            for (let i = 0; i < 3; i++) {
                setTimeout(() => triggerConfetti(), i * 70);
            }
            
            // Heart explosion
            for (let i = 0; i < 20; i++) {
                setTimeout(() => createHearts(), i * 15);
            }
        });
    });
    
    // Move automatically
    setInterval(() => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    }, 800);
    
    // Proximity detection
    document.addEventListener('mousemove', function(e) {
        if (!document.getElementById('step2').classList.contains('active')) return;
        
        const buttonRect = noButton.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (buttonRect.left + buttonRect.width/2), 2) +
            Math.pow(e.clientY - (buttonRect.top + buttonRect.height/2), 2)
        );
        
        if (distance < 400 && Math.random() < 0.3) {
            moveButton(noButton);
        }
    });
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.remove('active');
    
    // Show and reset No button
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "inline-block";
        noButton.style.position = "relative";
        noButton.style.left = "0";
        noButton.style.top = "0";
        noButton.style.transform = "rotate(0deg)";
    }
    
    // Celebration
    for (let i = 0; i < 10; i++) {
        setTimeout(() => triggerConfetti(), i * 70);
    }
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => createHearts(), i * 15);
    }
    
    setTimeout(() => {
        makeNoButtonUltimate();
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
    
    // Celebration
    for (let i = 0; i < 8; i++) {
        setTimeout(() => triggerConfetti(), i * 80);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHearts(), i * 20);
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
    
    // MASSIVE final celebration
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 70);
    }
    
    // Continuous celebration
    let count = 0;
    const interval = setInterval(() => {
        triggerConfetti();
        createHearts();
        count++;
        if (count > 15) clearInterval(interval);
    }, 150);
}

function triggerConfetti() {
    confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#ff69b4']
    });
    
    // Side confetti
    confetti({
        particleCount: 30,
        angle: Math.random() * 360,
        spread: 50,
        origin: { x: Math.random(), y: Math.random() * 0.7 },
        colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8']
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide No button initially
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        noButton.style.display = "none";
    }
});
