document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const resetLink = document.getElementById('resetPassword');
    const message = document.getElementById('loginMessage');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'admin' && password === '1234') {
          window.location.href = 'home.html';
        } else {
          message.textContent = 'Incorrect username or password!';
          message.style.color = 'red';
        }
      });
    }
  
    if (resetLink) {
      resetLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('A password reset link has been sent to your email!');
      });
    }
  });
  
