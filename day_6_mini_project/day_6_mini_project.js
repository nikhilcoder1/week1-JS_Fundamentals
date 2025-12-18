const timeEl = document.getElementById("time");
const tickSound = document.getElementById("tickSound");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timeEl.textContent = `${hours}:${minutes}:${seconds}`;

    // play tick sound safely
    tickSound.currentTime = 0;
    tickSound.play().catch(() => {});
}

setInterval(updateClock, 1000);
updateClock();