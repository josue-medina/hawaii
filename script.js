// Set the date for the countdown (March 24, 2027, 16:00:00)
const eventDate = new Date("May 15, 2026 12:30:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the results in the elements
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<h3>¡El gran día ha llegado!</h3>";
    }
}, 1000);

// Optional: Add some interactive leaf movement or flower animations if desired
document.addEventListener('mousemove', (e) => {
    const leaves = document.querySelectorAll('.leaf');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    leaves.forEach((leaf, index) => {
        const speed = (index + 1) * 20;
        leaf.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${index === 0 ? 45 : 225}deg)`;
    });
});

// Background music autoplay workaround
document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay blocked: " + error);
        });
    }
}, { once: true });

document.addEventListener('touchstart', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay blocked: " + error);
        });
    }
}, { once: true });
