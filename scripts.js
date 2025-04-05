const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

     const username = document.querySelector('#userName').value;
     const password = document.querySelector('#password').value;
     const errorContainer = document.querySelector('#errorMessage');

     if (!username.trim() || !password.trim()) {
        errorContainer.textContent = 'Please fill in all fields';
     } else {
        errorContainer.textContent = '';
     }

})