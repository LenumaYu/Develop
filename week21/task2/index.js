function checkForm() {

    let firstName = document.querySelector('#firstName').value;
    let secondName = document.querySelector('#secondName').value;
    let password = document.querySelector('#newPassword').value;
    let email = document.querySelector('#inputEmail').value;
    let confirmPassword = document.querySelector('#confirmPassword').value;
    document.querySelector('#errorMessage').innerHTML = "";


    if (firstName == "") {
        document.querySelector('#errorMessage').innerHTML += "Заполните Имя<br>";
    }

    if (secondName == "") {
        document.querySelector('#errorMessage').innerHTML += "Заполните Фамилию<br>";
    }

    if (email == "") {
        document.querySelector('#errorMessage').innerHTML += "Заполните e-mail<br>";
    }

    if (password == "") {
        document.querySelector('#errorMessage').innerHTML += "Заполните пароль<br>";
    }
    if (!firstName.match(/^[а-яА-Я-]{3,16}$/g)) {
        document.querySelector('#errorMessage').innerHTML += "Имя указано не верно<br>";
    }
    if (!secondName.match(/^[а-яА-Я-]{3,16}$/g)) {
        document.querySelector('#errorMessage').innerHTML += "Фамилия указана не верно<br>";
    } else if (password != confirmPassword) {
        document.querySelector('#errorMessage').innerHTML += "Пароли не совпадают<br>";
    } else if (!password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) {
        document.querySelector('#errorMessage').innerHTML += "Ваш пароль слишком простой<br>";
    } else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
        document.querySelector('#errorMessage').innerHTML += "Вы неверно заполнили e-mail<br>";
    }


    if (confirmPassword == "") {
        document.querySelector('#errorMessage').innerHTML += "Подтвердите пароль<br>";
    } else {
        alert(`Добро пожаловать, ${firstName}!`)
    }
}

document.querySelector('button').addEventListener('click', checkForm);

document.querySelector('button').addEventListener('click', function (event) {
    event.preventDefault();
    let user = {
        firstName: document.querySelector('#firstName').value,
        secondName: document.querySelector('#secondName').value,
        password: document.querySelector('#newPassword').value,
        email: document.querySelector('#inputEmail').value,
        confirmPassword: document.querySelector('#confirmPassword').value
    }
    console.log(user);
    fetch ('https://httpbin.org/post', 
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {console.log(user);
    })
    .catch(error => console.log(error));
})