// Set default values for inputs
function defaultZero() {
    document.getElementById("input1").value = 0;
    document.getElementById("input2").value = 0;
}

// Function to compare input values
function compareInputs() {
    // Get the values from the inputs
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const message = document.getElementById("message");
    const error = document.getElementById("error");
    // Select the message element
    const messageElement = document.getElementById("message");

    // Clear any previous messages
    message.textContent = "";

    // Check if inputs are valid numbers
    if (isNaN(input1) || isNaN(input2)) {
        message.style.color = "red";
        message.textContent = "Please enter valid numbers.";
        return;
    }

    // Compare the values and set the message
    if (input1 > input2) {
        message.style.color = "red";
        message.textContent = `First number (${input1}) is greater than second number (${input2}).`;
    } else if (input1 < input2) {
        message.style.color = "red";
        message.textContent = `Second number (${input2}) is greater than first number (${input1}).`;
    } else {
        message.style.color = "green";
        message.textContent = `Both numbers (${input1} and ${input2}) are equal.`;
    }
}

// Add input event listeners for real-time validation and comparison
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    if (e.target.id === "input1" || e.target.id === "input2") {
        compareInputs();
    }
    e.preventDefault();
});

// Set default values on page load
window.onload = defaultZero;