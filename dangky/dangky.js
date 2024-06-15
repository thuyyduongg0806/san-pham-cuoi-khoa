document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const data = {
            email: email,
            password: password
        }

        localStorage.setItem('data', JSON.stringify(data))

    })
})
