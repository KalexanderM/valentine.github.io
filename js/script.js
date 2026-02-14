// Create hearts effect - NOW WITH 3X MORE HEARTS!
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    // Create MULTIPLE hearts at once (3-5 hearts per call)
    const heartCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 hearts
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            
            // Random position across entire screen
            heart.style.left = Math.random() * 100 + '%';
            
            // MORE VARIETY in sizes (10-50px)
            heart.style.fontSize = (Math.random() * 40 + 10) + 'px';
            
            // MORE VARIETY in animation speeds (2-8 seconds)
            heart.style.animationDuration = (Math.random() * 6 + 2) + 's';
            
            // MORE VARIETY in colors (pink, red, purple, etc)
            const colors = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff69b4', '#ff1493', '#ff007f', '#ff4d4d', '#ff3333', '#ff1a1a'];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random starting position (sometimes from top, sometimes from bottom)
            if (Math.random() > 0.5) {
                heart.style.bottom = '0';
            } else {
                heart.style.top = '0';
            }
            
            // Random opacity
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            
            // Random rotation
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            hearts.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 8000); // Longer time for bigger hearts
        }, i * 100); // Stagger the hearts a bit
    }
}

// Start hearts with MULTIPLE intervals for MORE HEARTS!
document.addEventListener('DOMContentLoaded', () => {
    // Run heart creation MULTIPLE times per second
    setInterval(createHearts, 200); // Every 200ms (was 300ms)
    setInterval(createHearts, 300); // Every 300ms
    setInterval(createHearts, 400); // Every 400ms
    
    // Add extra heart bursts every few seconds
    setInterval(() => {
        // Create a BURST of hearts (10-15 at once)
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createSingleHeart();
            }, i * 50);
        }
    }, 5000); // Every 5 seconds
});

// Helper function to create a single heart (for bursts)
function createSingleHeart() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 2) + 's';
    heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8'][Math.floor(Math.random() * 4)];
    heart.style.opacity = Math.random() * 0.8 + 0.2;
    hearts.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 5000);
}

