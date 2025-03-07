document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");

    if (noButton) {
        noButton.addEventListener("mouseover", moveNoButton);
    }
});

function moveNoButton() {
    const noButton = document.getElementById("no-btn");
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    
    setTimeout(() => {
        noButton.style.display = "none";
    }, 5000);
}

function showMessage() {
    document.getElementById("response-message").classList.remove("hidden");
}
