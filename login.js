document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    //error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    errorMessage.textContent = '';

    let isValid = true;

    if (!username) {
        nameError.textContent = 'Name is required!';
        isValid = false;
    }

    if (!email) {
        emailError.textContent = 'Email is required!';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email!';
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = 'Password is required!';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters!';
        isValid = false;
    }

    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Confirm Password is required!';
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match!';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('username', username);
        window.location.href = 'home.html'; 
    }
});

function validateEmail(email) {
    const valid_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return valid_email.test(String(email).toLowerCase());
}
