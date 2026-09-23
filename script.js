function updateClock() {

    // Get the current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Display date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", options);
}


// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);