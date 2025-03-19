document.addEventListener("DOMContentLoaded", function () {
    let selectedRating = 0;

    // Handle Emoji Rating Selection
    document.querySelectorAll(".emoji").forEach(emoji => {
        emoji.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            document.getElementById("rating").value = selectedRating;

            // Remove previous selection
            document.querySelectorAll(".emoji").forEach(e => e.classList.remove("selected"));

            // Highlight selected emoji
            this.classList.add("selected");
        });
    });

    // Handle Feedback Form Submission
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let rating = document.getElementById("rating").value;
        let responseMessage = document.getElementById("responseMessage");

        // Validate Form
        if (name === "" || email === "" || message === "" || rating === "") {
            responseMessage.style.color = "red";
            responseMessage.textContent = "All fields and rating are required!";
            return;
        }

        // Show Success Message
        responseMessage.style.color = "green";
        responseMessage.textContent = "Thank you for your feedback! 😊";

        // Clear Form Fields
        document.getElementById("feedbackForm").reset();
        document.querySelectorAll(".emoji").forEach(e => e.classList.remove("selected"));
    });
});
