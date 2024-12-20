document.addEventListener('DOMContentLoaded', () => {
    // Switch between Login and Signup forms
    const showLoginBtn = document.getElementById('showLogin');
    const showSignupBtn = document.getElementById('showSignup');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        showLoginBtn.classList.add('active');
        showSignupBtn.classList.remove('active');
    });

    showSignupBtn.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        showSignupBtn.classList.add('active');
        showLoginBtn.classList.remove('active');
    });

    // Handle Signup Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const newUsername = document.getElementById('newUsername').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const newRole = document.getElementById('newRole').value;

        // Retrieve existing users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            username: newUsername,
            password: newPassword,
            role: newRole
        };

        // Check if user already exists
        const existingUser = users.find(user => user.username === newUsername);
        if (existingUser) {
            alert('Username already exists. Please choose a different one.');
        } else {
            // Add new user to the users array and store it in localStorage
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! You can now log in.');
            signupForm.reset();
            showLoginBtn.click(); // Switch back to login form
        }
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const role = document.getElementById('role').value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the credentials are valid
        const user = users.find(u => u.username === username && u.password === password && u.role === role);

        if (user) {
            alert(`Welcome ${role.charAt(0).toUpperCase() + role.slice(1)}!`);
            // Store role in sessionStorage
            sessionStorage.setItem('userRole', role);
            // Redirect to the respective dashboard based on role
            if (role === 'therapist') {
                window.location.href = 'therapist.html'; // Ensure this file exists
            } else if (role === 'supervisor') {
                window.location.href = 'supervisor.html'; // Ensure this file exists
            } else if (role === 'patient') {
                window.location.href = 'patient.html'; // Adjust this if needed
            } else {
                // If role is not recognized, redirect to login page
                window.location.href = 'login.html';
            }
        } else {
            alert('Invalid username or password. Please try again.');
        }

        // Reset the form after submission
        loginForm.reset();
    });
});
