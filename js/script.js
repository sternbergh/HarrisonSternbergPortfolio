
// Tab switching (already included)
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Show selected tab
    document.getElementById(tabId).style.display = 'block';

    // Re-run typewriter only if project tab selected
    if (tabId === "project") {
      runTypewriter();
    }
  });
});

// Effect 1: Toggle visibility of extra info
document.getElementById('toggle-box-btn').addEventListener('click', () => {
  const box = document.getElementById('toggle-box');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
});

// Effect 2: Slide toggle text section
document.getElementById('slide-toggle-btn').addEventListener('click', () => {
  const slideBox = document.getElementById('slide-box');
  slideBox.classList.toggle('open');
});

// Effect 3: Rotate image on click
document.querySelector('.effect-image').addEventListener('click', () => {
  const img = document.querySelector('.effect-image');
  img.classList.toggle('rotated');
});

// Effect 4: Typewriter effect
const typewriterText = "Welcome to my project tab!";
let typeIndex = 0;

function runTypewriter() {
  const el = document.getElementById("typewriter-text");
  el.textContent = "";
  typeIndex = 0;
  el.style.width = "0";

  function type() {
    if (typeIndex < typewriterText.length) {
      el.textContent += typewriterText.charAt(typeIndex);
      typeIndex++;
      el.style.width = `${typeIndex}ch`;
      setTimeout(type, 100);
    }
  }

  type();
}

// Optional: Run typewriter on load
window.addEventListener("DOMContentLoaded", runTypewriter);
