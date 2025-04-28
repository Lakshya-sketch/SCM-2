function validateLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // --- IMPORTANT SECURITY NOTE ---
    // Storing credentials directly in client-side JavaScript is INSECURE.
    // This is for demonstration purposes ONLY.
    // In a real application, authentication MUST be handled on the server-side.
    const validUsername = 'user';      // Replace with your desired username
    const validPassword = 'password123'; // Replace with your desired password

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to BMI.html upon successful login
        window.location.href = 'BMI.html';
        return true; // Allow navigation
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the fields for better user experience (optional)
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.focus(); // Set focus back to the username field
        return false; // Prevent default form submission/navigation
    }
}

// Add an event listener to the form instead of using inline onsubmit
// This is generally considered better practice
document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Prevent the default form submission first
            e.preventDefault();
            // Then run the validation. If it returns true, the redirection will happen inside the function.
            validateLogin();
        });
    }
});