// ULTIMATE VERSION: Super fast + All fun features + MORE HEARTS!
function moveButton(button) {
    const container = button.parentElement;
    
    container.style.position = "relative";
    container.style.overflow = "visible";
    
    // Get dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // MAXIMUM FREEDOM - Almost entire screen!
    const maxX = Math.min(
        viewportWidth - buttonWidth - containerRect.left,
        1000 // Can move up to 1000px
    );
    const maxY = Math.min(
        viewportHeight - buttonHeight - containerRect.top,
        800 // Can move up to 800px
    );
    
    // Allow negative movement too
    const minX = -300;
    const minY = -300;
    
    // Random position with FULL FREEDOM
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    // SUPER FAST movement
    button.style.transition = "all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)"; // Bouncy fast!
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    
    // FUN ROTATION EFFECT
    button.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 0.3 + 0.9})`;
    
    // FUNNY MESSAGES (keeping all the original funny messages)
    const funnyMessages = [
        "Missed me! 😜",
        "Too slow! 🏃",
        "Catch me! 🦋",
        "Nope! 🙈",
        "Try again! 😋",
        "Almost! 💫",
        "Not today! ✨",
        "😜 Too slow!",
        "🏃 Gone!",
        "⚡ Zoom!",
        "🦋 Poof!",
        "✨ Missed me!",
        "🎯 Nope!",
        "💨 Whoosh!",
        "🎪 Catch me!",
        "🌟 Boing!",
        "🎈 Bye bye!",
        "You can't! 🏃‍♂️",
        "So close! 😛",
        "Maybe later! ⏰",
        "Never! 😝",
        "Good try! 👋"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    // RANDOM COLORS
    const colors = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff6b4a', '#ff4d4d', '#ff3333'];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Reset button after a moment
    setTimeout(() => {
        button.textContent = "No 😢";
        button.style.backgroundColor = "#333";
        button.style.transform = "rotate(0deg) scale(1)";
    }, 400);
    
    // CONFETTI BURST at new location
    const buttonRect = button.getBoundingClientRect();
    confetti({
        particleCount: 15,
        spread: 60,
        origin: { 
            x: (buttonRect.left + buttonWidth/2) / viewportWidth,
            y: (buttonRect.top + buttonHeight/2) / viewportHeight
        },
        colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#6b5b95', '#ff4757'],
        startVelocity: 30,
        decay: 0.9
    });
    
    // ADDED: Create MULTIPLE hearts where button was
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createHeartAtPosition(buttonRect.left + (Math.random() * 50 - 25), buttonRect.top + (Math.random() * 50 - 25));
        }, i * 50);
    }
}

// Create heart at specific position
function createHeartAtPosition(x, y) {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = (x / window.innerWidth * 100) + '%';
    heart.style.top = (y / window.innerHeight * 100) + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.position = 'fixed';
    heart.style.animation = 'float 2s linear forwards';
    heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e'][Math.floor(Math.random() * 3)];
    hearts.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 2000);
}

// ULTIMATE button with ALL triggers
function makeNoButtonUltimate() {
    const noButton = document.querySelector('.btn-no');
    if (!noButton) return;
    
    // ALL possible triggers
    const events = [
        'mouseenter', 'mouseover', 'mousemove', 
        'click', 'touchstart', 'touchmove',
        'focus', 'mouseleave' // Move when mouse leaves too!
    ];
    
    events.forEach(eventType => {
        noButton.addEventListener(eventType, function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Move multiple times for CHAOS
            moveButton(this);
            setTimeout(() => moveButton(this), 30);
            setTimeout(() => moveButton(this), 60);
            setTimeout(() => moveButton(this), 90);
            
            // EXTRA confetti
            triggerConfetti();
            
            // Create MULTIPLE hearts (10-15 at once!)
            for (let i = 0; i < 15; i++) {
                setTimeout(() => createHearts(), i * 20);
            }
        });
    });
    
    // Move automatically EVERY SECOND
    setInterval(() => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    }, 1000);
    
    // PROXIMITY DETECTION - Moves when mouse gets close
    document.addEventListener('mousemove', function(e) {
        if (!document.getElementById('step2').classList.contains('active')) return;
        
        const buttonRect = noButton.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (buttonRect.left + buttonRect.width/2), 2) +
            Math.pow(e.clientY - (buttonRect.top + buttonRect.height/2), 2)
        );
        
        // Move if mouse within 400px (increased range)
        if (distance < 400 && Math.random() < 0.4) {
            moveButton(noButton);
            
            // Add some hearts when mouse gets close
            if (Math.random() < 0.3) {
                createHearts();
            }
        }
    });
    
    // Move on page scroll
    window.addEventListener('scroll', () => {
        if (document.getElementById('step2').classList.contains('active')) {
            if (Math.random() < 0.3) moveButton(noButton);
        }
    });
    
    // Move on keyboard press (just for fun!)
    document.addEventListener('keydown', () => {
        if (document.getElementById('step2').classList.contains('active')) {
            if (Math.random() < 0.2) moveButton(noButton);
        }
    });
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    
    // MASSIVE confetti celebration
    for (let i = 0; i < 5; i++) {
        setTimeout(() => triggerConfetti(), i * 100);
    }
    
    // Create MANY hearts (30 hearts!)
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHearts(), i * 30);
    }
    
    // Activate ultimate No button
    setTimeout(() => {
        makeNoButtonUltimate();
    }, 100);
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    
    // Celebration with HEARTS
    for (let i = 0; i < 8; i++) {
        setTimeout(() => triggerConfetti(), i * 150);
    }
    
    // Heart explosion
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createHearts(), i * 50);
    }
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    
    // MASSIVE final celebration
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 70);
    }
    
    // Continuous confetti for 5 seconds
    let count = 0;
    const interval = setInterval(() => {
        triggerConfetti();
        createHearts(); // Add hearts too!
        count++;
        if (count > 20) clearInterval(interval);
    }, 150);
}

function triggerConfetti() {
    confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#6b5b95', '#ff9f1c']
    });
    
    // Random side confetti
    confetti({
        particleCount: 40,
        angle: Math.random() * 360,
        spread: 50,
        origin: { x: Math.random(), y: Math.random() * 0.7 },
        colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d']
    });
}

// Keep button in game area but with maximum freedom
window.addEventListener('resize', () => {
    const noButton = document.querySelector('.btn-no');
    if (noButton && document.getElementById('step2').classList.contains('active')) {
        moveButton(noButton); // Give it a fresh position on resize
    }
});
