// =====================
// Tab Navigation
// =====================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    // Hide all tabs
    tabContents.forEach(content => {
      content.style.display = "none";
    });

    // Show selected tab
    document.getElementById(target).style.display = "block";
  });
});

// =====================
// Typewriter Effect
// =====================
const typewriterText = document.getElementById("typewriter-text");
if (typewriterText) {
  const text = "This is a typewriter effect typing out text dynamically.";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 80); // typing speed
    }
  }

  typeWriter();
}

// =====================
// Toggle Extra Info
// =====================
const toggleBtn = document.getElementById("toggle-box-btn");
const toggleBox = document.getElementById("toggle-box");

if (toggleBtn && toggleBox) {
  toggleBtn.addEventListener("click", () => {
    toggleBox.classList.toggle("hidden-box");
  });
}

// =====================
// Hover to Change Color
// =====================
const colorChangeBtn = document.getElementById("color-change-btn");
if (colorChangeBtn) {
  colorChangeBtn.addEventListener("mouseenter", () => {
    colorChangeBtn.style.backgroundColor = "lightgreen";
  });
  colorChangeBtn.addEventListener("mouseleave", () => {
    colorChangeBtn.style.backgroundColor = "";
  });
}

// =====================
// Slide Toggle Text
// =====================
const slideToggleBtn = document.getElementById("slide-toggle-btn");
const slideBox = document.getElementById("slide-box");

if (slideToggleBtn && slideBox) {
  slideToggleBtn.addEventListener("click", () => {
    if (slideBox.style.maxHeight) {
      // Hide
      slideBox.style.maxHeight = null;
    } else {
      // Show
      slideBox.style.maxHeight = slideBox.scrollHeight + "px";
    }
  });
}
