const birthdayMessage = "Chúc mừng sinh nhật chị yêu! 🎉🎂";
const messageContainer = document.getElementById("message");
const button = document.getElementById("celebrateButton");

function displayMessage() {
    messageContainer.innerText = birthdayMessage;
    messageContainer.classList.add("fade-in");
}

function celebrate() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

button.addEventListener("click", () => {
    displayMessage();
    celebrate();
});

// Optional: Automatically display the message after a short delay
setTimeout(displayMessage, 1000);