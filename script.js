  const texts = [
    "Tech Enthusiast",
    "Aspiring Developer",
    "UI/UX Learner",
    "Web Explorer",
    "Code Lover",
    "Problem Solver",
    "Open Source Learner"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const typingText = document.getElementById("typing-text");

  function typeText() {
    if (charIndex < texts[textIndex].length) {
      typingText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 0); 
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
  });
