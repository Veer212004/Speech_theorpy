// JavaScript for Contact Us Form
document.addEventListener("DOMContentLoaded", function () {
    const helpdeskForm = document.getElementById("helpdeskForm");

    helpdeskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Check for valid email pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate form submission (you can replace this with actual backend integration)
        alert("Thank you for contacting us, " + name + "! Your message has been sent.");

        // Clear the form after successful submission
        helpdeskForm.reset();
    });
});
