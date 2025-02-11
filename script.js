const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const yesScreen = document.getElementById("yesScreen");

// Function to move the No button to a random position
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Move the button on touch (for mobile) and mouseover (for desktop)
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

// Show the "Yes" screen when they accept
yesBtn.addEventListener("click", function () {
    container.classList.add("hidden");
    yesScreen.classList.remove("hidden");
});
