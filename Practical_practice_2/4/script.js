const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const bioInput = document.getElementById("bio");

const pname = document.getElementById("pname");
const pemail = document.getElementById("pemail");
const pbio = document.getElementById("pbio");

// Update in real-time
nameInput.addEventListener("input", () => {
    pname.textContent = nameInput.value || "Your Name";
});

emailInput.addEventListener("input", () => {
    pemail.textContent = emailInput.value || "your@email.com";
});

bioInput.addEventListener("input", () => {
    pbio.textContent = bioInput.value || "Your bio will appear here...";
});