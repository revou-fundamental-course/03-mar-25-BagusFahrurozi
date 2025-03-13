function validateForm(event) {
    event.preventDefault();
    const form = document.forms["message-form"];
    document.getElementById("sender-full-name").innerText = form["full-name"].value;
    document.getElementById("sender-birth-date").innerText = form["birth-date"].value;
    document.getElementById("sender-gender").innerText = form["gender"].value;
    document.getElementById("sender-messages").innerText = form["messages"].value;
}

let currentIndex = 0;
const slides = document.querySelectorAll(".banner img");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });
    slides[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % slides.length;
}
setInterval(showSlides, 3000);