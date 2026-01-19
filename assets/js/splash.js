// Splash Page Scroll Handler
const splashContainer = document.querySelector('.splash-container');
const scrollArea = document.querySelector('.splash-scroll-area');

// Detect if user is scrolling and auto-navigate
let hasScrolled = false;

window.addEventListener('scroll', () => {
  if (!hasScrolled && window.scrollY > 200) {
    hasScrolled = true;
    // Optionally auto-navigate after scrolling
    // window.location.href = 'index.html';
  }
});

// Add keyboard support - Space/Enter to continue
document.addEventListener('keydown', (e) => {
  if ((e.key === ' ' || e.key === 'Enter') && !hasScrolled) {
    e.preventDefault();
    window.location.href = 'index.html';
  }
});

// Mobile detection for performance optimization
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const video = document.querySelector('.splash-background video');
  if (video) {
    video.style.objectFit = 'cover';
  }
}

// Ensure video loops properly
const video = document.querySelector('.splash-background video');
if (video) {
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });
}
