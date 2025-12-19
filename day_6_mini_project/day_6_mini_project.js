const timeEl = document.getElementById("time");
const tickSound = document.getElementById("tickSound");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;

    if (timeEl) {
        timeEl.textContent = formattedTime;
    }

    if (tickSound) {
        tickSound.currentTime = 0;
        tickSound.play().catch(() => {});
    }
}

updateClock();
setInterval(updateClock, 1000);
