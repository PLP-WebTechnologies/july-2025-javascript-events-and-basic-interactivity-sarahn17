// 🎮 Part 1: Event Handling
document.getElementById("msgBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Button was clicked!";
});

// 🎮 Part 2: Interactive Elements

// Light/Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// FAQ toggle
document.getElementById("faqToggle").addEventListener("click", () => {
  const answer = document.getElementById("faqAnswer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // stop form if invalid

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "") {
    message.textContent = "❌ Name is required.";
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    message.textContent = "❌ Enter a valid email.";
    return;
  }
  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
});
