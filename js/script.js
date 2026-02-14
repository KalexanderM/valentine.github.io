// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');
    if (!hearts) return; // Add safety check
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    // FIXED: Changed from 1000vw to 100% to stay within screen
    heart.style.left = Math.random() * 100 + '%';
    
    // Add random size for variety
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    // Random animation duration
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

// IMPROVED: Move "No" button function with proper screen boundaries
function moveButton(button) {
    const container = button.parentElement;
    
    // Make sure the container can position children
    container.style.position = "relative";
    container.style.overflow = "visible"; // Allow button to move freely
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get container and button dimensions
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // Calculate the maximum positions while keeping button within viewport
    // and within container boundaries
    const maxX = Math.min(
        containerRect.width - buttonWidth, // Container boundary
        300 // Max 300px movement from original position
    );
    
    const maxY = Math.min(
        containerRect.height - buttonHeight, // Container boundary
        150 // Max 150px movement from original position
    );
    
    // Ensure we don't go into negative positions
    const minX = 0;
    const minY = 0;
    
    // Generate random position within boundaries
    const x = Math.max(minX, Math.min(Math.random() * maxX, maxX));
    const y = Math.max(minY, Math.min(Math.random() * maxY, maxY));
    
    // Apply position
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.transition = "all 0.3s ease"; // Smooth movement
    
    // ADDED: Fun interaction - change button text temporarily
    const originalText = button.textContent;
    const funnyMessages = [
        "Missed me! 😜",
        "Too slow! 🏃",
        "Catch me! 🦋",
        "Nope! 🙈",
        "Try again! 😋",
        "Almost! 💫",
        "Not today! ✨"
    ];
    
    button.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    button.style.backgroundColor = "#ff6b6b"; // Change color temporarily
    
    // Reset button text after 1 second
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = ""; // Reset to original color
    }, 800);
    
    // ADDED: Create small confetti pop when button moves
    confetti({
        particleCount: 20,
        spread: 30,
        origin: { 
            x: (button.getBoundingClientRect().left + buttonWidth/2) / viewportWidth,
            y: (button.getBoundingClientRect().top + buttonHeight/2) / viewportHeight
        },
        colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8'],
        startVelocity: 20,
        decay: 0.9
    });
}

// ADDED: Make No button extra playful - move on click too
function makeNoButtonPlayful() {
    const noButton = document.querySelector('.btn-no');
    if (noButton) {
        // Move on hover
        noButton.addEventListener('mouseenter', function(e) {
            moveButton(this);
        });
        
        // Move on click too
        noButton.addEventListener('click', function(e) {
            e.preventDefault();
            moveButton(this);
            
            // ADDED: Extra confetti on click
            triggerConfetti();
            
            // ADDED: Funny alert (optional - comment out if too annoying)
            // setTimeout(() => {
            //     alert("Nice try! But you know you want to say Yes! 😘");
            // }, 100);
        });
        
        // ADDED: Move when mouse gets close (fun effect)
        noButton.addEventListener('mousemove', function(e) {
            // Only move sometimes to avoid too much movement
            if (Math.random() < 0.1) { // 10% chance to move on mousemove
                moveButton(this);
            }
        });
    }
}

// ADDED: Function to keep button within bounds on window resize
function keepButtonInBounds() {
    const noButton = document.querySelector('.btn-no');
    if (noButton && noButton.style.position === 'absolute') {
        const container = noButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        // Get current position
        let currentLeft = parseFloat(noButton.style.left) || 0;
        let currentTop = parseFloat(noButton.style.top) || 0;
        
        // Adjust if out of bounds
        currentLeft = Math.min(currentLeft, containerRect.width - buttonWidth);
        currentTop = Math.min(currentTop, containerRect.height - buttonHeight);
        
        currentLeft = Math.max(0, currentLeft);
        currentTop = Math.max(0, currentTop);
        
        noButton.style.left = currentLeft + 'px';
        noButton.style.top = currentTop + 'px';
    }
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
    
    // Initialize playful No button when step 2 becomes active
    setTimeout(() => {
        makeNoButtonPlayful();
    }, 100);
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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffffff']
    });
    
    // Add side confetti for more effect
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors: ['#ff4757', '#ff6b6b']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors: ['#ff8e8e', '#ffb8b8']
        });
    }, 200);
}

// Listen for window resize to keep button in bounds
window.addEventListener('resize', keepButtonInBounds);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on step 2 initially and setup No button
    if (document.getElementById('step2').classList.contains('active')) {
        makeNoButtonPlayful();
    }
});
