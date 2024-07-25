//-------------- login popup box and register page code --------------//
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginPopup = document.getElementById('login-popup');
    const closeBtn = document.querySelector('.close');

    loginBtn.addEventListener('click', () => {
        loginPopup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        loginPopup.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.classList.add('hidden');
        }
    });

    registerBtn.addEventListener('click', () => {
        window.location.href = 'register.html';
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Simulate login validation
        if (username === 'test' && password === 'password') {
            if (role === 'student') {
                window.location.href = 'student-dashboard.html';
            } else if (role === 'lecturer') {
                window.location.href = 'lecturer-management.html';
            }
        } else {
            alert('Invalid username or password');
        }
    });
});
