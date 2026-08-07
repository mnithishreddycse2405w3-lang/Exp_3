document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";
    
    document.getElementById("registerForm").reset();
});