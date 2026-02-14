// Create hearts effect - NOW WITH MASSIVE HEART OVERLOAD!
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return;
    
    // Create a TORRENT of hearts (8-15 hearts per call!)
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
            
            // Random starting position (top, bottom, left, right - full chaos!)
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
            
            // Random opacity (0.3 to 1.0)
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            
            // Random rotation (0-720 degrees!)
            heart.style.transform = `rotate(${Math.random() * 720}deg)`;
            
            // Random blur for dreamy effect (sometimes)
            if (Math.random() > 0.7) {
                heart.style.filter = `blur(${Math.random() * 3}px)`;
            }
            
            hearts.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 12000); // 12 seconds max
        }, i * 30); // Stagger hearts closely for waterfall effect
    }
}

// Start hearts with MULTIPLE INTERVALS for HEART APOCALYPSE!
document.addEventListener('DOMContentLoaded', () => {
    // Run heart creation CONSTANTLY
    setInterval(createHearts, 100); // Every 100ms
    setInterval(createHearts, 150); // Every 150ms
    setInterval(createHearts, 200); // Every 200ms
    setInterval(createHearts, 250); // Every 250ms
    setInterval(createHearts, 300); // Every 300ms
    
    // Add MASSIVE heart bursts every 2 seconds
    setInterval(() => {
        // Create an EXPLOSION of hearts (30-50 at once!)
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createSingleHeart();
            }, i * 10);
        }
    }, 2000); // Every 2 seconds
    
    // Continuous heart stream
    setInterval(() => {
        createSingleHeart();
    }, 50);
});

// Helper function to create a single heart (for continuous streams)
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

