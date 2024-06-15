document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userData = JSON.parse(localStorage.getItem('data'));
        if (userData && userData.email === email && userData.password === password) {
          
            window.location.href = '../Thegioidienanh.html';
            
        } else {
            // Failed login
            alert('Invalid email or password. Please try again.');
        }

    })
})