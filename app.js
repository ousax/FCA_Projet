document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const resetLink = document.getElementById('resetPassword');
    const message = document.getElementById('loginMessage');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'FCAdmin' && password === 'oualidfca') {
          window.location.href = 'home.html';
        } else {
          message.textContent = 'Le mot de passe saisi est incorrect';
          message.style.color = 'red';
        }
      });
    }
  
    if (resetLink) {
      resetLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Nous avons vous envoyé des instruction pour reinitialiser votre mot de passe!');
      });
    }
  });
