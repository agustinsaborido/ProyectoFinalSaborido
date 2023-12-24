document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  let foundUser = false;

  users.forEach(user => {
    if (user.username === username && user.password === password) {
      foundUser = true;
      return;
    }
  });

  if (foundUser) {
    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html'
   
  } else {
    alert('Credenciales incorrectas');
  }
});
