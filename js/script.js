// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 5000);
}

// Start hearts when page loads
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createHearts, 300);
});

// ULTIMATE VERSION: Super fast + All fun features!
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
    
    // ADDED: Create a heart where button was
    createHeartAtPosition(buttonRect.left, buttonRect.top);
}

// NEW: Create heart at specific position
function createHeartAtPosition(x, y) {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = (x / window.innerWidth * 100) + '%';
    heart.style.top = (y / window.innerHeight * 100) + '%';
    heart.style.fontSize = '25px';
    heart.style.position = 'fixed';
    heart.style.animation = 'float 2s linear forwards';
    heart.style.color = '#ff4757';
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
            
            // Create multiple hearts
            for (let i = 0; i < 3; i++) {
                setTimeout(() => createHearts(), i * 50);
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
    
    // Create many hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createHearts(), i * 50);
    }
    
    // Activate ultimate No button
    setTimeout(() => {
        makeNoButtonUltimate();
    }, 100);
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    
    // Celebration
    for (let i = 0; i < 8; i++) {
        setTimeout(() => triggerConfetti(), i * 150);
    }
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    
    // MASSIVE final celebration
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 100);
    }
    
    // Continuous confetti for 3 seconds
    let count = 0;
    const interval = setInterval(() => {
        triggerConfetti();
        count++;
        if (count > 15) clearInterval(interval);
    }, 200);
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