// ULTIMATE VERSION: LIGHTNING FAST + FULL SCREEN FREEDOM!
function moveButton(button) {
    const container = button.parentElement;
    
    // Remove all constraints - let it roam FREE!
    container.style.position = "relative";
    container.style.overflow = "visible";
    document.body.style.overflow = "visible"; // Allow page to expand if needed
    
    // Get FULL SCREEN dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // ABSOLUTE FULL SCREEN FREEDOM - Can go ANYWHERE!
    // Positive direction - as far as the screen allows
    const maxX = viewportWidth - buttonWidth - containerRect.left + 500; // Can go 500px beyond right edge!
    const maxY = viewportHeight - buttonHeight - containerRect.top + 500; // Can go 500px beyond bottom!
    
    // Negative direction - as far left/up as needed
    const minX = -viewportWidth + buttonWidth + 500; // Can go WAY left!
    const minY = -viewportHeight + buttonHeight + 500; // Can go WAY up!
    
    // TRULY RANDOM position - ANYWHERE in the universe!
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    // LIGHTNING FAST movement - instant teleportation!
    button.style.transition = "all 0.03s linear"; // SUPER FAST - 30 milliseconds!
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.zIndex = "9999"; // Always on top
    
    // WILD rotations and transformations
    button.style.transform = `rotate(${Math.random() * 360 - 180}deg) scale(${Math.random() * 1.5 + 0.5}) skew(${Math.random() * 20 - 10}deg)`;
    
    // FUNNY MESSAGES - EVEN MORE!
    const funnyMessages = [
        "Missed me! 😜", "Too slow! 🏃", "Catch me! 🦋", "Nope! 🙈", "Try again! 😋",
        "Almost! 💫", "Not today! ✨", "😜 Too slow!", "🏃 Gone!", "⚡ Zoom!",
        "🦋 Poof!", "✨ Missed me!", "🎯 Nope!", "💨 Whoosh!", "🎪 Catch me!",
        "🌟 Boing!", "🎈 Bye bye!", "You can't! 🏃‍♂️", "So close! 😛", "Maybe later! ⏰",
        "Never! 😝", "Good try! 👋", "🏎️ VROOM!", "🚀 To the moon!", "🌍 Around the world!",
        "⚡ Lightning speed!", "🌀 Tornado mode!", "🎢 Wheee!", "🪄 Magic!", "👻 Ghost mode!",
        "💨 Gone with the wind!", "🌪️ Super fast!", "📡 Can't catch me!", "🎯 Missed again!",
        "🔮 Now you see me...", "💫 Poof! Gone!", "✨ Abracadabra!", "🦅 Soaring away!"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    // CRAZY RANDOM COLORS
    const colors = [
        '#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ff6b4a', '#ff4d4d', '#ff3333',
        '#ff1744', '#ff0055', '#ff00aa', '#ff44aa', '#ff5577', '#ff6677', '#ff7777',
        '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00'
    ];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.border = `2px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
    button.style.boxShadow = '0 0 20px rgba(255,0,0,0.8)';
    
    // Reset button after a moment
    setTimeout(() => {
        button.textContent = "No 😢";
        button.style.backgroundColor = "#333";
        button.style.transform = "rotate(0deg) scale(1) skew(0deg)";
        button.style.border = "none";
        button.style.boxShadow = "none";
    }, 400);
    
    // MASSIVE CONFETTI BURST at new location
    const buttonRect = button.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 90,
                origin: { 
                    x: Math.min(1, Math.max(0, (buttonRect.left + buttonWidth/2) / viewportWidth)),
                    y: Math.min(1, Math.max(0, (buttonRect.top + buttonHeight/2) / viewportHeight))
                },
                colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#6b5b95', '#ff4757'],
                startVelocity: 40,
                decay: 0.9
            });
        }, i * 50);
    }
    
    // Create HEART EXPLOSION where button was
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeartAtPosition(
                buttonRect.left + (Math.random() * 200 - 100), 
                buttonRect.top + (Math.random() * 200 - 100)
            );
        }, i * 30);
    }
    
    // Make the whole screen flash sometimes
    if (Math.random() > 0.7) {
        document.body.style.backgroundColor = 'rgba(255, 107, 107, 0.3)';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 100);
    }
}

// Create heart at specific position with VARIETY
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
            heart.style.animation = `float ${Math.random() * 3 + 1}s linear forwards`;
            heart.style.color = ['#ff4757', '#ff6b6b', '#ff8e8e', '#ff69b4'][Math.floor(Math.random() * 4)];
            hearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 4000);
        }, h * 100);
    }
}

// ULTIMATE button with ALL triggers + FULL SCREEN CHAOS
function makeNoButtonUltimate() {
    const noButton = document.querySelector('.btn-no');
    if (!noButton) return;
    
    // ALL possible triggers - EVERY interaction!
    const events = [
        'mouseenter', 'mouseover', 'mousemove', 
        'click', 'touchstart', 'touchmove', 'touchend',
        'focus', 'mouseleave', 'mouseout', 'dblclick',
        'contextmenu', 'wheel', 'mouseup', 'mousedown'
    ];
    
    events.forEach(eventType => {
        noButton.addEventListener(eventType, function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Move MULTIPLE times for MAXIMUM CHAOS
            moveButton(this);
            setTimeout(() => moveButton(this), 10);
            setTimeout(() => moveButton(this), 20);
            setTimeout(() => moveButton(this), 30);
            setTimeout(() => moveButton(this), 40);
            setTimeout(() => moveButton(this), 50);
            
            // MASSIVE confetti
            for (let i = 0; i < 5; i++) {
                setTimeout(() => triggerConfetti(), i * 50);
            }
            
            // Create HEART TORRENT
            for (let i = 0; i < 30; i++) {
                setTimeout(() => createHearts(), i * 10);
            }
        });
    });
    
    // Move automatically EVERY 300 MILLISECONDS!
    setInterval(() => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    }, 300);
    
    // PROXIMITY DETECTION - Moves when mouse is ANYWHERE near (1000px range!)
    document.addEventListener('mousemove', function(e) {
        if (!document.getElementById('step2').classList.contains('active')) return;
        
        const buttonRect = noButton.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (buttonRect.left + buttonRect.width/2), 2) +
            Math.pow(e.clientY - (buttonRect.top + buttonRect.height/2), 2)
        );
        
        // Move if mouse within 1000px (basically always!)
        if (distance < 1000 && Math.random() < 0.6) {
            moveButton(noButton);
            
            // Add hearts when mouse gets close
            if (Math.random() < 0.5) {
                createHearts();
            }
        }
    });
    
    // Move on ANY page interaction
    window.addEventListener('scroll', () => {
        if (document.getElementById('step2').classList.contains('active')) {
            if (Math.random() < 0.5) moveButton(noButton);
        }
    });
    
    document.addEventListener('keydown', () => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    });
    
    document.addEventListener('keyup', () => {
        if (document.getElementById('step2').classList.contains('active')) {
            moveButton(noButton);
        }
    });
}

// Navigation functions with MAXIMUM CELEBRATION
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    
    // MASSIVE confetti celebration
    for (let i = 0; i < 20; i++) {
        setTimeout(() => triggerConfetti(), i * 50);
    }
    
    // Create HUNDREDS of hearts!
    for (let i = 0; i < 100; i++) {
        setTimeout(() => createHearts(), i * 10);
    }
    
    // Activate ultimate No button
    setTimeout(() => {
        makeNoButtonUltimate();
    }, 100);
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    
    // Celebration with HEARTS and CONFETTI
    for (let i = 0; i < 15; i++) {
        setTimeout(() => triggerConfetti(), i * 70);
    }
    
    // Heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createHearts(), i * 20);
    }
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.facebook-btn').style.display = 'inline-block';
    
    // ULTIMATE final celebration
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            triggerConfetti();
            createHearts();
        }, i * 30);
    }
    
    // Continuous confetti and hearts for 10 seconds
    let count = 0;
    const interval = setInterval(() => {
        triggerConfetti();
        for (let h = 0; h < 5; h++) {
            createHearts();
        }
        count++;
        if (count > 50) clearInterval(interval);
    }, 100);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#6b5b95', '#ff9f1c', '#ff69b4']
    });
    
    // Random side confetti MULTIPLE TIMES
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: Math.random() * 360,
                spread: 70,
                origin: { x: Math.random(), y: Math.random() * 0.8 },
                colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffd93d', '#ff69b4']
            });
        }, i * 50);
    }
}

// Keep button moving even on resize
window.addEventListener('resize', () => {
    const noButton = document.querySelector('.btn-no');
    if (noButton && document.getElementById('step2').classList.contains('active')) {
        moveButton(noButton);
        moveButton(noButton); // Move twice for good measure!
    }
});
