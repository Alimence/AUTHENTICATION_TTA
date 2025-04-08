const users = [
    {
       username: 'admin',
       password: 'admin123',
       role: 'admin'
    },
    {
        username: 'editor',
       password: 'editor123',
       role: 'editor'
    }, 
    {
        username: 'viewer',
       password: 'viewer123',
       role: 'viewer'
    }
]

document.addEventListener('DOMcontentLoaded', () => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
        displayContent(savedRole);
    }
})

const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

     const username = document.querySelector('#userName').value.trim();
     const password = document.querySelector('#password').value.trim();
     const errorContainer = document.querySelector('#errorMessage');
     const successContainer = document.querySelector('#successMessage');

     if (!username || !password) {
        errorContainer.textContent = 'Please fill in all fields';
     } else {
        errorContainer.textContent = '';
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            errorContainer.textContent = '';
            successContainer.textContent = `Welcome ${user.role}`;
            localStorage.setItem('userRole', user.role);
            displayContent(user.role);
            //alert(`Welcome ${user.role}`);
        } else {
            errorContainer.textContent = 'Invalid username or password';
        }
    } 
})

function displayContent(role) {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.display = 'none';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    if (role === 'admin') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2>
            <p>You have access to manage all data and settings</p>
        `
    } else  if (role === 'editor') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2>
            <p>You have access to edit the content</p>
        `
    }  if (role === 'viewer') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2>
            <p>You have access to view the content</p>
        `
    }

    document.body.appendChild(contentDiv);
}