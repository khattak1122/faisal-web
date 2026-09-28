// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Contact Form

const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {

        form.reset();

        successMessage.style.display = "block";

    } else {

        alert("Something went wrong. Please try again.");

    }

});