// Video loading handler
const video = document.querySelector('.showcase video');
const videoLoader = document.querySelector('.video-loader');

if (video && videoLoader) {
  // Hide loader when video starts playing
  video.addEventListener('play', () => {
    videoLoader.classList.add('loaded');
  }, { once: true });

  // Show loader if video takes too long (fallback)
  setTimeout(() => {
    if (videoLoader && !videoLoader.classList.contains('loaded')) {
      videoLoader.style.opacity = '0.5';
    }
  }, 5000);

  // Handle video errors gracefully
  video.addEventListener('error', () => {
    if (videoLoader) {
      videoLoader.innerHTML = '<p>Video could not be loaded. Please try refreshing the page.</p>';
      videoLoader.style.opacity = '1';
    }
  });
}

// Menu toggle functionality
const toggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Toggle menu on button click
toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  toggle.classList.toggle('active');
  showcase.classList.toggle('active');
  menu.classList.toggle('active');
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only close menu on actual navigation (not hash links)
    toggle.classList.remove('active');
    showcase.classList.remove('active');
    menu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  // Don't close if clicking on toggle button
  if (e.target.closest('.toggle')) return;
  
  // Close if menu is open and clicking outside
  if (toggle.classList.contains('active')) {
    if (!e.target.closest('.menu') && !e.target.closest('.showcase header')) {
      toggle.classList.remove('active');
      showcase.classList.remove('active');
      menu.classList.remove('active');
    }
  }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.classList.contains('active')) {
    toggle.classList.remove('active');
    showcase.classList.remove('active');
    menu.classList.remove('active');
  }
});

// Improve accessibility for toggle button
toggle.setAttribute('role', 'button');
toggle.setAttribute('tabindex', '0');
toggle.setAttribute('aria-label', 'Toggle navigation menu');

// Allow space/enter key to toggle menu
toggle.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    toggle.click();
  }
});
