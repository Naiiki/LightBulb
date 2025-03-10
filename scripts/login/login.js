// Get the checkbox element
const darkModeToggle = document.getElementById("dark-mode");

// Function to set theme based on checkbox
function setTheme() {
  if (darkModeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark"); // Set to light theme
    localStorage.setItem("theme", "dark"); // Save preference to localStorage
  } else {
    document.documentElement.setAttribute("data-theme", "light"); // Set to dark theme
    localStorage.setItem("theme", "light"); // Save preference to localStorage
  }
}

// Load the theme preference from localStorage on page load
if (localStorage.getItem("theme") === "light") {
  darkModeToggle.checked = true; // Set checkbox to checked
  document.documentElement.setAttribute("data-theme", "dark"); // Apply light theme
} else {
  document.documentElement.setAttribute("data-theme", "light"); // Default to dark theme
}

// Add event listener to toggle theme on checkbox change
darkModeToggle.addEventListener("change", setTheme);
