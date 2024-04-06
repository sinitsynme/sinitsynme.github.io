
const blackFridayDate = new Date("2023-11-11T00:00:00Z").getTime();

const countdown = document.getElementById("countdown");
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = blackFridayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "Черная Пятница уже здесь!";
    }
}, 1000);