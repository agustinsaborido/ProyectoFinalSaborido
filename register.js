document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const userData = {
      username,
      password
    };
  
    saveUserData(userData);
  
    alert('Registro exitoso');
    window.location.href = 'login.html'; 
  });
  
  function saveUserData(userData) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  }
  