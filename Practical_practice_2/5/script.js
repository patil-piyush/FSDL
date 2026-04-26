const btn = document.getElementById("toggleBtn");

// Load saved theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.className = savedTheme;
} else {
    document.body.className = "light";
}

// Toggle theme
btn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.className = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.className = "light";
        localStorage.setItem("theme", "light");
    }
});