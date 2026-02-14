// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');   // Get the container that will hold hearts
    if (!hearts) return;                                // If it doesn't exist, stop the function

    const heart = document.createElement('div');         // Create a new <div> element
    heart.classList.add('heart');                        // Add class "heart" to it
    heart.innerHTML = '❤';                               // Put a heart symbol inside

    heart.style.left = Math.random() * 100 + 'vw';       // Place it at a random horizontal position
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation time (2–5 seconds)

    hearts.appendChild(heart);                           // Add the heart to the container

    setTimeout(() => heart.remove(), 5000);              // Remove the heart after 5 seconds
}

// Create a new heart every 300 milliseconds
setInterval(createHearts, 300);

// Move "No" button function
function moveButton(button) {
    const maxX = Math.max(0, window.innerWidth - button.offsetWidth);   // Max X position on screen
    const maxY = Math.max(0, window.innerHeight - button.offsetHeight); // Max Y position on screen

    const x = Math.random() * maxX;                      // Random X position
    const y = Math.random() * maxY;                      // Random Y position

    button.style.position = 'absolute';                  // Make button movable freely
    button.style.left = `${x}px`;                        // Set horizontal position
    button.style.top = `${y}px`;                         // Set vertical position
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active'); // Hide step 1
    document.getElementById('step2').classList.add('active');    // Show step 2
    triggerConfetti();                                           // Launch confetti
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active'); // Hide step 2
    document.getElementById('step3').classList.add('active');    // Show step 3
    triggerConfetti();                                           // Launch confetti
}

function finalStep() {
    document.getElementById('step3').classList.remove('active'); // Hide step 3
    document.querySelector('.final-message').style.display = 'block'; // Show final message
    triggerConfetti();                                           // Launch confetti

    // Extra confetti bursts for celebration
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 1000,     // Number of confetti pieces
        spread: 700,             // How wide they spread
        origin: { y: 0.6 }       // Where they start on the screen (height)
    });
}
